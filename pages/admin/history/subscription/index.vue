<script setup lang="ts">
import CrudHistorySubscription from '~/model/history_subscription';


definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = useHistorySubscriptionStore();      
const modelCrud = new CrudHistorySubscription(); 

</script>
 
<template> 
    <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

