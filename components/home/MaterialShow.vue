<script setup lang="ts">
import { apiPoint } from '~/constants';


const modelStore = useHomeStore();
const loadingStore = useLoadingStore();
const {currentUser} = useAuthStore();

const isLoading = ref(false);
const obuna = computed(() => currentUser.obuna.some(item => item.status));

const filter = defineProps({
  materialSlug: {
    type: String,
    default: null,
    required: true
  },
});

onMounted(async () => {
    isLoading.value = true;
    await modelStore.getOneMaterial(filter.materialSlug)
    .finally(() => {
        isLoading.value = false;
        loadingStore.set(false);
    }); 
});

const download = async () => {
  try {
    await modelStore.getDownloadMaterial(filter.materialSlug);
    
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
  }
};

</script>

<template>
    <template v-if="isLoading">
        <section class="container max-w-screen-xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-1 gap-6 p-6 rounded-lg">
                <div class="bg-white shadow p-6 rounded-md mb-6">
                    <h1 class="text-xl font-bold text-gray-800 break-words">Yuklanmoqda</h1>
                </div>
                
            </div>
        </section>
    </template>
    <template v-else>
        <section class="container max-w-screen-xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-1 gap-6 p-6 rounded-lg">
                <div class="bg-white shadow p-6 rounded-md mb-6">
                    <h1 class="text-xl font-bold text-gray-800 break-words">{{ modelStore.material.title }}</h1>
                    <div class="mt-4 text-gray-600 space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:justify-between">
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
                        <div class="w-full sm:w-auto flex justify-center sm:justify-end mt-0 sm:mt-4 md:mt-4">
                            <NuxtLink :to="apiPoint+'v1/download/material/'+modelStore.material.slug" v-if="true" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center w-full sm:w-auto">Yuklash</NuxtLink>
                            <!-- <NuxtLink :to="apiPoint+'v1/download/material/'+modelStore.material.slug" v-if="obuna" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center w-full sm:w-auto">Yuklash</NuxtLink> -->
                            <NuxtLink v-else to="/principle" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center w-full sm:w-auto">Koʼchirib olish shartlari</NuxtLink>
                        </div>
                    </div>
                </div>


                <!-- Document content -->
                <UiDocumentShow v-if="modelStore.material.type != 'pptx'" :pages="modelStore.material.pages"/>
                <UiPresentationShow v-if="modelStore.material.type == 'pptx'" :pages="modelStore.material.pages"/>
                
            </div>
        </section>
    </template>
</template>