<script setup lang="ts">
import { siteText } from "../content/siteText";
</script>

<template>
  <section class="mx-auto max-w-3xl px-margin-mobile py-stack-lg md:px-margin-desktop">
    <h1 class="mb-6 font-headline-lg text-headline-lg text-primary">{{ siteText.pages.privacy.title }}</h1>
    <p class="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
      {{ siteText.pages.privacy.body }}
    </p>
    <p class="font-body-md text-body-md leading-relaxed text-on-surface-variant">
      This page is a placeholder. Replace it with your practice's full privacy policy, including what
      information is collected, how it's used, and how patients can request changes or deletion.
    </p>
  </section>
</template>
