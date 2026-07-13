<script setup lang="ts">
import ContactSection from "../components/sections/ContactSection.vue";
import { siteText } from "../content/siteText";
</script>

<template>
  <div>
    <section class="mx-auto max-w-3xl px-margin-mobile py-stack-lg md:px-margin-desktop">
      <h1 class="mb-6 font-headline-lg text-headline-lg text-primary">{{ siteText.pages.contact.title }}</h1>
      <p class="mb-10 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        {{ siteText.pages.contact.body }}
      </p>

      <form class="grid gap-4 md:grid-cols-2" @submit.prevent>
        <input
          type="text"
          placeholder="Full name"
          class="rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-body-md outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="Email address"
          class="rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-body-md outline-none focus:border-primary"
        />
        <textarea
          placeholder="How can we help?"
          rows="4"
          class="rounded-lg border border-outline-variant/50 bg-surface px-4 py-3 text-body-md outline-none focus:border-primary md:col-span-2"
        ></textarea>
        <button
          type="submit"
          class="rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-all hover:opacity-90 active:scale-95 md:col-span-2 md:w-fit"
        >
          Send message
        </button>
      </form>
    </section>

    <ContactSection />
  </div>
</template>
