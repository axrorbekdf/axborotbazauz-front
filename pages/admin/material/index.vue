<script setup lang="ts">
import CrudMaterial from '~/model/material';


definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useMaterialStore(); 
const modelCrud = new CrudMaterial();  

</script>
 
<template>
    <CrudDataTableModel :model-type="'material'" :model-store="modelStore" :model-crud="modelCrud"/>
</template>

