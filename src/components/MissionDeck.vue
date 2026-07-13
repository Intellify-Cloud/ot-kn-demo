<script setup lang="ts">
interface Stat {
  value: string;
  label: string;
}

defineProps<{
  eyebrow: string;
  name: string;
  image: string;
  imageAlt: string;
  bio: string;
  quote: string;
  stats: Stat[];
  cta: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center gap-16 md:flex-row">
    <div class="relative w-full md:w-1/2">
      <div class="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-lg border brass-border"></div>
      <div class="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-primary/10"></div>
      <img
        :src="image"
        :alt="imageAlt"
        class="aspect-[4/5] w-full rounded-xl border border-outline-variant/30 object-cover shadow-lg"
      />
    </div>

    <div class="w-full md:w-1/2">
      <span class="mb-4 block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
        {{ eyebrow }}
      </span>
      <h2 class="mb-6 font-headline-xl text-headline-lg-mobile text-primary md:text-headline-xl">{{ name }}</h2>
      <p class="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">{{ bio }}</p>
      <p class="mb-8 font-body-md text-body-md italic leading-relaxed text-on-surface-variant">“{{ quote }}”</p>

      <div class="flex gap-4">
        <template v-for="(stat, index) in stats" :key="stat.label">
          <div v-if="index > 0" class="mx-4 h-12 w-px bg-outline-variant"></div>
          <div class="flex flex-col">
            <span class="font-headline-md text-headline-md text-primary">{{ stat.value }}</span>
            <span class="font-label-md text-label-md text-on-surface-variant">{{ stat.label }}</span>
          </div>
        </template>
      </div>

      <button
        class="mt-10 rounded-full border-2 border-secondary px-8 py-3 font-bold text-secondary transition-all hover:bg-secondary hover:text-on-secondary"
      >
        {{ cta }}
      </button>
    </div>
  </div>
</template>
