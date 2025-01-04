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
  acc[key] = null; // Kalitlar uchun boshlang'ich qiymat
  return acc;
}, {});

const state = reactive(modelEntity);

const validate = (state: any): FormError[] => {
  const errors:any = [];

  Object.values(props.model).forEach((value: any, index) => {
        const key = Object.keys(props.model)[index];
      
        if (!state[`${key}`]) errors.push({ path: `${key}`, message: value.rules.message })
    });
    
  return errors;
}

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
    props.entityHandler()    

    if(!loadingStore.isLoading){
        props.toggleShow();
    }
    console.log(event.data)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    
    <UFormGroup v-for="(value, key) in props.model" :key="key" :label="value.name" :name="key">
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

