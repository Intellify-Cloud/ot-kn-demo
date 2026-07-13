<script setup lang="ts">
import siteData from "../../assets/site.json";
</script>

<template>
  <div class="absolute inset-0 bg-surface-container">
    <div
      class="h-full w-full bg-cover bg-center grayscale contrast-75"
      :style="{ backgroundImage: `url('${siteData.contact.mapImage}')` }"
      role="img"
      :aria-label="siteData.contact.mapImageAlt"
    ></div>
  </div>
</template>
