<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Toast from './Toast.vue'

const { t } = useI18n()

const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', subject: '', message: '' })
const submitting = ref(false)
const toast = ref(false)
let toastTimer = null

const subjectKeys = ['inquiry', 'support', 'complaint', 'suggestion', 'partnership']

function validate() {
  errors.name = form.name.trim() ? '' : t('contact.errors.nameRequired')

  if (!form.email.trim()) errors.email = t('contact.errors.emailRequired')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = t('contact.errors.emailInvalid')
  else errors.email = ''

  errors.subject = form.subject ? '' : t('contact.errors.subjectRequired')

  if (!form.message.trim()) errors.message = t('contact.errors.messageRequired')
  else if (form.message.trim().length < 10) errors.message = t('contact.errors.messageShort')
  else errors.message = ''

  return !errors.name && !errors.email && !errors.subject && !errors.message
}

async function handleSubmit() {
  if (!validate()) return
  submitting.value = true
  // Mock submit — no real backend
  await new Promise((r) => setTimeout(r, 900))
  submitting.value = false

  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''

  toast.value = true
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = false), 5000)
}

const fieldClass = (hasError) =>
  [
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-slate-400',
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
      : 'border-slate-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100',
  ].join(' ')
</script>

<template>
  <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
    <!-- Name -->
    <div>
      <label for="cf-name" class="mb-1.5 block text-sm font-semibold text-ink-900">{{ t('contact.form.name') }}</label>
      <input id="cf-name" v-model="form.name" type="text" :placeholder="t('contact.form.namePlaceholder')" :class="fieldClass(!!errors.name)" :aria-invalid="!!errors.name" />
      <p v-if="errors.name" class="mt-1.5 text-xs font-medium text-red-500">{{ errors.name }}</p>
    </div>

    <!-- Email + Phone -->
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="cf-email" class="mb-1.5 block text-sm font-semibold text-ink-900">{{ t('contact.form.email') }}</label>
        <input id="cf-email" v-model="form.email" type="email" dir="ltr" :placeholder="t('contact.form.emailPlaceholder')" :class="fieldClass(!!errors.email)" :aria-invalid="!!errors.email" />
        <p v-if="errors.email" class="mt-1.5 text-xs font-medium text-red-500">{{ errors.email }}</p>
      </div>
      <div>
        <label for="cf-phone" class="mb-1.5 block text-sm font-semibold text-ink-900">{{ t('contact.form.phone') }}</label>
        <input id="cf-phone" v-model="form.phone" type="tel" dir="ltr" :placeholder="t('contact.form.phonePlaceholder')" :class="fieldClass(false)" />
      </div>
    </div>

    <!-- Subject -->
    <div>
      <label for="cf-subject" class="mb-1.5 block text-sm font-semibold text-ink-900">{{ t('contact.form.subject') }}</label>
      <select id="cf-subject" v-model="form.subject" :class="fieldClass(!!errors.subject)" :aria-invalid="!!errors.subject">
        <option value="" disabled>{{ t('contact.form.subjectPlaceholder') }}</option>
        <option v-for="k in subjectKeys" :key="k" :value="k">{{ t('contact.subjects.' + k) }}</option>
      </select>
      <p v-if="errors.subject" class="mt-1.5 text-xs font-medium text-red-500">{{ errors.subject }}</p>
    </div>

    <!-- Message -->
    <div>
      <label for="cf-message" class="mb-1.5 block text-sm font-semibold text-ink-900">{{ t('contact.form.message') }}</label>
      <textarea id="cf-message" v-model="form.message" rows="5" :placeholder="t('contact.form.messagePlaceholder')" :class="fieldClass(!!errors.message)" :aria-invalid="!!errors.message"></textarea>
      <p v-if="errors.message" class="mt-1.5 text-xs font-medium text-red-500">{{ errors.message }}</p>
    </div>

    <button
      type="submit"
      :disabled="submitting"
      class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      <svg v-if="submitting" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" class="opacity-25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
      {{ submitting ? t('contact.form.sending') : t('contact.form.submit') }}
    </button>
  </form>

  <Toast :show="toast" :message="t('contact.success')" @close="toast = false" />
</template>
