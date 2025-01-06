<script setup lang="ts">
import CrudCategory from '~/model/category';


definePageMeta({
    layout: 'admin',
    title: 'Kategoriyalar bo\'limi'
})

// const loadingStore = useLoadingStore();  
const modelStore = useCategoryStore();       
const modelCrud = new CrudCategory(); 
// onMounted(async () => {
//   await modelStore.getAllModel(); 
// });

</script>
 
<template> 
    <!-- <UiLoader v-if="loadingStore.isLoading" /> -->
    <!-- <UiLoader v-if="false" />   -->

  <!-- <template v-else>
      <div> -->
        <!-- <CrudDataTable :data="modelStore.getModels"/> -->
        <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
      <!-- </div>
  </template> -->
</template>

