<script setup lang="ts">
import { RouterLink } from "vue-router";
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";
</script>

<template>
  <footer class="mt-stack-lg rounded-t-xl border-t border-outline-variant/20 bg-surface-container">
    <div class="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile py-stack-lg sm:grid-cols-2 lg:grid-cols-4 md:px-margin-desktop">
      <div class="flex flex-col gap-4">
        <div class="font-headline-md text-headline-md font-bold text-primary">{{ siteData.brand.name }}</div>
        <p class="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
          {{ siteData.footer.description }}
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <h5 class="mb-2 font-bold font-label-md text-label-md uppercase text-primary">
          {{ siteText.footer.servicesHeading }}
        </h5>
        <a
          v-for="service in siteData.footer.services"
          :key="service"
          href="#services"
          class="text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
        >
          {{ service }}
        </a>
      </div>

      <div class="flex flex-col gap-3">
        <h5 class="mb-2 font-bold font-label-md text-label-md uppercase text-primary">
          {{ siteText.footer.companyHeading }}
        </h5>
        <RouterLink
          v-for="link in siteData.footer.company"
          :key="link.label"
          :to="link.to"
          class="text-body-sm text-on-surface-variant transition-colors hover:text-on-surface"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="flex flex-col gap-4">
        <h5 class="font-bold font-label-md text-label-md uppercase text-primary">
          {{ siteText.footer.newsletterHeading }}
        </h5>
        <p class="font-body-sm text-body-sm text-on-surface-variant">{{ siteText.footer.newsletterBody }}</p>
        <form class="relative" @submit.prevent>
          <input
            type="email"
            :placeholder="siteText.footer.newsletterPlaceholder"
            class="w-full rounded-full border border-outline-variant/50 bg-surface px-4 py-2 text-body-sm outline-none focus:border-primary focus:ring-0"
          />
          <button
            type="submit"
            class="absolute bottom-1 right-1 top-1 rounded-full bg-primary px-4 text-on-primary transition-transform active:scale-95"
            aria-label="Subscribe"
          >
            <span class="material-symbols-outlined text-[18px]">send</span>
          </button>
        </form>
        <div class="mt-2 flex gap-4">
          <a href="#" class="text-on-surface-variant transition-colors hover:text-secondary">
            <span class="material-symbols-outlined">public</span>
          </a>
          <a href="#" class="text-on-surface-variant transition-colors hover:text-secondary">
            <span class="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-outline-variant/10 px-margin-mobile py-6 text-center font-label-md text-label-md text-on-surface-variant/60 md:px-margin-desktop">
      {{ siteData.footer.copyright }}
    </div>
  </footer>
</template>
