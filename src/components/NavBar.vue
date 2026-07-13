<script setup lang="ts">
import { RouterLink } from "vue-router";
import siteData from "../assets/site.json";
import { siteText } from "../content/siteText";

const nav = siteData.nav;
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md">
    <nav class="mx-auto flex h-20 max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
      <RouterLink to="/" class="font-headline-md text-headline-md font-bold text-primary">
        {{ siteData.brand.name }}
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
        class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-all duration-200 hover:opacity-90 active:scale-95"
      >
        {{ siteText.nav.cta }}
      </button>
    </nav>
  </header>
</template>
