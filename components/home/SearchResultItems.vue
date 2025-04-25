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


onMounted(async () => {
  loadingStore.setSearch(true);
  await modelStore.getAllRecentMaterials(filter.search, 10, filter.categorySlug, filter.subjectSlug)
  .then(() => {
    loadingStore.setSearch(false);
  })
  .finally(() => {
    loadingStore.setSearch(false);
  }); 
});
</script>

<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <h2 v-if="loadingStore.isSearch" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Qidirilmoqda...!</h2>
        <section v-else>
          <h2 class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Qidirish natijalari</h2>
          <div class="space-y-4">
              <!-- Single Item -->
              <NuxtLink :to="'/document/material/'+item.slug" v-for="item in modelStore.getMaterials as Array<any>" :key="item" class="flex flex-wrap items-center gap-4 p-4 border border-purple-400 rounded-lg">
                  <div class="w-6 h-6 bg-purple-500 rounded-full" style="background-color: #0DDDEA"></div>
                  <div class="flex-1">
                  <h3 class="font-bold text-sm md:text-base">{{ item?.title }}</h3>
                  <p class="text-xs md:text-sm text-purple-600" style="color: #0DDDEA">{{ item?.category_name }} / {{ item?.subject_name }}</p>
                  </div>
                  <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm" style="background-color: #0DDDEA">{{ item?.days_difference+1 }} kun oldin</button>
              </NuxtLink>
              <!-- Duplicate or dynamically add items -->
          </div>
        </section>
    </section>
</template>