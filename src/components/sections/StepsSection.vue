<script setup lang="ts">
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";
</script>

<template>
  <section v-reveal class="mx-auto max-w-container-max overflow-hidden px-margin-mobile py-stack-lg md:px-margin-desktop">
    <div class="mb-20 text-center">
      <h2 class="mb-4 font-headline-lg text-headline-lg text-primary">{{ siteText.steps.heading }}</h2>
      <p class="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">{{ siteText.steps.body }}</p>
    </div>

    <div class="relative">
      <div class="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-outline-variant/30 md:block"></div>

      <div class="relative z-10 grid grid-cols-1 gap-gutter md:grid-cols-4">
        <div
          v-for="step in siteData.steps"
          :key="step.number"
          class="group rounded-xl border brass-border bg-surface p-8 text-center shadow-soft transition-transform hover:-translate-y-2"
        >
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant bg-surface-container transition-colors group-hover:border-secondary"
          >
            <span class="material-symbols-outlined text-primary group-hover:text-secondary">{{ step.icon }}</span>
          </div>
          <span class="mb-2 block font-bold font-label-md text-label-md text-secondary">
            {{ siteText.steps.label.toUpperCase() }} {{ step.number }}
          </span>
          <h4 class="mb-2 font-headline-md text-headline-md text-primary">{{ step.title }}</h4>
          <p class="font-body-sm text-body-sm text-on-surface-variant">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
