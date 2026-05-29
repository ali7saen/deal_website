<script setup>
defineProps({
  icon: { type: String, default: 'star' },
  title: { type: String, required: true },
  desc: { type: String, required: true },
})

const paths = {
  fast: ['M13 2L3 14h7l-1 8 10-12h-7z'],
  secure: ['M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z', 'M9 12l2 2 4-4'],
  chat: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.3-4.3'],
  local: ['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  free: ['M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6', 'M2 7h20v5H2z', 'M12 22V7', 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z', 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'],
}
</script>

<template>
  <div class="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/10">
    <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path v-for="(d, i) in (paths[icon] || paths.fast)" :key="i" :d="d" />
      </svg>
    </span>
    <h3 class="mt-5 text-lg font-bold text-ink-900">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ desc }}</p>
  </div>
</template>
