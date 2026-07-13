<script setup lang="ts">
export interface Discipline {
  size: "large" | "small" | "medium";
  image?: string;
  imageAlt?: string;
  icon?: string;
  eyebrow?: string;
  title: string;
  description: string;
  cta?: string;
}

defineProps<{ items: Discipline[] }>();
</script>

<template>
  <div class="grid grid-cols-1 gap-gutter md:grid-cols-12">
    <template v-for="item in items" :key="item.title">
      <!-- Large image card -->
      <div
        v-if="item.size === 'large'"
        class="group relative h-[400px] overflow-hidden rounded-xl border brass-border shadow-soft bg-surface md:col-span-8"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          :style="{ backgroundImage: `url('${item.image}')` }"
          role="img"
          :aria-label="item.imageAlt"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-0 p-10 text-white">
          <span
            v-if="item.eyebrow"
            class="mb-4 inline-block rounded-full bg-secondary px-3 py-1 font-label-md text-label-md uppercase tracking-widest text-on-secondary"
          >
            {{ item.eyebrow }}
          </span>
          <h3 class="mb-2 font-headline-lg text-headline-lg">{{ item.title }}</h3>
          <p class="max-w-md font-body-md text-body-md opacity-90">{{ item.description }}</p>
        </div>
      </div>

      <!-- Small text card -->
      <div
        v-else-if="item.size === 'small'"
        class="flex flex-col justify-between rounded-xl border brass-border bg-surface-container-high p-8 shadow-soft md:col-span-4"
      >
        <div>
          <span class="material-symbols-outlined mb-6 text-4xl text-secondary">{{ item.icon }}</span>
          <h3 class="mb-4 font-headline-md text-headline-md text-primary">{{ item.title }}</h3>
          <p class="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">{{ item.description }}</p>
        </div>
        <a href="#" class="group flex items-center gap-2 font-label-md text-label-md font-bold text-secondary">
          {{ item.cta?.toUpperCase() }}
          <span class="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
        </a>
      </div>

      <!-- Medium image card -->
      <div
        v-else
        class="group relative h-[350px] overflow-hidden rounded-xl border brass-border shadow-soft bg-surface md:col-span-8"
      >
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          :style="{ backgroundImage: `url('${item.image}')` }"
          role="img"
          :aria-label="item.imageAlt"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
        <div class="absolute inset-y-0 left-0 flex max-w-sm flex-col justify-center p-10 text-white">
          <h3 class="mb-2 font-headline-lg text-headline-lg">{{ item.title }}</h3>
          <p class="font-body-md text-body-md opacity-90">{{ item.description }}</p>
        </div>
      </div>
    </template>
  </div>
</template>
