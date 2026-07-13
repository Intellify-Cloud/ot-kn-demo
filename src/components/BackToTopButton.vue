<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 480;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300"
    leave-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="visible"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform hover:scale-105 active:scale-95"
      @click="scrollToTop"
    >
      <span class="material-symbols-outlined">arrow_upward</span>
    </button>
  </Transition>
</template>
