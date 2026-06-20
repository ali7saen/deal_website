<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const channels = [
  {
    key: 'email',
    labelKey: 'contact.info.emailLabel',
    valueKey: 'contact.info.email',
    href: 'mailto:haider.alwide@gmail.com',
    dir: 'ltr',
    path: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M22 6l-10 7L2 6'],
  },
  {
    key: 'phone',
    labelKey: 'contact.info.phoneLabel',
    valueKey: 'contact.info.phone',
    href: 'tel:+9647888311167',
    dir: 'ltr',
    path: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'],
  },
  {
    key: 'phone2',
    labelKey: 'contact.info.phone2Label',
    valueKey: 'contact.info.phone2',
    href: 'tel:+9647800035750',
    dir: 'ltr',
    path: ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z'],
  },
]
</script>

<template>
  <div>
    <section class="bg-gradient-to-b from-brand-50/70 to-white py-16 lg:py-20">
      <div class="container-page max-w-3xl text-center animate-fade-up">
        <h1 class="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">{{ t('contact.title') }}</h1>
        <p class="mt-4 text-lg text-ink-500">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="py-14">
      <div class="container-page max-w-3xl">
        <div class="grid gap-6 sm:grid-cols-2">
          <a v-for="c in channels" :key="c.key" :href="c.href"
            class="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/10">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path v-for="(d, i) in c.path" :key="i" :d="d" />
              </svg>
            </span>
            <span class="min-w-0">
              <span class="block text-xs font-medium text-ink-500">{{ t(c.labelKey) }}</span>
              <span class="mt-0.5 block truncate font-semibold text-ink-900" :dir="c.dir">{{ t(c.valueKey) }}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
