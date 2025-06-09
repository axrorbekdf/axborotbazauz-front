<script setup lang="ts">

const modelStore = useHomeStore();
const loadingStore = useLoadingStore();

const filter = defineProps({
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

onMounted(async ()=> {
  loadingStore.setPagination(true);
  await modelStore.getAllRecentMaterials(null, page.value, pageCount.value, filter.categorySlug, filter.subjectSlug)
  .then(() => {
    loadingStore.setPagination(false);
  })
  .finally(() => {
    loadingStore.setPagination(false);
  }); 
});

watch(page, async (newPage) => {
  loadingStore.setPagination(true);
  await modelStore.getAllRecentMaterials(null, newPage, pageCount.value, filter.categorySlug, filter.subjectSlug)
  .then(() => {
    loadingStore.setPagination(false);
  })
  .finally(() => {
    loadingStore.setPagination(false);
  });
});

</script>

<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mb-6">
          <div>
            <h2 v-if="loadingStore.isPagination" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Keyingi sahifa yuklanmoqda...</h2>
            <h2 v-else-if="page > 1" class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">{{page}} - sahifa yuklandi.</h2>
            <h2 v-else class="text-2xl font-bold text-purple-700" style="color: #0A133C;">So‘nggi qo‘shilganlar</h2>
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
                  <h3 class="font-bold text-sm md:text-base">{{ item?.title }}</h3>
                  <p class="text-xs md:text-sm text-purple-600" style="color: #0DDDEA">{{ item?.category_name }} / {{ item?.subject_name }}</p>
                </div>
                <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm" style="background-color: #0DDDEA">{{ item?.days_difference+1 }} kun oldin</button>
            </NuxtLink>
            <!-- Duplicate or dynamically add items -->
        </div>
    </section>
</template>