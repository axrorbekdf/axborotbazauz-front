<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
const loadingStore = useLoadingStore();

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
    toggleShow: {
        type: Function,
        required: true
    },
})

// Yangi obyektni yaratish
const modelEntity = Object.keys(props.model).reduce((acc:any, key) => {
  acc[key] = props.model[key].value; // Kalitlar uchun boshlang'ich qiymat
  return acc;
}, {});
console.log(props.model);

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
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    
    <UFormGroup v-for="(value, key) in props.model" :key="key" :label="value.name" :name="key" v-show="!value.hidden">
      <UInput v-model="state[`${key}`]"/>

      <!-- <USelectMenu 
          v-if="item.relation != null" 
          searchable 
          searchable-placeholder="Qidiring... " 
          v-model="state[`${item.name}`]" 
          :options="props.model.relations[`${item.relation.name}`]" 
          :value-attribute="item.relation.value"
          :option-attribute="item.relation.options"
      /> -->
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

