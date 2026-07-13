<script setup lang="ts">
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
  <section class="mx-auto my-stack-lg max-w-container-max px-margin-mobile md:px-margin-desktop">
    <div
      class="relative flex h-[55vh] items-center justify-start overflow-hidden rounded-3xl border border-outline-variant/20 shadow-soft"
    >
      <!-- Background image (contained so the whole image fits, no cropping) -->
      <div class="absolute inset-0 z-0">
        <div
          class="h-full w-full bg-contain bg-center bg-no-repeat"
          :style="{
            backgroundImage: `url('${image}')`,
            backgroundColor: '#f0eee9',
          }"
          role="img"
          :aria-label="imageAlt"
        ></div>
        <!-- Subtle overlay for text readability -->
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <!-- Content card -->
      <div class="relative z-10 w-full px-margin-mobile md:w-[45%] md:px-margin-desktop">
        <div
          class="rounded-xl border border-outline-variant/20 bg-surface/80 p-10 shadow-soft backdrop-blur-lg md:p-16"
        >
          <h1
            class="hero-rise d1 mb-6 font-headline-xl text-headline-lg-mobile text-primary md:text-headline-xl"
          >
            {{ heading }} <br />
            <span class="brushed-brass">{{ highlight }}</span>
          </h1>
          <p
            class="hero-rise d2 mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant"
          >
            {{ body }}
          </p>
          <div class="hero-rise d3 flex flex-wrap items-center gap-4">
            <a
              :href="ctaHref"
              class="rounded-full bg-primary px-10 py-5 font-headline-md text-headline-md text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
            >
              {{ cta }}
            </a>
            <a
              :href="ctaSecondaryHref"
              class="rounded-full border-2 border-secondary px-8 py-4 font-bold text-secondary transition-all hover:bg-secondary hover:text-on-secondary active:scale-95"
            >
              {{ ctaSecondary }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
