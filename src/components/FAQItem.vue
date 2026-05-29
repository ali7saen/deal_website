<script setup>
defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  open: { type: Boolean, default: false },
})
const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="overflow-hidden rounded-2xl border border-slate-100 bg-white transition" :class="open ? 'shadow-md ring-1 ring-brand-100' : 'shadow-sm'">
    <button
      type="button"
      class="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
      :aria-expanded="open"
      @click="emit('toggle')"
    >
      <span class="text-base font-semibold text-ink-900">{{ question }}</span>
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition" :class="open ? 'rotate-180' : ''">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </button>
    <div class="accordion-body px-5" :class="{ open }">
      <div>
        <p class="pb-5 text-sm leading-relaxed text-ink-500">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>
