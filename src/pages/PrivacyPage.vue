<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = [
  'intro',
  'collect',
  'use',
  'permissions',
  'thirdParty',
  'retention',
  'children',
  'protect',
  'changes',
  'contact',
]

// الأقسام المميّزة (مهمة لمتطلبات المتاجر مثل حذف الحساب)
const highlighted = ['retention']
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
          <article v-for="(s, i) in sections" :key="s" :class="highlighted.includes(s)
            ? 'rounded-2xl border border-red-200 bg-red-50/60 p-6'
            : ''">
            <h2 class="flex items-center gap-3 text-xl font-bold"
              :class="highlighted.includes(s) ? 'text-red-700' : 'text-ink-900'">
              <span class="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold" :class="highlighted.includes(s)
                ? 'bg-red-100 text-red-600'
                : 'bg-brand-50 text-brand-600'">{{ i + 1 }}</span>
              {{ t('privacy.' + s + '.title') }}
            </h2>
            <p class="mt-3 leading-relaxed" :class="highlighted.includes(s) ? 'text-red-900/80' : 'text-ink-500'">{{
              t('privacy.' + s + '.body') }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>