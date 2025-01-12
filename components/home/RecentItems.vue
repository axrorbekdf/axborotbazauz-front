<script setup lang="ts">
const modelStore = useHomeStore();
const loadingStore = useLoadingStore();

const filter = defineProps({
  categoryId: {
    type: Number,
    default: null,
    required: false
  },
  subjectId: {
    type: Number,
    default: null,
    required: false
  }
});

onMounted(async () => {
  await modelStore.getAllRecentMaterials(null, 10, filter.categoryId, filter.subjectId)
  .finally(() => {
    loadingStore.set(false);
  }); 
});
</script>

<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <h2 class="text-2xl font-bold text-purple-700 mb-6">So‘nggi qo‘shilganlar</h2>
        <div class="space-y-4">
            <!-- Single Item -->
            <div v-for="item in modelStore.getMaterials" :key="item" class="flex flex-wrap items-center gap-4 p-4 border border-purple-400 rounded-lg">
                <div class="w-6 h-6 bg-purple-500 rounded-full"></div>
                <div class="flex-1">
                <h3 class="font-bold text-sm md:text-base">Tuyap — жой биноларини реконструкция қилиш технологияси ({{ item?.title }})</h3>
                <p class="text-xs md:text-sm text-purple-600">{{ item?.category?.name }} / {{ item?.subject?.name }}</p>
                </div>
                <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm">8 kun oldin</button>
            </div>
            <!-- Duplicate or dynamically add items -->
        </div>
    </section>
</template>