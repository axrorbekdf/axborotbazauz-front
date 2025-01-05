<script setup lang="ts">
import CrudFile from '~/model/file';


definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useFileStore();      
const modelCrud = new CrudFile(); 

</script>
 
<template>
    <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

