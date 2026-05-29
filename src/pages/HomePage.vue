<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CategoryCard from '../components/CategoryCard.vue'
import FeatureCard from '../components/FeatureCard.vue'
import FAQItem from '../components/FAQItem.vue'
import carsImage from '../assets/cars.jpg'
import accessoryImage from '../assets/accessory.jpg'
import furnitureImage from '../assets/furniture.jpg'
import houseImage from '../assets/house.jpg'
import mobilesImage from '../assets/mobiles.jpg'


const { t } = useI18n()

const categories = [
  { key: 'cars', icon: 'cars', image: carsImage },
  { key: 'furniture', icon: 'furniture', image: furnitureImage },
  { key: 'accessories', icon: 'accessories', image: accessoryImage },
  { key: 'houses', icon: 'houses', image: houseImage },
  { key: 'mobiles', icon: 'mobiles', image: mobilesImage },
]

const features = ['fast', 'secure', 'chat', 'search', 'local', 'free']

const points = ['hero.point1', 'hero.point2', 'hero.point3']

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5']
const openFaq = ref(0)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? -1 : i
}
</script>

<template>
  <div>
  <!-- HERO -->
  <section class="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-white">
    <div class="pointer-events-none absolute -top-24 end-0 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-24 start-0 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl"></div>

    <div class="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <div class="animate-fade-up">
        <span class="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
          <span class="h-2 w-2 rounded-full bg-brand-500"></span>
          {{ t('hero.badge') }}
        </span>
        <h1 class="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
          <span class="bg-gradient-to-l from-brand-600 to-accent-500 bg-clip-text text-transparent">{{ t('hero.titleHighlight') }}</span>
        </h1>
        <p class="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">{{ t('hero.subtitle') }}</p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <RouterLink :to="{ name: 'contact' }" class="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3v12" /><path d="M8 11l4 4 4-4" /><path d="M4 19h16" />
            </svg>
            {{ t('hero.primaryCta') }}
          </RouterLink>
          <a href="#categories" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-900 ring-1 ring-slate-200 transition hover:ring-brand-300">
            {{ t('hero.secondaryCta') }}
          </a>
        </div>

        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <li v-for="p in points" :key="p" class="flex items-center gap-2 text-sm font-semibold text-ink-700">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            {{ t(p) }}
          </li>
        </ul>
      </div>

      <!-- Phone mockup -->
      <div class="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:120ms]">
        <div class="animate-float relative mx-auto aspect-[9/18] w-64 rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
          <div class="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-ink-900"></div>
          <div class="h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-brand-50 to-white">
            <div class="flex items-center justify-between px-5 pt-7">
              <span class="text-base font-extrabold text-brand-700">Deal</span>
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
              </span>
            </div>
            <div class="mx-4 mt-4 rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-100">
              <div class="flex items-center gap-2 text-slate-400">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
                <span class="text-[11px]">Search Deal…</span>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-2.5 px-4">
              <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <img :src="mobilesImage" alt="" class="h-16 w-full object-cover" loading="lazy" />
                <div class="space-y-1 p-2">
                  <div class="h-2 w-3/4 rounded bg-slate-200"></div>
                  <div class="h-2.5 w-1/2 rounded bg-brand-200"></div>
                </div>
              </div>

              <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <img :src="houseImage" alt="" class="h-16 w-full object-cover" loading="lazy" />
                <div class="space-y-1 p-2">
                  <div class="h-2 w-3/4 rounded bg-slate-200"></div>
                  <div class="h-2.5 w-1/2 rounded bg-brand-200"></div>
                </div>
              </div>


              <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <img :src="furnitureImage" alt="" class="h-16 w-full object-cover" loading="lazy" />
                <div class="space-y-1 p-2">
                  <div class="h-2 w-3/4 rounded bg-slate-200"></div>
                  <div class="h-2.5 w-1/2 rounded bg-brand-200"></div>
                </div>
              </div>


              <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <img :src="accessoryImage" alt="" class="h-16 w-full object-cover" loading="lazy" />
                <div class="space-y-1 p-2">
                  <div class="h-2 w-3/4 rounded bg-slate-200"></div>
                  <div class="h-2.5 w-1/2 rounded bg-brand-200"></div>
                </div>
              </div>


              <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100">
                <img :src="carsImage" alt="" class="h-16 w-full object-cover" loading="lazy" />
                <div class="space-y-1 p-2">
                  <div class="h-2 w-3/4 rounded bg-slate-200"></div>
                  <div class="h-2.5 w-1/2 rounded bg-brand-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-4 end-2 rotate-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100">
          <p class="text-[11px] font-semibold text-emerald-600">+ Listing sold!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CATEGORIES -->
  <section id="categories" class="scroll-mt-20 py-16 lg:py-24">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{{ t('categories.title') }}</h2>
        <p class="mt-3 text-ink-500">{{ t('categories.subtitle') }}</p>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          v-for="c in categories"
          :key="c.key"
          :icon="c.icon"
          :image="c.image"
          :name="t('categories.' + c.key + '.name')"
          :desc="t('categories.' + c.key + '.desc')"
        />
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features" class="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{{ t('features.title') }}</h2>
        <p class="mt-3 text-ink-500">{{ t('features.subtitle') }}</p>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="f in features"
          :key="f"
          :icon="f"
          :title="t('features.items.' + f + '.title')"
          :desc="t('features.items.' + f + '.desc')"
        />
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="scroll-mt-20 py-16 lg:py-24">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{{ t('faq.title') }}</h2>
        <p class="mt-3 text-ink-500">{{ t('faq.subtitle') }}</p>
      </div>
      <div class="mx-auto mt-12 max-w-3xl space-y-3">
        <FAQItem
          v-for="(k, i) in faqKeys"
          :key="k"
          :question="t('faq.items.' + k + '.q')"
          :answer="t('faq.items.' + k + '.a')"
          :open="openFaq === i"
          @toggle="toggleFaq(i)"
        />
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="pb-20">
    <div class="container-page">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-500 px-6 py-14 text-center shadow-xl sm:px-12">
        <div class="pointer-events-none absolute -top-16 -end-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"></div>
        <div class="pointer-events-none absolute -bottom-20 -start-10 h-64 w-64 rounded-full bg-accent-400/20 blur-2xl"></div>
        <h2 class="relative text-3xl font-extrabold text-white sm:text-4xl">{{ t('homeCta.title') }}</h2>
        <p class="relative mx-auto mt-4 max-w-2xl text-brand-50">{{ t('homeCta.subtitle') }}</p>
        <div class="relative mt-8">
          <RouterLink :to="{ name: 'contact' }" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50">
            {{ t('homeCta.button') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>
