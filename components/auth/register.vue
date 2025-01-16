<script setup lang="ts">
import type { Icon } from '#components';
import type { FormError, FormSubmitEvent } from '#ui/types'
import AuthService from '~/services/Auth';


const router = useRouter();
const toast = useToast();

const props = defineProps({
    toggleLogin: {
        type: Function,
        required: true
    },
});


const isLoading = ref(false);
const errors = ref('');

const state = reactive({
  name: undefined,
  phone: '',
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
  
  AuthService.register({
      name: name,
      phone: phone,
      password: password
    })
    .then((res: any) => {

      if(res.status){

        isLoading.value = false;
        props.toggleLogin()
        
        toast.add({
          title: 'Tizimga kirishingiz mumkin.',
          description: "Foydalanuvchi hisobingiz yaratildi!"
        })
        
      }else{
          errors.value = res.error.message;
          isLoading.value = false;
      }      
      
    })
    .catch((err: any): any => {
          errors.value = err.error.message;
          isLoading.value = false;
    });
  
}


const confirmPassword = ref(""); // Parolni qayta kiritish
const errorMessage = ref(""); // Xatolik haqida xabar
const isDisabled = ref(true); // Tugmani boshqarish

watch(confirmPassword, (newValue, oldValue) => {
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
});

const isPhoneValid = computed(() => {
  const phoneRegex = /^\+998[0-9]{9}$/; // O'zbekiston telefon raqamlari uchun: +998xxxxxxxxx
  return phoneRegex.test(state.phone);
});

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
        <UInput v-model="state.phone" color="blue" size="lg" placeholder="+998XXXXXXXXX" maxlength="13"/>
        <span class="text-xs text-red-600" v-if="!isPhoneValid && state.phone.length > 0">
          Telefon raqami +998XXXXXXXXX formatida bo‘lishi kerak.
        </span>
    </UFormGroup>

    <UFormGroup label="Parol *" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg" placeholder="6ta belgi kiriting..."/>
      <span class="text-xs text-red-600">Parol 6 ta belgidan kam bo'lmasligi kerak</span>
      <UInput v-model="confirmPassword" type="password" color="blue" size="lg" placeholder="Parolni qaytadan kiriting..."/>
      <span class="text-xs text-red-600" v-if="errorMessage" >{{ errorMessage }}</span>
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
