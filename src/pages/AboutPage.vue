<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import onlineStoreImage from '../assets/online-store.jpg'
const { t } = useI18n()
</script>

<template>
  <div>
  <!-- Header -->
  <section class="bg-gradient-to-b from-brand-50/70 to-white py-16 lg:py-20">
    <div class="container-page max-w-3xl text-center animate-fade-up">
      <h1 class="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{{ t('about.title') }}</h1>
      <p class="mt-4 text-lg text-ink-500">{{ t('about.subtitle') }}</p>
    </div>
  </section>

  <!-- Intro -->
  <section class="py-14">
    <div class="container-page grid items-center gap-10 lg:grid-cols-2">
      <div>
        <h2 class="text-2xl font-extrabold text-ink-900 sm:text-3xl">{{ t('about.introTitle') }}</h2>
        <p class="mt-4 leading-relaxed text-ink-500">{{ t('about.introBody') }}</p>
      </div>
      <div class="overflow-hidden rounded-3xl shadow-lg">
        <img :src="onlineStoreImage" :alt="t('about.introTitle')" class="h-full w-full object-cover" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- Vision & Mission -->
  <section class="py-14">
    <div class="container-page grid gap-6 md:grid-cols-2">
      <div class="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
          </svg>
        </span>
        <h3 class="mt-5 text-xl font-bold text-ink-900">{{ t('about.visionTitle') }}</h3>
        <p class="mt-3 leading-relaxed text-ink-500">{{ t('about.visionBody') }}</p>
      </div>
      <div class="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
        <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-600">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
          </svg>
        </span>
        <h3 class="mt-5 text-xl font-bold text-ink-900">{{ t('about.missionTitle') }}</h3>
        <p class="mt-3 leading-relaxed text-ink-500">{{ t('about.missionBody') }}</p>
      </div>
    </div>
  </section>

  <!-- Story -->
  <section class="py-14">
    <div class="container-page max-w-3xl">
      <h2 class="text-2xl font-extrabold text-ink-900 sm:text-3xl">{{ t('about.storyTitle') }}</h2>
      <p class="mt-4 leading-relaxed text-ink-500">{{ t('about.storyBody') }}</p>
    </div>
  </section>

  <!-- CTA -->
  <section class="pb-20 pt-6">
    <div class="container-page text-center">
      <RouterLink :to="{ name: 'contact' }" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700">
        {{ t('cta.contactUs') }}
      </RouterLink>
    </div>
  </section>
  </div>
</template>
