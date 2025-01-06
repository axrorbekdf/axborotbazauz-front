<script setup lang="ts">
import CrudSubscription from '~/model/subscription';

definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useSubscriptionStore();      
const modelCrud = new CrudSubscription(); 

</script>
 
<template> 
    <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

