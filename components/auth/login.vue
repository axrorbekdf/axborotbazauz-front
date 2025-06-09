<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import AuthService from '~/services/Auth';
const { t } = useI18n();

const toast = useToast();

const router = useRouter();
const authStore = useAuthStore();

const isLoading = ref(false);
const errors = ref('');

const state = reactive({
  phone: undefined,
  password: undefined
})

defineProps({
    toggleLogin: {
        type: Function,
        required: true
    },
});

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.phone) errors.push({ path: 'phone', message: "Telefon to'ldirilishi shart!" })
  if (!state.password) errors.push({ path: 'password', message: "Parol to'ldirilishi shart!" })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  
  isLoading.value = true;
  const {phone, password} = event.data;

  
    AuthService.login({
      phone: phone,
      password: password
    })
    .then((res: any) => {

      console.log("Success:", res);

      if(res.status){
        
        
        isLoading.value = false;
        
        toast.add({
          title: 'Tasdiqlandi!',
          description: "Siz kirish uchun ruxsat oldingiz!"
        })
        
        authStore.set({
          id: res.result.id,
          name: res.result.name,
          phone: res.result.phone,
          password: "",
          token: res.result.token,
          is_active: res.result.is_active,
          role: res.result.role,
          obuna: res.result.obuna
        });
        
        router.push('/');

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
</script>

<template>

  <UAlert
    icon="i-heroicons-command-line"
    :description="errors"
    title="Error"
    v-if="errors"
    color="red"
    variant="outline"
    class="mb-4"
  />

  <UForm :validate="validate" :state="state" class="space-y-6" @submit="onSubmit">
    <UFormGroup :label="t('loginFormTetx1')" name="phone">
      <UInput v-model="state.phone" color="blue" size="lg"/>
    </UFormGroup>

    <UFormGroup :label="t('loginFormTetx2')" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg"/>
    </UFormGroup>

    <div class="text-sm text-neutral-500">
        {{ t('authQuestion1') }}
        <span class="text-blue-500 hover:underline" role="button" @click="$props.toggleLogin">{{ t('royhatdanOtish') }}</span>
    </div>

    <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isLoading">
      
      <template v-if="isLoading">
        <Icon name="svg-spinners:8-dots-rotate" class="w-5 h-5"/>
      </template>
      <template v-else>{{ t('kirish') }}</template>

    </UButton>
  </UForm>
</template>
