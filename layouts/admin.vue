<script setup lang="ts">
import AuthService from '~/services/Auth';

useHead({
    title: "Admin boshqaruv paneli | Axborot-Baza.UZ"
})

const router = useRouter();
const authStore = useAuthStore();
const loadingStore = useLoadingStore();

onMounted(() => {
    loadingStore.set(true);

    AuthService.getUser()
    .then((res: any): any => {
        if (res.status) {
            
            authStore.update({
                id: res.result.$id,
                name: res.result.name,
                phone: res.result.phone,
                password: "",
                token: res.result.token,
            });
            
            
        }else{
            router.push('/auth/login');
        }

        loadingStore.set(false);
    })
    .catch((err: any): any => {

        router.push('/auth/login');
        loadingStore.set(false);

    }).finally(() => {
        loadingStore.set(false);
    });
});
</script>
<template>
    <!-- <UiLoader v-if="loadingStore.isLoading" /> -->
    <UiLoader v-if="false" />
    <template v-else>
        <LayoutsMainNavbar />
        <LayoutsSidebar />
        <section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
            <div class="p-4">
                <slot />
            </div>
        </section>
    </template>
    
</template>
  