<script setup lang="ts">


const props = defineProps({
    model: {
        type: Object,
        default: () => ({}),
        required: true
    },
    modelType: {
      type: String,
      default: "",
    }, 
    toggleShowClose: {
        type: Function,
        default: () => ({}),
        required: true
    },
    isOpen: {
        type: Boolean,
        default: false,
        required: true
    },
})


</script>

<template>
  <div>

      <UModal v-model="props.isOpen" fullscreen>
        <UCard
          :ui="{
            base: 'h-full flex flex-col',
            rounded: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            body: {
              base: 'grow'
            }
          }"
        >

        
              <template #header>
                <div class="flex items-center justify-between">
                  <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    Ko'rish
                  </h3>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="props.toggleShowClose" />
                </div>
              </template>

              <CrudModelsMaterialViewModel v-if="props.modelType == 'material'" :model="props.model"/>
              <CrudModelsHistorySubscriptionViewModel v-else-if="props.modelType == 'history'" :model="props.model"/>

              <table v-else class="w-full table-auto border-collapse border border-gray-200">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="border border-gray-300 px-4 py-2 text-left">Nomi</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Qiymati {{ props.model.modelStore }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-100" v-for="(property, key) in props.model" :key="property">
                    <td class="border border-gray-300 px-4 py-2">{{ property.name }}</td>
                    <td class="border border-gray-300 px-4 py-2">{{ property.value }}</td>
                  </tr>
                  
                </tbody>
              </table>
          
        
        </UCard>
      </UModal>

  </div>
</template>

