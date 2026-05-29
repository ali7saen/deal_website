<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import logoImage from '../assets/icon.svg'

const { t } = useI18n()
const route = useRoute()
const mobileOpen = ref(false)

const links = [
  { name: 'home', to: { name: 'home' }, label: 'nav.home' },
  { name: 'about', to: { name: 'about' }, label: 'nav.about' },
  { name: 'contact', to: { name: 'contact' }, label: 'nav.contact' },
  { name: 'privacy', to: { name: 'privacy' }, label: 'nav.privacy' },
]

watch(() => route.fullPath, () => { mobileOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-md">
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <!-- Logo -->
      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2" aria-label="Deal home">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-600/30">
          <img :src="logoImage" alt="" class="h-5 w-5">
        </span>
        <span class="text-xl font-extrabold tracking-tight text-ink-900">Deal</span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="rounded-lg px-3 py-2 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
          active-class="text-brand-700 bg-brand-50"
        >
          {{ t(link.label) }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <RouterLink
          :to="{ name: 'contact' }"
          class="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 sm:inline-flex"
        >
          {{ t('cta.getStarted') }}
        </RouterLink>

        <!-- Mobile toggle -->
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition hover:bg-slate-100 md:hidden"
          :aria-label="mobileOpen ? t('nav.close') : t('nav.menu')"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <nav v-if="mobileOpen" class="border-t border-slate-100 bg-white md:hidden">
        <div class="container-page flex flex-col py-3">
          <RouterLink
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            class="rounded-lg px-3 py-3 text-base font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
            active-class="text-brand-700 bg-brand-50"
          >
            {{ t(link.label) }}
          </RouterLink>
          <RouterLink
            :to="{ name: 'contact' }"
            class="mt-2 rounded-full bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white"
          >
            {{ t('cta.getStarted') }}
          </RouterLink>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
