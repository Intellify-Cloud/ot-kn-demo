<script setup lang="ts">
import { siteText } from "../content/siteText";
</script>

<template>
  <section class="mx-auto max-w-3xl px-margin-mobile py-stack-lg md:px-margin-desktop">
    <h1 class="mb-6 font-headline-lg text-headline-lg text-primary">{{ siteText.pages.portfolio.title }}</h1>
    <p class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
      {{ siteText.pages.portfolio.body }}
    </p>
  </section>
</template>
