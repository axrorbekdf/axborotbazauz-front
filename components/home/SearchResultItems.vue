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


onMounted(async () => {
  await modelStore.getAllRecentMaterials(null, 10, filter.categorySlug, filter.subjectSlug)
  .finally(() => {
    loadingStore.set(false);
  }); 
});
</script>

<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <h2 class="text-2xl font-bold text-purple-700 mb-6" style="color: #0A133C;">Natilar</h2>
        <div class="space-y-4">
            <!-- Single Item -->
            <div v-for="item in modelStore.getMaterials as Array<any>" :key="item" class="flex flex-wrap items-center gap-4 p-4 border border-purple-400 rounded-lg">
                <div class="w-6 h-6 bg-purple-500 rounded-full" style="background-color: #0DDDEA"></div>
                <div class="flex-1">
                <h3 class="font-bold text-sm md:text-base">Tuyap — жой биноларини реконструкция қилиш технологияси ({{ item?.title }})</h3>
                <p class="text-xs md:text-sm text-purple-600" style="color: #0DDDEA">{{ item?.category?.name }} / {{ item?.subject?.name }}</p>
                </div>
                <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm" style="background-color: #0DDDEA">8 kun oldin</button>
            </div>
            <!-- Duplicate or dynamically add items -->
        </div>
    </section>
</template>