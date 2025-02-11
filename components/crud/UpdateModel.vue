<script setup lang="ts">

const props = defineProps({
    model: {
        type: Object,
        default: {},
        required: true
    },
    toggleShow: {
        type: Function,
        required: true
    },
    isOpen: {
        type: Boolean,
        required: true
    },
    updateModel:{
        type: Function,
        required: true
    },
    modelType: {
      type: String,
      default: "",
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
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="props.toggleShow" />
          </div>
        </template>

        <div v-if="props.modelType == 'material'">
          <!-- <CrudModelsMaterialStoreModel :model="model"/> -->
        </div>

        <div v-else-if="props.modelType == 'history'">
          <CrudModelsHistorySubscriptionUpdateModel :model="model" :entity-handler="updateModel"/>
        </div>

        <CrudFormModel v-else :model="model"  :entity-handler="updateModel" :toggleShow="toggleShow"/>
      </UCard>
    </UModal>
  </div>
</template>

