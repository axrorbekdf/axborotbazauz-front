
<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const loadingStore = useLoadingStore();

const userStore = useUserStore();
const subscriptionStore = useSubscriptionStore();
const paymentStore = usePaymentStore();

const props = defineProps({
    model: {
        type: Object,
        default: {},
        required: true
    },
    entityHandler:{
      type: Function,
      required: true
    },
})

// Slider data
const user = ref([]);
const subscription = ref([]);
const payment = ref([]);

onMounted(async () => {
  await userStore.getAllModel(null, null);
  await subscriptionStore.getAllModel(null, null);
  await paymentStore.getAllModel(null, null);

  user.value = userStore.getModels;
  subscription.value = subscriptionStore.getModels;
  payment.value = paymentStore.getModels;
  
});


// Yangi obyektni yaratish
const modelEntity = Object.keys(props.model).reduce((acc:any, key) => {
  acc[key] = props.model[key].value; // Kalitlar uchun boshlang'ich qiymat
  return acc;
}, {});

const state = reactive(modelEntity);


const validate = (state: any): FormError[] => {
  const errors:any = [];

  Object.values(props.model).forEach((item: any, index) => {
      const key = Object.keys(props.model)[index];
    
      if(item.rules.value){
        if (!state[`${key}`]) errors.push({ path: `${key}`, message: item.rules.message })
      }
  });
    
  return errors;
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
    props.entityHandler(event.data)    

    // if(!loadingStore.isLoading){
    //     props.toggleShow();
    // }

    console.log(event.data);
    
}
</script>
<template>
    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
      
      <UFormGroup v-for="(property, key) in props.model" :key="key" :label="property.name" :name="key" v-show="!property.hidden">
  
        <USelectMenu 
            v-if="key == 'user'"
            searchable 
            searchable-placeholder="Qidiring... " 
            v-model="state.user_id" 
            :options="user" 
            value-attribute="id"
            :option-attribute="property.relation.name"
        />

        <USelectMenu 
            v-if="key == 'subscription'"
            searchable 
            searchable-placeholder="Qidiring... " 
            v-model="state.subscription_id" 
            :options="subscription" 
            value-attribute="id"
            :option-attribute="property.relation.name"
        />

        <USelectMenu 
            v-if="key == 'payment'"
            searchable 
            searchable-placeholder="Qidiring... " 
            v-model="state.payment_id" 
            :options="payment" 
            value-attribute="id"
            :option-attribute="property.relation.name"
        />
      </UFormGroup>
  
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </template>