import type { APIRoute } from 'astro';
import { essays } from '../data/essays';
import { homePath, notePath, type Locale } from '../data/site';
export const GET: APIRoute = ({ site }) => {
  const paths = (['en', 'zh'] as Locale[]).flatMap(locale => [homePath(locale), ...essays.map(essay => notePath(locale, essay.slug))]);
  const escape = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const urls = site ? paths.map(path => `<url><loc>${escape(new URL(path, site).href)}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
