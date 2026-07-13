<script setup lang="ts">
defineProps<{
  image: string;
  imageAlt: string;
  heading: string;
  highlight: string;
  body: string;
  cta: string;
}>();
</script>

<template>
  <section class="mx-auto my-stack-lg max-w-container-max px-margin-mobile md:px-margin-desktop">
    <div class="relative flex h-[55vh] items-center justify-start overflow-hidden rounded-3xl border border-outline-variant/20 shadow-soft">
      <div class="absolute inset-0 z-0">
        <div
          class="h-full w-full bg-contain bg-center bg-no-repeat"
          :style="{ backgroundImage: `url('${image}')`, backgroundColor: 'rgb(var(--color-surface-container))' }"
          role="img"
          :aria-label="imageAlt"
        ></div>
        <div class="absolute inset-0 bg-black/10"></div>
      </div>

      <div class="relative z-10 w-full px-margin-mobile md:w-[45%] md:px-margin-desktop">
        <div class="rounded-xl border border-outline-variant/20 bg-surface/80 p-10 shadow-soft backdrop-blur-lg md:p-16">
          <h1 class="mb-6 font-headline-xl text-headline-lg-mobile text-primary md:text-headline-xl">
            {{ heading }} <br />
            <span class="brushed-brass">{{ highlight }}</span>
          </h1>
          <p class="mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            {{ body }}
          </p>
          <button
            class="rounded-full bg-primary px-10 py-5 font-headline-md text-headline-md text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
          >
            {{ cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
