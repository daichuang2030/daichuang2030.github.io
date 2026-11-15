import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parseHTML } from 'linkedom';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const site = process.env.SITE_URL;
async function walk(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(files.map(f => f.isDirectory() ? walk(join(dir, f.name)) : join(dir, f.name)))).flat();
}
const files = await walk(root);
const pages = files.filter(f => f.endsWith('.html'));
const docs = await Promise.all(pages.map(async path => ({ path, document: parseHTML(await readFile(path, 'utf8')).document })));
const stripBase = path => base && path.startsWith(base + '/') ? path.slice(base.length) : path;
async function resolveLocal(url) {
  let path = join(root, decodeURIComponent(stripBase(url.pathname)));
  if (url.pathname.endsWith('/')) path = join(path, 'index.html');
  return path;
}

test('nine complete HTML pages are generated', () => {
  assert.equal(pages.length, 9);
  for (const {path, document} of docs) {
    assert.equal(document.querySelectorAll('h1').length, 1, path);
    assert.equal(document.querySelectorAll('main').length, 1, path);
    assert.ok(document.querySelector('title')?.textContent.includes('Peter DAI Chuang'), path);
    assert.ok(document.querySelector('meta[name="description"]')?.getAttribute('content'), path);
    assert.ok(['en','zh-CN'].includes(document.documentElement.lang), path);
    assert.ok(document.querySelector('a.skip-link[href="#main"]'), path);
  }
});

test('no duplicate IDs; all local links, anchor targets and assets exist', async () => {
  for (const {path, document} of docs) {
    const ids = [...document.querySelectorAll('[id]')].map(el => el.id);
    assert.equal(ids.length, new Set(ids).size, `Duplicate IDs in ${path}`);
    const pageUrl = new URL((base || '') + '/' + path.slice(root.length).replace(/index\.html$/, ''), 'https://test.invalid');
    for (const el of document.querySelectorAll('a[href],link[href],script[src],img[src]')) {
      const href = el.getAttribute('href') || el.getAttribute('src');
      if (!href || /^(https?:|mailto:|tel:|data:)/.test(href)) continue;
      const url = new URL(href, pageUrl);
      const target = await resolveLocal(url);
      await assert.doesNotReject(() => stat(target), `Missing ${href} in ${path}`);
      if (url.hash && target.endsWith('.html')) {
        const targetDoc = docs.find(d => d.path === target)?.document || parseHTML(await readFile(target, 'utf8')).document;
        assert.ok(targetDoc.getElementById(decodeURIComponent(url.hash.slice(1))), `Missing anchor ${href} in ${path}`);
      }
    }
  }
});

test('external links are safe and images have descriptions', () => {
  for (const {document, path} of docs) {
    for (const a of document.querySelectorAll('a[target="_blank"]')) {
      assert.ok(a.getAttribute('rel')?.includes('noopener'), path);
      assert.ok(a.getAttribute('rel')?.includes('noreferrer'), path);
    }
    for (const image of document.querySelectorAll('img')) assert.ok(image.getAttribute('alt'), path);
  }
});

test('English and Chinese homepages have keyboard-ready tabs', () => {
  for (const {document} of docs.filter(d => d.document.querySelector('[data-practice]'))) {
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    assert.equal(tabs.length, 3);
    assert.equal(tabs.filter(t => t.getAttribute('aria-selected') === 'true').length, 1);
    for (const tab of tabs) assert.ok(document.getElementById(tab.getAttribute('aria-controls')));
  }
});

test('privacy and metadata match explicit deployment configuration', async () => {
  const robots = await readFile(join(root, 'robots.txt'), 'utf8');
  const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
  for (const {document} of docs) {
    const json = document.querySelector('script[type="application/ld+json"]');
    assert.equal(JSON.parse(json.textContent).name, 'Peter DAI Chuang');
    assert.equal(Boolean(document.querySelector('link[rel="canonical"]')), Boolean(site));
    if (!site) assert.equal(document.querySelector('meta[name="robots"]').getAttribute('content'), 'noindex,nofollow');
  }
  if (site) {
    assert.ok(robots.includes('Allow: /'));
    assert.equal((sitemap.match(/<loc>/g) || []).length, 8);
    assert.ok(sitemap.includes(site.replace(/\/$/, '') + base + '/'));
  } else {
    assert.ok(robots.includes('Disallow: /'));
    assert.ok(!sitemap.includes('test.invalid'));
    assert.equal((sitemap.match(/<loc>/g) || []).length, 0);
  }
});

test('essays disclose editorial draft status in both languages', () => {
  const notes = docs.filter(d => d.path.includes('/notes/'));
  assert.equal(notes.length, 6);
  for (const {document, path} of notes) {
    assert.ok(document.querySelector('.article-disclosure')?.textContent.trim(), path);
    assert.equal(document.querySelectorAll('.article-body section').length, 3, path);
    assert.ok(document.querySelector('.copy-link'), path);
  }
});

test('static assets remain lightweight and no remote fonts or trackers ship', async () => {
  const scripts = files.filter(f => f.endsWith('.js'));
  const scriptBytes = (await Promise.all(scripts.map(f => stat(f)))).reduce((n, s) => n+s.size, 0);
  const inlineBytes = Math.max(...docs.map(({document}) => [...document.querySelectorAll('script:not([src])')].filter(s => !['application/json', 'application/ld+json'].includes(s.getAttribute('type'))).reduce((n, s) => n + Buffer.byteLength(s.textContent), 0)));
  assert.ok(scriptBytes + inlineBytes < 20000, `${scriptBytes + inlineBytes} bytes JavaScript exceeds 20KB`);
  const webps = files.filter(f => f.endsWith('.webp'));
  assert.equal(webps.length, 3);
  for (const f of webps) assert.ok((await stat(f)).size < 60000, f);
  assert.ok((await stat(join(root, 'social-card.png'))).size < 250000);
  for (const {document} of docs) {
    const remoteResources = [...document.querySelectorAll('script[src],link[rel="stylesheet"],iframe')].filter(el => /^https?:/.test(el.getAttribute('src') || el.getAttribute('href') || ''));
    assert.equal(remoteResources.length, 0);
  }
});
