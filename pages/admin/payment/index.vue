<script setup lang="ts">
import CrudPayment from '~/model/payment';


definePageMeta({
    layout: "admin",
});

// const loadingStore = useLoadingStore();  
const modelStore = usePaymentStore();      
const modelCrud = new CrudPayment(); 

</script>
 
<template> 
    <CrudDataTableModel :model-store="modelStore" :model-crud="modelCrud"/>
</template>

