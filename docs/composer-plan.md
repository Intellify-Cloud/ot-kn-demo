# Vue Shell Site Composer Plan

This repo is a reusable Vue shell for quickly starting future sites. The goal is to keep the site modular, fast, SEO-friendly, and easy to recompose in a Jekyll-like way without bringing in unnecessary dependencies.

## Core Decision

Use a Vue-native section registry instead of Liquid-style includes.

Chosen approach:

- Store content and section order in `src/content/siteText.ts`.
- Use typed objects for content, SEO metadata, navigation, and section registry.
- Keep the API shaped like YAML so it can later move to `siteText.yml` if needed.

Deferred YAML mode:

- If editing literal YAML becomes more important than zero dependencies later, add `vite-plugin-yaml`.
- Register it in `vite.config.ts`.
- Keep the same data shape as the TypeScript version.

This gives the Jekyll mental model:

```liquid
{% include hero.html %}
```

But implemented in Vue as:

```ts
sections: ["contact-bar", "nav-bar", "hero", "about", "steps"]
```

## Design Direction

Use `docs/linear-design.md` as visual inspiration only. It is not a brand specification for this shell.

Borrow:

- Warm canvas background.
- White content surfaces on cream.
- Strong charcoal typography.
- Restrained accent color.
- No drop shadows by default.
- Componentized spacing, radius, typography, and color tokens.

Do not copy:

- Intercom-specific wording, product names, navigation labels, or Fin AI language.
- Requirements that every section needs a product screenshot.
- Intercom's proprietary fonts.
- Pricing/helpdesk/product mockup assumptions unless a future site needs them.

## Shell Sections

Initial reusable blocks:

1. `contact-bar` - 20px top strip for phone, email, or small announcement.
2. `nav-bar` - 100px primary navigation.
3. `hero` - 80vh first viewport section.
4. `about` - generic text/media section.
5. `steps` - three-step process block.
6. `map` - iframe-based map block.
7. `team` - team/person/profile cards.
8. `testimonials` - quote cards.
9. `contact` - fallback-friendly contact form.
10. `footer` - footer navigation and structured data.

The shell should ship with placeholder content and empty-ish sections that are easy to replace.

## Content Shape

Preferred zero-dependency file:

`src/content/siteText.ts`

```ts
export const siteText = {
  site: {
    name: "Template Site",
    description: "Reusable Vue shell site template.",
    url: "https://example.com",
    locale: "en",
  },
  theme: {
    accent: "#ff5600",
  },
  sections: [
    "contact-bar",
    "nav-bar",
    "hero",
    "about",
    "steps",
    "map",
    "team",
    "testimonials",
    "contact",
    "footer",
  ],
  "contact-bar": {
    phone: "",
    email: "",
    announcement: "",
  },
  "nav-bar": {
    logoText: "Template Site",
    links: [
      { label: "About", href: "#about" },
      { label: "Steps", href: "#steps" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Contact", href: "#contact" },
  },
  hero: {
    eyebrow: "Reusable Vue shell",
    title: "Build a clean site from composable blocks.",
    body: "Swap copy, reorder sections, and reuse the same foundation for future sites.",
    primaryCta: { label: "Start here", href: "#contact" },
    secondaryCta: { label: "View sections", href: "#about" },
  },
  about: {
    eyebrow: "About",
    title: "Placeholder about section",
    body: "Replace this with project-specific copy.",
  },
  steps: {
    eyebrow: "Process",
    title: "Three simple steps",
    items: [
      { title: "Plan", body: "Define the page goal and content." },
      { title: "Compose", body: "Choose and order the blocks." },
      { title: "Launch", body: "Replace placeholders and publish." },
    ],
  },
  map: {
    title: "Find us",
    address: "",
    embedUrl: "",
  },
  team: {
    title: "Team",
    members: [],
  },
  testimonials: {
    title: "Testimonials",
    items: [],
  },
  contact: {
    title: "Contact",
    action: "/api/contact.php",
    method: "post",
    fields: ["name", "email", "phone", "message"],
  },
  footer: {
    copyright: "Template Site",
    links: [],
  },
} as const;
```

If literal YAML is chosen later, mirror this shape in `src/content/siteText.yml`.

## Section Composer

Let each section component own its semantic wrapper. Avoid wrapping every dynamic component in a generic `<section>`, because nav and footer need proper `<nav>` and `<footer>` semantics.

```vue
<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { siteText } from "@/content/siteText";

const componentMap = {
  "contact-bar": defineAsyncComponent(() => import("@/components/sections/ContactBar.vue")),
  "nav-bar": defineAsyncComponent(() => import("@/components/sections/NavBar.vue")),
  hero: defineAsyncComponent(() => import("@/components/sections/HeroSection.vue")),
  about: defineAsyncComponent(() => import("@/components/sections/AboutSection.vue")),
  steps: defineAsyncComponent(() => import("@/components/sections/StepsSection.vue")),
  map: defineAsyncComponent(() => import("@/components/sections/MapSection.vue")),
  team: defineAsyncComponent(() => import("@/components/sections/TeamSection.vue")),
  testimonials: defineAsyncComponent(() => import("@/components/sections/TestimonialsSection.vue")),
  contact: defineAsyncComponent(() => import("@/components/sections/ContactSection.vue")),
  footer: defineAsyncComponent(() => import("@/components/sections/SiteFooter.vue")),
} as const;
</script>

<template>
  <component
    :is="componentMap[name]"
    v-for="name in siteText.sections"
    :key="name"
    :data="siteText[name]"
  />
</template>
```

## BEM Approach

Use component-scoped BEM class names for stable shell blocks.

Examples:

- `.contact-bar`
- `.contact-bar__inner`
- `.nav-bar`
- `.nav-bar__link`
- `.hero-section`
- `.hero-section__title`
- `.hero-section--centered`

Keep modifiers rare. Prefer props for meaningful variants:

```vue
<HeroSection align="center" tone="warm" />
```

## Theming

Centralize theme primitives in CSS custom properties:

`src/assets/theme.css`

```css
:root {
  --color-canvas: #f5f1ec;
  --color-surface: #ffffff;
  --color-ink: #111111;
  --color-muted: #626260;
  --color-hairline: #d3cec6;
  --color-accent: #ff5600;

  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-24: 6rem;

  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

Best practice:

- Use fluid responsive layouts, not viewport-scaled font sizes.
- Keep body text at readable sizes.
- Avoid decorative gradients and shadows unless a future site needs them.
- Use the accent sparingly.

## SEO And Performance

Use `@unhead/vue`, already installed, for page metadata.

Base SEO requirements:

- Unique `<title>` and description.
- Canonical URL from site config.
- Open Graph title, description, image, and URL.
- JSON-LD for the organization or local business where relevant.
- Semantic section markup inside each component.
- One `h1` on the homepage.
- Lazy-load lower page sections where useful.
- Do not load map iframe until the map section is near viewport, or use a click-to-load placeholder.
- Keep images responsive with explicit dimensions.

## Files

New or revised files:

| File | Purpose |
|---|---|
| `src/content/siteText.ts` | Central site content and section registry |
| `src/assets/theme.css` | Shared design tokens |
| `src/assets/main.css` | Imports theme and base styles |
| `src/views/HomeView.vue` | Dynamic section composer |
| `src/components/sections/ContactBar.vue` | 20px top contact strip |
| `src/components/sections/NavBar.vue` | 100px primary navigation |
| `src/components/sections/HeroSection.vue` | 80vh hero |
| `src/components/sections/AboutSection.vue` | About block |
| `src/components/sections/StepsSection.vue` | Three-step block |
| `src/components/sections/MapSection.vue` | Map iframe block |
| `src/components/sections/TeamSection.vue` | Team/profile cards |
| `src/components/sections/TestimonialsSection.vue` | Quote cards |
| `src/components/sections/ContactSection.vue` | Contact form |
| `src/components/sections/SiteFooter.vue` | Footer and structured data |

Deferred if YAML is required later:

| File | Purpose |
|---|---|
| `src/content/siteText.yml` | YAML version of central content |
| `vite.config.ts` | Register YAML plugin |

## Implementation Order

Status: first shell pass has been implemented in `src/content/siteText.ts`, `src/views/HomeView.vue`, `src/assets/theme.css`, and `src/components/sections/*`.

1. Create theme tokens and base CSS.
2. Create typed `src/content/siteText.ts` registry.
3. Build section composer.
4. Build shell section components with placeholder content.
5. Add SEO metadata and structured data.
6. Add responsive behavior.
7. Run `npm run build`.
8. Run `npm run format`.
9. Document how to add, remove, and reorder sections.

## Open Questions

These are the missing choices worth answering before implementation:

1. Should this shell use plain CSS/BEM, Tailwind utilities, or a hybrid? Tailwind is already installed.
2. Should the contact form always post to PHP, or should the template support multiple backends?
3. Should the map section be enabled by default, or disabled until an address/embed URL exists?
4. Do you want a built-in page generator pattern for additional routes, or only a homepage composer for now?
