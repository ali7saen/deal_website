<script setup>
defineProps({
  icon: { type: String, default: 'furniture' },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, default: '' },
})

const paths = {
  furniture: ['M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6', 'M3 14h18', 'M5 18v2', 'M19 18v2'],
  cars: ['M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13', 'M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z', 'M6.5 16h.01', 'M17.5 16h.01'],
  houses: ['M3 11l9-7 9 7', 'M5 10v10h14V10', 'M9 20v-6h6v6'],
  accessories: ['M12 2a7 7 0 0 0-4 12.7V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.3A7 7 0 0 0 12 2z', 'M9 22h6'],
  mobiles: ['M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z', 'M11 18h2'],
}
</script>

<template>
  <div class="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10">
    <div class="relative h-40 overflow-hidden bg-brand-50">
      <img
        v-if="image"
        :src="image"
        :alt="name"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-ink-900/45 to-transparent"></div>
      <span class="absolute bottom-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-brand-600 shadow">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path v-for="(d, i) in (paths[icon] || paths.furniture)" :key="i" :d="d" />
        </svg>
      </span>
    </div>
    <div class="p-5">
      <h3 class="text-lg font-bold text-ink-900">{{ name }}</h3>
      <p class="mt-1.5 text-sm leading-relaxed text-ink-500">{{ desc }}</p>
    </div>
  </div>
</template>
