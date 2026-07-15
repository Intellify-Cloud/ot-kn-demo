<script setup lang="ts">
import MapSection from "./MapSection.vue";
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";
</script>

<template>
  <section class="relative h-[400px]">
    <MapSection />

    <div class="absolute inset-0 flex items-center justify-center bg-primary/20">
      <div
        class="mx-margin-mobile max-w-md rounded-xl border border-secondary/20 bg-surface/95 p-6 text-center shadow-soft backdrop-blur-md sm:p-10"
      >
        <h3 class="mb-4 font-headline-md text-headline-md text-primary">{{ siteText.contact.heading }}</h3>
        <p class="mb-6 font-body-md text-body-md text-on-surface-variant">{{ siteData.contact.address }}</p>
        <button class="rounded-full bg-secondary px-8 py-3 font-bold text-on-secondary shadow-md hover:opacity-90">
          {{ siteText.contact.cta }}
        </button>
      </div>
    </div>
  </section>
</template>
