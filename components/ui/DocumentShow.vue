<script setup lang="ts">
import { filePath } from '~/constants';

const material = defineProps({
  pages: {
    type: Array,
    default: null,
    required: true
  },
});

</script>

<template>
    
    <!-- Document content -->
    <div class="max-h-screen bg-gray-600 flex justify-center items-center py-5">
        <div class="w-full max-w-4xl h-[80vh] bg-white shadow-md rounded overflow-y-scroll border">
            <div class="grid grid-cols-2 gap-0">
              <div
                  v-for="page in material.pages as Array<any>"
                  :key="page.number"
                  class="flex flex-col items-center bg-gray-100"
              >
                  <img
                      :src="filePath+page.previewPath"
                      :alt="'Page ' + page.number"
                      class="w-full mb-4"
                  />
                  
              </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* Sahifa balandligi va kengligini yaxshiroq boshqarish uchun */
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>