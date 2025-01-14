<script setup lang="ts">
import { apiPoint } from '~/constants';
import { getItem } from "~/helpers/persistaneStorage";

const materialStore = useMaterialStore();
const categoryStore = useCategoryStore();
const subjectStore = useSubjectStore();

const props = defineProps({
    model: {
        type: Object,
        default: {},
        required: true
    },
})

// Slider data
const pages = ref([]);
const categories = ref([]);
const subjects = ref([]);

onMounted(async () => {
  // await materialStore.getAllModel(null);
  await categoryStore.getAllModel(null, null);
  await subjectStore.getAllModel(null, null);

  categories.value = categoryStore.getModels;
  subjects.value = subjectStore.getModels;
  
});

const title = ref(null)
const category_id = ref(1)
const subject_id = ref(1)
const selectedFile = ref<File | null>(null);


const uploadData = async () => {
  const formData = new FormData();
  if (selectedFile.value) {
    formData.append('file', selectedFile.value); // 'file' — backendda kutilayotgan nom
  }
  
  // Parametrlarni qo'shish
  formData.append('title', String(title.value));
  formData.append('category_id', String(category_id.value));
  formData.append('subject_id', String(subject_id.value));

  try {
    const response = await fetch(apiPoint+'material/uploaded', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${getItem('token')}`,
      },
    });

    const result = await response.json();
    pages.value = result.result.pages;
    console.log(result);
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
  }
};

// Faylni tanlash funksiyasi
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length > 0) {
    selectedFile.value = files[0]; // Birinchi faylni tanlash
  }
};

</script>
 
<template>

    <!-- Container -->
  <div class="max-w-4xl mx-auto">
    <!-- Top Section -->
    <div class="flex flex-col gap-4 mb-6">

      <div class="flex gap-4 my-2">
        <div class="h-6 w-1/2">
          <input type="file" @change="onFileChange($event)" />
        </div>
        <div class="h-8 w-1/2 flex justify-end items-end">
          <!-- <button class="bg-slate-700 text-white rounded-sm p-2" @click="uploadData" :disabled="!selectedFile">Yuklash1</button> -->
          <UButton
            icon="i-heroicons-pencil-square"
            size="lg"
            color="primary"
            variant="solid"
            label="Yuklash"
            :trailing="false"
            @click="uploadData" 
            :disabled="!selectedFile"
          />
        </div>
      </div>
      <!-- Long Rectangle -->
      <div class="h-6 rounded my-2">
        <UInput v-model="title" size="lg" />
      </div>

      <!-- Two Smaller Rectangles -->
      <div class="flex gap-4 my-2">
        <div class="h-6 w-1/2">
            <USelectMenu
                v-model="category_id"
                searchable
                searchable-placeholder="Kategoriyani qidirish"
                class="w-full"
                placeholder="Select a person"
                :options="categories" 
                value-attribute="id"
                option-attribute="name"
                size="lg"
            />
        </div>
        <div class="h-6 w-1/2">
            <USelectMenu
                v-model="subject_id"
                searchable
                searchable-placeholder="Fanni qidirish"
                class="w-full"
                placeholder="Select a person"
                :options="subjects"
                value-attribute="id"
                option-attribute="name"
                size="lg"
            />
        </div>
      </div>

      <!-- Center Rectangle
      <div class="h-6 w-1/3 mx-auto bg-gray-300 rounded">

        
        
      </div> -->
    </div>

    <!-- Divider -->
    <hr class="border-gray-400 mb-6">

    <!-- Bottom Section -->
    <div class="grid grid-cols-1 gap-1">

          <UiSlider :pages="pages"/>

    </div>
  </div>
</template>
