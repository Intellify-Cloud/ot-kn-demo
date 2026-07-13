<script setup lang="ts">
const phone = "10000000000";
const message = "Hi Kerriska Naidu, I'd like to book a consultation.";
const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Kerriska Naidu on WhatsApp"
    class="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-soft transition-transform hover:scale-105 active:scale-95"
  >
    <span class="material-symbols-outlined">chat</span>
  </a>
</template>
