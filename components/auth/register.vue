<script setup lang="ts">
import type { Icon } from '#components';
import type { FormError, FormSubmitEvent } from '#ui/types'



const props = defineProps({
    toggleLogin: {
        type: Function,
        required: true
    },
});

const toast = useToast();

const isLoading = ref(false);
const errors = ref('');

const state = reactive({
  name: undefined,
  phone: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: "Familiya Ismingiz to'ldirilishi shart!" })
  if (!state.phone) errors.push({ path: 'phone', message: "Telefon nomeringiz to'ldirilishi shart!" })
  if (!state.password) errors.push({ path: 'password', message: "Parol to'ldirilishi shart!" })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  isLoading.value = true;
  // Do something with data
  const {name, phone, password} = event.data;
  
  try{
    // await ACCOUNT.create(UNIQUE_ID, email, password, name);
    // props.toggleLogin();
    
    // toast.add({
    //   title: 'Account created',
    //   description: "You can now login with your new account"
    // })

    isLoading.value = false;
  } catch(e: any){
    // console.log(e);
    // errors.value = e.message;
    // isLoading.value = false;
  }
  
  // console.log(event.data)
}


const confirmPassword = ref(""); // Parolni qayta kiritish
const errorMessage = ref(""); // Xatolik haqida xabar
const isDisabled = ref(true); // Tugmani boshqarish

const validatePasswords = () => {
    console.log(state.password);
    console.log(confirmPassword.value);
    
    if (state.password === "" || confirmPassword.value === "") {
        errorMessage.value = "Parolni kiriting va tasdiqlang!";
        isDisabled.value = true;
    } else if (state.password !== confirmPassword.value) {
        errorMessage.value = "Parollar mos kelmadi!";
        isDisabled.value = true;
    } else {
        errorMessage.value = "";
        isDisabled.value = false;
    }
};
</script>

<template>
  <UAlert
    icon="i-heroicons-command-line"
    :description="errors"
    title="Error"
    v-if="errors"
    color="red"
    variant="outline"
  />
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">

    <UFormGroup label="Familiya Ismingiz *" name="name">
      <UInput v-model="state.name" color="blue" size="lg" placeholder="To'liq ma'lumot kiriting..."/>
    </UFormGroup>

    <UFormGroup label="Telefon nomeringiz *" name="phone">
        <UInput v-model="state.phone" color="blue" size="lg" placeholder="998991234567" :leadingIcon="'+998'"/>
    </UFormGroup>

    <UFormGroup label="Parol *" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg" placeholder="6ta belgi kiriting..."/>
      <span class="text-xs text-red-600">Parol 6 ta belgidan kam bo'lmasligi kerak</span>
      <UInput v-model="confirmPassword" type="password" color="blue" size="lg" placeholder="Parolni qaytadan kiriting..." @input="validatePasswords"/>
      <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </UFormGroup>

    
    <div class="text-sm text-neutral-500">
        Allaqachon hisobingiz bormi?
        <span class="text-blue-500 hover:underline" role="button" @click="$props.toggleLogin">Kirish</span>
    </div>

    <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isLoading">
      <template v-if="isLoading">
        <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
      </template>
      <template v-else>Ro'yhatdan o'tish</template>
    </UButton>
  </UForm>
</template>
