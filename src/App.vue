<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SiteFooter from "./components/sections/SiteFooter.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import BackToTopButton from "./components/BackToTopButton.vue";
import { useSeoHead } from "./composables/useSeoHead";

useSeoHead();
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-on-background">
    <NavBar />
    <main class="flex-1">
      <RouterView />
    </main>
    <SiteFooter />
    <WhatsAppButton />
    <BackToTopButton />
  </div>
</template>
