<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

const route = useRoute()
const { t, locale } = useI18n()

function updateTitle() {
  const key = route.meta.titleKey
  const page = key ? t(key) : ''
  document.title = page ? `${page} — Deal` : 'Deal'
}

watch([() => route.fullPath, locale], updateTitle, { immediate: true })
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <AppHeader />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.page-leave-to {
  opacity: 0;
}
</style>
