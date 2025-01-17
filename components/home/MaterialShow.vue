<script setup lang="ts">

const modelStore = useHomeStore();
const loadingStore = useLoadingStore();

const filter = defineProps({
  materialSlug: {
    type: String,
    default: null,
    required: true
  },
});

onMounted(async () => {
  await modelStore.getOneMaterial(filter.materialSlug)
  .finally(() => {
    loadingStore.set(false);
  }); 
});

</script>

<template>
    <section class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-6 p-6 rounded-lg">
            <div class="bg-white shadow p-6 rounded-md mb-6">
                <h1 class="text-xl font-bold text-gray-800">{{ modelStore.material.title }}</h1>
                <div class="flex items-center justify-between mt-4 text-gray-600">
                    <div class="flex items-center space-x-2">
                        <span>📅</span>
                        <span>Yuklangan vaqt: <strong>{{ modelStore.material?.date }}</strong></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span>👁️</span>
                        <span>Ko'chirishlar soni: <strong>{{ modelStore.material?.downloads }}</strong></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span>📂</span>
                        <span>Hajmi: <strong>{{ modelStore.material?.size }}</strong></span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button class=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Кўчириб олиш шартлари
                        </button>
                    </div>
                </div>
            </div>

            <!-- Document content -->
            <UiDocumentShow v-if="modelStore.material.type != 'pptx'" :pages="modelStore.material.pages"/>
            <UiPresentationShow v-if="modelStore.material.type == 'pptx'" :pages="modelStore.material.pages"/>
            
        </div>
    </section>



</template>