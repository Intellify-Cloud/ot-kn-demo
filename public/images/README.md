# Site Images

Drop image files into the matching folder below, then reference them in
`src/assets/site.json`. Anything under `public/` is served from the site root,
so a file at `public/images/hero/studio.jpg` is referenced as **`/images/hero/studio.jpg`**
(no import, no build step — just the path string).

## Folders

| Folder        | What goes here                                  | Feeds this field in `site.json`      |
| ------------- | ----------------------------------------------- | ------------------------------------ |
| `hero/`       | Large banner / hero background photo            | `hero.image`                         |
| `team/`       | Team member portraits & headshots               | `visionary.image` (+ team members)   |
| `sections/`   | Offering / steps / about / feature photos       | `offerings[].image`, `steps[].image` |
| `logo/`       | Brand logo, wordmark, favicon source            | brand logo / `index.html` favicon    |

## How to use

1. Drop your image into the right folder, e.g. `public/images/hero/studio.jpg`.
2. Open `src/assets/site.json` and set the path:

   ```json
   "hero": {
     "image": "/images/hero/studio.jpg",
     "imageAlt": "Describe the image for accessibility & SEO"
   }
   ```

3. Save — the dev server hot-reloads and shows the new image.

## Naming tips

- Use lowercase, hyphenated names: `lead-therapist.jpg`, not `Lead Therapist.JPG`.
- Prefer `.webp` or `.avif` for photos (smaller); `.svg` for the logo.
- Always fill in the matching `imageAlt` text.
