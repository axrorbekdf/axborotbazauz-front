<script setup lang="ts">
const modelStore = useHomeStore();
const loadingStore = useLoadingStore();

const filter = defineProps({
  search: {
    type: String,
    default: null,
    required: false
  },
  categorySlug: {
    type: String,
    default: null,
    required: false
  },
  subjectSlug: {
    type: String,
    default: null,
    required: false
  }
});

const page = ref(1)
const pageCount = ref(10)

onMounted(async () => {
  loadingStore.setSearch(true);
  await modelStore.getAllRecentMaterials(filter.search, page.value, pageCount.value, filter.categorySlug, filter.subjectSlug)
  .then(() => {
    loadingStore.setSearch(false);
  })
  .finally(() => {
    loadingStore.setSearch(false);
  }); 
});


watch(page, async (newPage) => {
  loadingStore.setPagination(true);
  await modelStore.getAllRecentMaterials(filter.search, newPage, pageCount.value, filter.categorySlug, filter.subjectSlug)
  .then(() => {
    loadingStore.setPagination(false);
  })
  .finally(() => {
    loadingStore.setPagination(false);
  });
});

const meta = computed(() => (modelStore.getMaterials as Array<any>).flatMap(item => item.slug.split("-")).join(", "));

useHead({
  title: 'Xush kelibsiz! - Qidirganizni topasiz!',
  meta: [
    // Umumiy meta
    { name: 'description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
    { name: 'keywords', content: meta },
    { name: 'author', content: 'https://drivesoft.uz' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Open Graph (Facebook, Telegram va boshqalar uchun)
    { property: 'og:title', content: 'axborotbaza.uz - qidirganizni topasiz!' },
    { property: 'og:description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://axborotbaza.uz/' },
    { property: 'og:image', content: 'https://axborotbaza.uz/favicon.ico' },  // 1200x630 tavsiya etiladi

  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ]
})


// Highlight funksiyasi
const highlight =  (text:any) => {
  if (!filter.search.trim()) return text

  // Qidirilayotgan matndan regex yaratamiz (xavfsiz)
  const escapedSearch = filter.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escapedSearch})`, 'gi')

  // Match bo‘lsa, o‘rab qo‘yiladi
  return text.replace(regex, '<span class="bg-yellow-300 font-bold">$1</span>')
}
</script>

<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <h2 v-if="loadingStore.isSearch" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Qidirilmoqda...!</h2>
        <section v-else>
          
          <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mb-6">
            <div>
              <h2 v-if="loadingStore.isPagination" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Keyingi sahifa yuklanmoqda...</h2>
              <h2 v-else-if="page > 1" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">{{page}} - sahifa yuklandi.</h2>
              <h2 v-else class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Qidirish natijalari</h2>
            </div>
            <div>
              <UPagination size="xl" v-model="page" :page-count="pageCount" :total="modelStore.getMeta?.total" color="neutral" :inactiveButton="{ variant: 'link' }" :prevButton="{ variant: 'link' }" :nextButton="{variant:'link'}"/>
            </div>
          </div>

          <div class="space-y-4">
              <!-- Single Item -->
              <NuxtLink :to="'/document/material/'+item.slug" v-for="item in modelStore.getMaterials as Array<any>" :key="item" class="flex flex-wrap items-center gap-4 p-4 border border-purple-400 rounded-lg">
                  <div class="w-6 h-6 bg-purple-500 rounded-full" style="background-color: #0DDDEA"></div>
                  <div class="flex-1">
                  <h3 class="font-bold text-sm md:text-base" v-html="highlight(item.title)"></h3>
                  <p class="text-xs md:text-sm text-purple-600" style="color: #0DDDEA">{{ item?.category_name }} / {{ item?.subject_name }}</p>
                  </div>
                  <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm" style="background-color: #0DDDEA">{{ item?.days_difference+1 }} kun oldin</button>
              </NuxtLink>
              <!-- Duplicate or dynamically add items -->
          </div>
        </section>
    </section>
</template>