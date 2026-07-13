# Template Usage

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Change the copy

Almost everything editable lives in two files — you shouldn't need to
touch component markup for text changes:

- `src/assets/site.json` — nav links, hero image, discipline cards, the
  visionary's bio/stats, process steps, footer links, studio address.
- `src/content/siteText.ts` — headings, button labels, per-page `<title>`
  and meta description copy.

Images are referenced by URL in `site.json`. Swap in your own hosted
images (or add files under `public/` and reference `/your-file.jpg`).

## Add a page

1. Add a view in `src/views/YourView.vue`.
2. Register a route in `src/router/index.ts`.
3. Add copy to `siteText.pages` in `src/content/siteText.ts` if the page
   needs a title/meta description (picked up automatically by
   `useSeoHead`, keyed by route `name`).
4. Link to it from `NavBar.vue` or `SiteFooter.vue` with `<RouterLink>`.

## Add a section to the home page

1. Build a presentational primitive in `components/*Deck.vue` if the
   layout is reusable, or just write markup straight into a
   `components/sections/*.vue` file if it's a one-off.
2. Pull its content from `site.json` / `siteText.ts` rather than
   hardcoding strings.
3. Wrap the section root with `v-reveal` if it should fade in on scroll.
4. Drop the section into `src/views/HomeView.vue` in the order you want
   it to appear.

## Deploy

`vercel.json` rewrites all routes to `index.html` so client-side routing
works on Vercel. `deploy.sh` installs, builds, and runs
`vercel --prod` — run `vercel login` once first, or wire up the
`VERCEL_TOKEN` env var in CI.

`.env.development` / `.env.production` hold `VITE_*` variables read via
`import.meta.env`. Update `VITE_SITE_URL` in `.env.production` to your
real domain before deploying (used for canonical/meta tags if you extend
`useSeoHead`).

## What's intentionally not included

- **Testimonials**: no real patient quotes existed in the source mock, so
  none were invented. See `docs/composer-plan.md` for why.
- **CMS wiring**: content is static JSON/TS, not fetched from a backend.
  If you outgrow that, the natural seam is swapping `site.json`'s import
  for a fetch inside a Pinia store (`src/stores/`) and reading from the
  store in sections instead of importing the JSON directly.
