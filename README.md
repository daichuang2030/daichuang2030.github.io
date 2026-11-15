# Peter DAI Chuang · Personal website

A bilingual personal website connecting AI, industry, and human possibility.

- Website address: https://daichuang2030.github.io/
- Source repository: https://github.com/daichuang2030/daichuang2030.github.io
- Hosting: GitHub Pages, serving the `gh-pages` branch.
- Editable Astro source: `main` branch.

## Local development

Requires Node 22.23.4+ and npm 9.6.5+.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/ for English or http://127.0.0.1:4321/zh/ for Chinese.

```sh
npm run check
npm run build
npm test
```

The static build produces nine HTML pages, optimized portrait images, local fonts, sharing metadata, robots.txt and a sitemap. It needs no database, API keys or paid hosting.

## Publish updates

The initial publication uses branch-based GitHub Pages deployment. This works with the standard GitHub CLI repository authorization; no additional permission to write GitHub Actions workflows is required.

1. Edit and commit source changes to `main`.
2. Run `node scripts/deploy-pages.mjs` from a GitHub-authenticated environment.
3. The script checks, builds and tests the site, clones the existing `gh-pages` branch into a temporary directory, replaces its generated website files, and pushes an ordinary commit. It does not force-push or alter `main`.
4. Check the Pages deployment in the repository's Actions tab and confirm the live pages.

GitHub repository setting: **Settings → Pages → Deploy from a branch → gh-pages → / (root)**.

### Optional GitHub Actions migration

A complete automatic source-build workflow is preserved at `deployment/github-pages-actions.yml`. To enable it later, authorize workflow-file writes, move it to `.github/workflows/deploy.yml`, and change Pages source to **GitHub Actions**. It supports both root and project-site URLs. It is deliberately inactive in the initial branch-based deployment.

### Indexing

Local builds without `SITE_URL` are marked `noindex,nofollow`. The publishing script supplies the actual public origin, enabling indexing, canonical URLs, alternate-language links, and the eight-page sitemap.

## Content editing

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | English/Chinese biography, navigation, links and section text |
| `src/data/essays.ts` | Bilingual essays and summaries |
| `src/assets/peter-portrait.png` | Owner-supplied portrait with requested corner-mark removal |
| `src/styles/global.css` | Design tokens, responsive layouts and print styles |
| `src/components/Home.astro` | Homepage and interactive practice tabs |
| `src/components/Essay.astro` | Essay reading page and sharing feedback |
| `src/layouts/Layout.astro` | Navigation, metadata and footer |
| `public/social-card.png` | Social-sharing image |

## Privacy and editorial integrity

No analytics, third-party fonts, embedded social feeds, confidential business figures, or private contact details. Public biographical sources and owner-provided background inform the site. The three original essays are labeled editorial drafts, distinct from the separately linked LinkedIn publication. The owner requested publication and the removal of the portrait's small corner mark; only that background region was edited.

Local review and provenance files are ignored by Git and excluded from the public repository.

## Validation

`npm test` checks all nine pages, internal routes and anchors, local assets, duplicate IDs, image descriptions, safe external links, language metadata, structured data, canonical URLs, sitemap, tab relationships, draft disclosures and asset-size budgets. Deployment is considered complete only after the public URL is verified.
