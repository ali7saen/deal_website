<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { locale, t } = useI18n()

function toggle() {
  setLocale(locale.value === 'ar' ? 'en' : 'ar')
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-semibold text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
    :aria-label="t('lang.label')"
    @click="toggle"
  >
    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <span>{{ t('lang.switch') }}</span>
  </button>
</template>
