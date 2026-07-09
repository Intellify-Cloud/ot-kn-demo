export type Cta = {
  label: string
  href: string
}

export type NavLink = Cta

export type StepItem = {
  title: string
  body: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export type TestimonialItem = {
  quote: string
  name: string
  detail: string
}

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export const siteText = {
  site: {
    name: 'Template Site',
    description:
      'A reusable Vue shell with composable sections, centralized content, and light-mode design tokens.',
    url: 'https://intellify-cloud.github.io/demo',
    locale: 'en_ZA',
    ogImage: '/og-image.jpg',
  },
  theme: {
    colorScheme: 'light',
    futureDarkModeClass: 'theme-dark',
  },
  sections: [
    'contact-bar',
    'nav-bar',
    'hero',
    'about',
    'steps',
    'map',
    'team',
    'testimonials',
    'contact',
    'footer',
  ],
  'contact-bar': {
    message: 'Reusable Vue shell template',
    phone: '+27 00 000 0000',
    email: 'hello@example.com',
  },
  'nav-bar': {
    logoText: 'Template Site',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Steps', href: '#steps' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Start', href: '#contact' },
  },
  hero: {
    eyebrow: 'Vue shell starter',
    title: 'Compose a clean site from reusable blocks.',
    body: 'Keep copy, metadata, section order, and placeholder content in one typed file. Reorder the homepage like a Jekyll include list, but stay fully Vue-native.',
    primaryCta: { label: 'View blocks', href: '#about' },
    secondaryCta: { label: 'Contact section', href: '#contact' },
  },
  about: {
    eyebrow: 'About the shell',
    title: 'A light foundation for future Vue sites.',
    body: 'This block is intentionally generic. Replace the text, change the section order, and adapt the theme tokens for each new project without changing the page architecture.',
    highlights: [
      'Centralized typed content',
      'Composable section registry',
      'Light mode now, dark-ready later',
    ],
  },
  steps: {
    eyebrow: 'Process',
    title: 'Spin up a new site in three moves.',
    items: [
      {
        title: 'Edit content',
        body: 'Update `siteText.ts` with the brand, page copy, links, and metadata.',
      },
      {
        title: 'Choose blocks',
        body: 'Add, remove, or reorder section names in the homepage registry.',
      },
      {
        title: 'Tune the theme',
        body: 'Adjust CSS variables for color, spacing, radius, and type.',
      },
    ],
  },
  map: {
    eyebrow: 'Location',
    title: 'Map placeholder',
    body: 'Add a real address and embed URL when a future site needs a map. Leave `embedUrl` empty to show this placeholder.',
    address: '',
    embedUrl: '',
  },
  team: {
    eyebrow: 'People',
    title: 'Team block',
    members: [
      {
        name: 'Team Member',
        role: 'Role or specialty',
        bio: 'Short placeholder bio for the reusable team card.',
      },
      {
        name: 'Team Member',
        role: 'Role or specialty',
        bio: 'Duplicate, remove, or replace these cards per site.',
      },
      {
        name: 'Team Member',
        role: 'Role or specialty',
        bio: 'The component also handles an empty members array cleanly.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Social proof',
    title: 'Testimonials block',
    items: [
      {
        quote:
          'This is placeholder testimonial copy. Replace it with a client quote when available.',
        name: 'Client Name',
        detail: 'Company or context',
      },
      {
        quote: 'Use two or three quotes for a balanced section, or leave the array empty.',
        name: 'Client Name',
        detail: 'Company or context',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start with a simple form.',
    body: 'This form posts normally and works without client-side JavaScript. Change the action for each future backend.',
    action: '/api/contact.php',
    method: 'post',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
    },
    submit: 'Send message',
  },
  footer: {
    brand: 'A reusable Vue shell for fast, SEO-aware, section-based websites.',
    columns: [
      {
        title: 'Sections',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Steps', href: '#steps' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Template',
        links: [
          { label: 'Content', href: '#hero' },
          { label: 'Theme', href: '#about' },
          { label: 'Blocks', href: '#steps' },
        ],
      },
    ],
    legalLinks: [{ label: 'Privacy', href: '/privacy-policy/' }],
  },
} as const

export type SiteText = typeof siteText
export type SectionName = (typeof siteText.sections)[number]
export type SectionData<Name extends SectionName> = (typeof siteText)[Name]
