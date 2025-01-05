<script setup lang="ts">
import CrudSubject from '~/model/subject';



definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useSubjectStore();      
const modelCrud = new CrudSubject(); 

</script>
 
<template> 
      <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

