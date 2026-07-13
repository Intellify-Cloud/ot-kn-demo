<script setup lang="ts">
import OfferingDeck, { type Discipline } from "../OfferingDeck.vue";
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";

const disciplines = siteData.disciplines as Discipline[];
</script>

<template>
  <section id="services" v-reveal class="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
    <div class="mb-16 text-center">
      <h2 class="mb-2 font-headline-lg text-headline-lg text-primary">{{ siteText.disciplines.heading }}</h2>
      <div class="mx-auto h-1 w-20 rounded-full bg-secondary"></div>
    </div>

    <OfferingDeck :items="disciplines" />
  </section>
</template>
