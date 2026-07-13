# Design Notes

Carried over 1:1 from the source HTML mock's inline Tailwind config
(`tailwind.config.js` in this repo). Nothing was restyled — the goal of
this pass was faithful structural conversion, not a redesign.

## Palette

Material 3–style token names, sage/olive primary with a warm terracotta
secondary and a brushed-brass accent used only for the hero headline and
card borders:

- `primary` `#334f2b` — headings, primary buttons
- `secondary` `#8c4e2e` — accents, links, secondary CTAs
- `surface` / `background` `#fbf9f4` — warm off-white base
- `on-surface-variant` `#434840` — body copy
- Brushed brass gradient (`#d4af37 → #f4d03f → #b8860b`) — `.brushed-brass`
  utility in `theme.css`, used sparingly on the hero highlight text

Full token list (30+ roles: containers, "on-*" pairs, fixed variants) is in
`tailwind.config.js` under `theme.extend.colors` — treat it as the source
of truth rather than duplicating hexes in components.

## Type

- Display: **Playfair Display** (600/700) — all `headline-*` sizes
- Body/UI: **Inter** (400/600) — `body-*` and `label-md`
- Custom `fontSize` scale (`headline-xl`, `headline-lg`, `headline-md`,
  `headline-lg-mobile`, `body-lg`, `body-md`, `body-sm`, `label-md`) bakes
  in line-height, letter-spacing, and weight per role — always reach for
  these over ad hoc `text-*`/`font-*` combinations.

## Layout

- Custom spacing scale: `margin-mobile` (16px) / `margin-desktop` (40px)
  for page gutters, `gutter` (24px) for grid gaps, `stack-sm/md/lg` for
  vertical rhythm between sections.
- Content is capped at `max-w-container-max` (1200px).
- Cards use `brass-border` (a translucent gold hairline) and
  `shadow-soft` (a diffuse, low-contrast shadow) — never the Tailwind
  default `shadow-*` scale, to keep the "brushed brass" material feel
  consistent.

## Motion

Scroll-reveal only (`v-reveal` directive), plus hover scale/translate on
cards and buttons, and `active:scale-95` on all buttons for tactile press
feedback. `prefers-reduced-motion` is respected globally in `base.css`.
