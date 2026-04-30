# Deploying Ayan's Freelance to Vercel

This site is part of a pnpm monorepo, but a single `vercel.json` at the
**repo root** already tells Vercel exactly how to build and serve only this
artifact. No manual configuration is needed beyond connecting the Git repo.

## 1. Push the repo to GitHub / GitLab / Bitbucket

Push the **entire monorepo** (the project root, not just this folder).
Vercel needs `pnpm-workspace.yaml`, the root `package.json`, and the lockfile
to install dependencies.

## 2. Create a new Vercel project

1. Go to https://vercel.com/new and import the repository.
2. **Framework Preset:** leave as "Other" (Vercel will read `vercel.json`).
3. **Root Directory:** keep the default (the repo root). Do **not** change
   it to `artifacts/ayan-freelance` — `vercel.json` at the root handles
   monorepo routing for you.
4. **Build & Output settings:** leave everything blank — `vercel.json`
   overrides them with:
   - install: `npm install -g pnpm@9 && pnpm install --frozen-lockfile --ignore-scripts`
   - build: `pnpm --filter @workspace/ayan-freelance run build`
   - output: `artifacts/ayan-freelance/dist/public`
5. **Environment Variables:** none required. The Vite config defaults
   `BASE_PATH` to `/` and `PORT` to `5173` for production builds.
6. Click **Deploy**.

## 3. Custom domain

After the first successful deploy, add your domain in
**Project Settings → Domains** (e.g. `ayanpal.com`). Vercel will issue an
SSL certificate automatically.

Once the real domain is live, update the canonical/OG URL in
`artifacts/ayan-freelance/index.html` from
`https://ayanpal.com/` to your actual domain so Google indexes it under
the right URL.

## 4. SPA routing

`vercel.json` includes a catch-all rewrite to `/index.html` so wouter's
client-side router works on direct URL hits and refreshes:

```json
"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
```

## 5. Caching headers

`vercel.json` sets aggressive immutable caching on hashed JS/CSS bundles
in `/assets/*` and a 30-day cache on `/images/*` for fast repeat visits.

## What's been verified

- ✅ `pnpm --filter @workspace/ayan-freelance run build` produces a clean
  static bundle in `artifacts/ayan-freelance/dist/public` with **no
  warnings or errors**.
- ✅ All asset paths use root-relative `/images/...` URLs, which resolve
  correctly when served from a custom domain root.
- ✅ Google Fonts load via `<link>` in `index.html` (no Tailwind v4
  layer-ordering warnings).
- ✅ SEO meta tags, Open Graph, Twitter cards, and Schema.org structured
  data are in place for indexing under "Ayan Pal", "ATSFy founder",
  "AI consultant Tripura/Agartala", etc.
- ✅ The 3D logo is wired as the favicon, Apple touch icon, and OG share
  image.
- ✅ No backend dependency — the contact form opens the user's email
  client via `mailto:`, and WhatsApp/Calendly/UPI tiles are pure links.
