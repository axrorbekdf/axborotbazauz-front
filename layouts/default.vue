<script setup lang="ts">
import AuthService from '~/services/Auth';

const router = useRouter();
const authStore = useAuthStore();
const loadingStore = useLoadingStore()

useHead({
    title: "Xush kelibsiz!"
})

onMounted(() => {
    loadingStore.set(true);
    
    AuthService.getUser()
    .then((res: any) => {
        
        if(res.status){
            authStore.update({
                id: res.result.$id,
                name: res.result.name,
                phone: res.result.phone,
                password: "",
                is_active: res.result.is_active,
                role: res.result.role,
                token: res.result.token,
                obuna: res.result.obuna
            });

            loadingStore.set(false);
            router.push('/');
        }
        
    }).catch(() => {
        loadingStore.set(false);
    }).finally(() => {
        loadingStore.set(false);
    });;
});
</script>
<template>
    <UiLoader v-if="loadingStore.isLoading" />

    <template v-else>
        <section class="min-h-screen bg-white dark:bg-black">
            <slot />
        </section>
    </template>
</template>