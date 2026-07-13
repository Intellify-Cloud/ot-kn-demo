<script setup lang="ts">
import MissionDeck from "../MissionDeck.vue";
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";
</script>

<template>
  <section id="approach" v-reveal class="bg-surface-container py-stack-lg">
    <div id="about" class="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <MissionDeck
        :eyebrow="siteData.visionary.eyebrow"
        :name="siteData.visionary.name"
        :image="siteData.visionary.image"
        :image-alt="siteData.visionary.imageAlt"
        :bio="siteData.visionary.bio"
        :quote="siteData.visionary.quote"
        :stats="siteData.visionary.stats"
        :cta="siteText.visionary.cta"
      />
    </div>
  </section>
</template>
