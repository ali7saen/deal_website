<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = ['intro', 'collect', 'use', 'protect', 'rights', 'contact']
</script>

<template>
  <div>
  <section class="bg-gradient-to-b from-brand-50/70 to-white py-16 lg:py-20">
    <div class="container-page max-w-3xl text-center animate-fade-up">
      <h1 class="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{{ t('privacy.title') }}</h1>
      <p class="mt-4 text-sm font-medium text-ink-500">{{ t('privacy.updated') }}</p>
    </div>
  </section>

  <section class="py-14">
    <div class="container-page max-w-3xl">
      <div class="space-y-10">
        <article v-for="(s, i) in sections" :key="s">
          <h2 class="flex items-center gap-3 text-xl font-bold text-ink-900">
            <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600">{{ i + 1 }}</span>
            {{ t('privacy.' + s + '.title') }}
          </h2>
          <p class="mt-3 leading-relaxed text-ink-500">{{ t('privacy.' + s + '.body') }}</p>
        </article>
      </div>
    </div>
  </section>
  </div>
</template>
