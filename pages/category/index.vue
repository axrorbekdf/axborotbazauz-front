<script setup lang="ts">

definePageMeta({
    layout: "admin"
});

// const loadingStore = useLoadingStore();
const modelStore = useCategoryStore();

onMounted(async () => {
  modelStore.getAllModel();
});

</script>

<template>
    <!-- <UiLoader v-if="loadingStore.isLoading" /> -->
    <UiLoader v-if="false" />

  <template v-else>
      <div>
        <CrudDataTable :data="modelStore.getModels"/>
      </div>
  </template>
</template>

