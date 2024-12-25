<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { ACCOUNT } from '~/libs/appwrite';


defineProps({
    toggleLogin: {
        type: Function,
        required: true
    },
});
const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();

const isLoading = ref(false);
const errors = ref('');

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  // console.log(event.data)
  isLoading.value = true;
  const {email, password} = event.data;

  try{
    await ACCOUNT.createEmailSession(email, password);
    const response = await ACCOUNT.get();

    authStore.set({
      id: response.$id,
      name: response.name,
      email: response.email,
      status: response.status,
    });

    toast.add({
      title: 'Logged in',
      description: "You are now logged in"
    })

    router.push('/');

    isLoading.value = false;
  } catch(e: any){
    errors.value = e.message;
    isLoading.value = false;
  }


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
  />

  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" color="blue" size="lg"/>
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" color="blue" size="lg"/>
    </UFormGroup>
    
    <div class="text-sm text-neutral-500">
        Not registered yet?
        <span class="text-blue-500 hover:underline" role="button" @click="$props.toggleLogin">Sign up</span>
    </div>

    <UButton type="submit" color="blue" class="w-full" block size="lg" :disabled="isLoading">
      
      <template v-if="isLoading">
        <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
      </template>
      <template v-else>Next</template>

    </UButton>
  </UForm>
</template>

