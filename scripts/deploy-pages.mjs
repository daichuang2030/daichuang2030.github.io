import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, rmSync, cpSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const repo = 'daichuang2030/daichuang2030.github.io';
const site = 'https://daichuang2030.github.io';
const auth = ['-c', 'credential.helper=', '-c', 'credential.helper=!gh auth git-credential'];
const env = { ...process.env, SITE_URL: site, BASE_PATH: '/', ASTRO_TELEMETRY_DISABLED: '1' };
const run = (command, args, cwd = root) => execFileSync(command, args, { cwd, env, stdio: 'inherit' });
const capture = (command, args, cwd = root) => execFileSync(command, args, { cwd, env, encoding: 'utf8' }).trim();
const account = JSON.parse(capture('gh', ['api', 'user']));
if (account.login !== 'daichuang2030') throw new Error('Sign in to the intended GitHub account before publishing.');
for (const script of ['check', 'build', 'test']) run('npm', ['run', script]);
const staging = mkdtempSync(join(tmpdir(), 'peter-pages-'));
const clone = join(staging, 'site');
run('git', [...auth, 'clone', '--branch', 'gh-pages', '--single-branch', `https://github.com/${repo}.git`, clone]);
if (!existsSync(join(clone, '.nojekyll')) || !existsSync(join(clone, 'index.html'))) throw new Error('Unexpected publishing branch contents; refusing to replace them.');
for (const item of readdirSync(clone)) if (item !== '.git') rmSync(join(clone, item), { recursive: true, force: true });
cpSync(join(root, 'dist'), clone, { recursive: true });
writeFileSync(join(clone, '.nojekyll'), '');
run('git', ['config', 'user.name', 'Peter DAI Chuang'], clone);
run('git', ['config', 'user.email', `${account.id}+${account.login}@users.noreply.github.com`], clone);
run('git', ['add', '--all'], clone);
if (!capture('git', ['status', '--porcelain'], clone)) {
  console.log('The published branch already matches this build.');
} else {
  run('git', ['commit', '-m', 'Update personal website'], clone);
  run('git', [...auth, 'push', 'origin', 'gh-pages'], clone);
  console.log(`Published branch updated. Confirm the Pages deployment at https://github.com/${repo}/actions`);
}
rmSync(staging, { recursive: true, force: true });
