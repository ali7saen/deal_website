import { createI18n } from 'vue-i18n'
import ar from '../locales/ar.json'
import en from '../locales/en.json'

const STORAGE_KEY = 'deal-locale'

export function getStoredLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'ar' || saved === 'en') return saved
  return 'ar'
}

export function applyDir(locale) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', locale)
}

export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  applyDir(locale)
}

const startLocale = getStoredLocale()

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: startLocale,
  fallbackLocale: 'en',
  messages: { ar, en },
})

applyDir(startLocale)
