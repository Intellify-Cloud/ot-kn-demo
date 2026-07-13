<script setup lang="ts">
import HeroDeck from "../HeroDeck.vue";
import siteData from "../../assets/site.json";
import { siteText } from "../../content/siteText";
</script>

<template>
  <HeroDeck
    :image="siteData.hero.image"
    :image-alt="siteData.hero.imageAlt"
    :heading="siteText.hero.heading"
    :highlight="siteText.hero.highlight"
    :body="siteText.hero.body"
    :cta="siteText.hero.cta"
    :cta-href="siteText.hero.ctaHref"
    :cta-secondary="siteText.hero.ctaSecondary"
    :cta-secondary-href="siteText.hero.ctaSecondaryHref"
  />
</template>
