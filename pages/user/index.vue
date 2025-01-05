<script setup lang="ts">
import CrudUser from '~/model/user';


definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useUserStore();      
const modelCrud = new CrudUser(); 

</script>
 
<template> 
    <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

