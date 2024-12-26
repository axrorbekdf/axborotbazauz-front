<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import AuthService from '~/services/Auth';

const toast = useToast();

const router = useRouter();
const authStore = useAuthStore();

const isLoading = ref(false);
const errors = ref('');

const state = reactive({
  phone: undefined,
  password: undefined
})

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

      // console.log("Success:", res);

      if(res.status){
        
        router.push('/');

        isLoading.value = false;

        toast.add({
          title: 'Tasdiqlandi!',
          description: "Siz kirish uchun ruxsat oldingiz!"
        })

        authStore.set({
            id: "",
            name: res.resoult.name,
            phone: res.resoult.phone,
            password: "",
            token: res.resoult.token,
        });

      }else{
          errors.value = res.error.message;
          isLoading.value = false;
      }      
      
    })
    .catch(err => {

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
    <UFormGroup label="Telefon" name="phone">
      <UInput v-model="state.phone" color="blue" size="lg"/>
    </UFormGroup>

    <UFormGroup label="Parol" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg"/>
    </UFormGroup>


    <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isLoading">
      
      <template v-if="isLoading">
        <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
      </template>
      <template v-else>Kirish</template>

    </UButton>
  </UForm>
</template>
