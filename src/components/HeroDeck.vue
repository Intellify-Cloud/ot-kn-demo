<script setup lang="ts">
// Full-bleed hero. Layout adapted from the shadcn/framer-motion
// `hero-section-4` reference in docs/hero.md, rewritten as a Vite/Vue
// component: no React, no framer-motion. The staggered mount reveal is
// driven by the CSS `hero-rise` keyframes in assets/theme.css.
defineProps<{
  image: string;
  imageAlt: string;
  heading: string;
  highlight: string;
  body: string;
  cta: string;
  ctaHref: string;
  ctaSecondary: string;
  ctaSecondaryHref: string;
}>();
</script>

<template>
  <section
    class="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden"
  >
    <!-- Background image, full-width cover -->
    <div
      class="hero-bg absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url('${image}')` }"
      role="img"
      :aria-label="imageAlt"
    ></div>

    <!-- Overlay for text readability -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"
      aria-hidden="true"
    ></div>

    <!-- Centered content -->
    <div
      class="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-margin-mobile text-center md:px-margin-desktop"
    >
      <h1
        class="hero-rise d1 font-headline-xl text-headline-lg-mobile text-white md:text-headline-xl"
      >
        {{ heading }}
        <br />
        <span class="brushed-brass">{{ highlight }}</span>
      </h1>
      <p
        class="hero-rise d2 mt-6 max-w-2xl font-body-lg text-body-lg leading-8 text-white/90"
      >
        {{ body }}
      </p>
      <div
        class="hero-rise d3 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          :href="ctaHref"
          class="rounded-full bg-primary px-10 py-5 font-headline-md text-headline-md text-on-primary shadow-lg transition-[opacity,transform] hover:opacity-90 active:scale-95"
        >
          {{ cta }}
        </a>
        <a
          :href="ctaSecondaryHref"
          class="rounded-full border-2 border-white/80 px-8 py-4 font-bold text-white transition-[background-color,color,transform] hover:bg-white hover:text-primary active:scale-95"
        >
          {{ ctaSecondary }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* On phones, shift the hero image 15% to the left (show more of its right side) */
@media (max-width: 767px) {
  .hero-bg {
    background-position: 65% center;
  }
}
</style>
