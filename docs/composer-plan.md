# Composer Plan

Source: a single static HTML mock ("Empower OT") built with Tailwind's CDN
build, Google Fonts (Playfair Display + Inter), and Material Symbols icons.

## Mapping HTML sections → Vue

| HTML section (comment)        | Vue section component          | Primitive used     |
| ------------------------------ | ------------------------------- | ------------------- |
| `TopNavBar`                    | `components/NavBar.vue`         | —                    |
| `Hero Section`                 | `sections/HeroSection.vue`       | `HeroDeck.vue`       |
| `Specialized Disciplines`      | `sections/AboutSection.vue`      | `OfferingDeck.vue`   |
| `Meet the Visionary`           | `sections/TeamSection.vue`       | `MissionDeck.vue`    |
| `The Journey` (timeline)       | `sections/StepsSection.vue`      | —                    |
| `Map & Contact CTA`            | `sections/MapSection.vue` +      | —                    |
|                                 | `sections/ContactSection.vue`    |                      |
| `Footer`                       | `sections/SiteFooter.vue`        | —                    |

Two floating elements not in the original mock were added because they're
standard on clinic sites: `WhatsAppButton.vue` and `BackToTopButton.vue`.
Both are optional — delete them and their two lines in `App.vue` if unwanted.

No testimonials existed in the source mock, so `TestimonialsSection.vue`
was intentionally **not** invented — for a healthcare business, fabricated
patient quotes are a liability, not a placeholder. Add a real
`TestimonialsSection.vue` once you have quotes you're allowed to publish.

## Content model

All copy and structured content lives in two places, not in components:

- `src/assets/site.json` — anything list-like or data-like (nav items,
  discipline cards, the visionary's bio/stats, process steps, footer links,
  the studio address).
- `src/content/siteText.ts` — headings, button labels, and per-page meta
  copy that doesn't repeat across a list.

Components import from these and stay presentational. To change any text on
the site, edit one of these two files — you should rarely need to touch a
`.vue` file just to reword something.

## Two-tier components

- `components/*Deck.vue` — dumb, reusable, prop-driven blocks
  (`HeroDeck`, `OfferingDeck`, `MissionDeck`). They know nothing about
  `site.json`.
- `components/sections/*.vue` — wire a Deck (or hand-rolled markup, for
  simpler sections) to the real content and drop it onto the page.

This split means a Deck could be reused with different content elsewhere
(e.g. a second `MissionDeck` for a future team member) without copy-pasting
markup.

## Animation

The original page used a manual `IntersectionObserver` + class toggle for
fade-in-on-scroll. That's now a global directive, `v-reveal`
(`src/composables/useScrollReveal.ts`), applied to section roots. The CSS
classes it toggles (`fade-in-section` / `is-visible`) live in
`src/assets/theme.css`.
