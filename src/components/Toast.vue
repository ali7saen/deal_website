<script setup>
defineProps({
  show: { type: Boolean, default: false },
  message: { type: String, default: '' },
})
const emit = defineEmits(['close'])
</script>

<template>
  <transition name="toast">
    <div
      v-if="show"
      class="fixed bottom-6 inset-x-4 z-[60] mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl shadow-emerald-600/10 sm:inset-x-auto sm:end-6"
      role="status"
      aria-live="polite"
    >
      <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <p class="flex-1 pt-1 text-sm font-medium text-ink-900">{{ message }}</p>
      <button type="button" class="text-ink-500 transition hover:text-ink-900" aria-label="close" @click="emit('close')">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  </transition>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
