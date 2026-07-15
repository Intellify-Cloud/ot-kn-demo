<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import siteData from "../assets/site.json";
import { siteText } from "../content/siteText";

const nav = siteData.nav;
const mobileOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md">
    <nav class="mx-auto flex h-[85px] max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
      <RouterLink to="/" class="flex items-center" @click="mobileOpen = false">
        <img
          :src="siteData.brand.logo"
          :alt="`${siteData.brand.name} — Occupational Therapist`"
          class="h-10 w-auto md:h-[85px] md:p-2.5"
        />
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in nav"
          :key="item.label"
          :href="item.href"
          class="border-b-2 border-transparent pb-1 font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary first:border-primary first:text-primary first:font-bold"
        >
          {{ item.label }}
        </a>
      </div>

      <button
        class="hidden rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-all duration-200 hover:opacity-90 active:scale-95 md:block"
      >
        {{ siteText.nav.cta }}
      </button>

      <!-- Mobile menu toggle -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-surface-container md:hidden"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="material-symbols-outlined">{{ mobileOpen ? "close" : "menu" }}</span>
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <div
      v-if="mobileOpen"
      id="mobile-nav"
      class="flex flex-col gap-1 border-t border-outline-variant/30 bg-surface px-margin-mobile pb-6 pt-2 md:hidden"
    >
      <a
        v-for="item in nav"
        :key="item.label"
        :href="item.href"
        class="rounded-lg px-3 py-3 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </a>
      <button
        class="mt-3 rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-all duration-200 hover:opacity-90 active:scale-95"
        @click="mobileOpen = false"
      >
        {{ siteText.nav.cta }}
      </button>
    </div>
  </header>
</template>
