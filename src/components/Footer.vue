<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()

const socials = [
  { name: 'X', href: '#', path: 'M18 2h3l-7 8 8 12h-6l-5-7-5 7H2l8-9L2 2h6l4 6z' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
]
</script>

<template>
  <footer class="mt-16 border-t border-slate-100 bg-slate-50">
    <div class="container-page py-12">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:pe-6">
          <div class="flex items-center gap-2">
            <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 21V12h6v9" />
              </svg>
            </span>
            <span class="text-xl font-extrabold text-ink-900">Deal</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-ink-500">{{ t('footer.about') }}</p>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-ink-900">{{ t('footer.quickLinks') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><RouterLink :to="{ name: 'home' }" class="text-ink-500 transition hover:text-brand-700">{{ t('nav.home') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'about' }" class="text-ink-500 transition hover:text-brand-700">{{ t('nav.about') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'contact' }" class="text-ink-500 transition hover:text-brand-700">{{ t('nav.contact') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'privacy' }" class="text-ink-500 transition hover:text-brand-700">{{ t('nav.privacy') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-ink-900">{{ t('footer.categories') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li><RouterLink :to="{ name: 'home', hash: '#categories' }" class="text-ink-500 transition hover:text-brand-700">{{ t('categories.cars.name') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'home', hash: '#categories' }" class="text-ink-500 transition hover:text-brand-700">{{ t('categories.furniture.name') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'home', hash: '#categories' }" class="text-ink-500 transition hover:text-brand-700">{{ t('categories.accessories.name') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'home', hash: '#categories' }" class="text-ink-500 transition hover:text-brand-700">{{ t('categories.houses.name') }}</RouterLink></li>
            <li><RouterLink :to="{ name: 'home', hash: '#categories' }" class="text-ink-500 transition hover:text-brand-700">{{ t('categories.mobiles.name') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wide text-ink-900">{{ t('footer.contactTitle') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm text-ink-500">
            <li>{{ t('contact.info.email') }}</li>
            <li dir="ltr" class="ltr:text-left rtl:text-right">{{ t('contact.info.phone') }}</li>
          </ul>
          <div class="mt-4 flex gap-3">
            <a v-for="s in socials" :key="s.name" :href="s.href" :aria-label="s.name"
               class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-500 ring-1 ring-slate-200 transition hover:bg-brand-600 hover:text-white">
              <svg v-if="s.icon === 'instagram'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <svg v-else-if="s.icon === 'facebook'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
              <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path :d="s.path" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-sm text-ink-500 sm:flex-row">
        <p>© {{ year }} Deal. {{ t('footer.rights') }}</p>
        <p>{{ t('footer.madeWith') }}</p>
      </div>
    </div>
  </footer>
</template>
