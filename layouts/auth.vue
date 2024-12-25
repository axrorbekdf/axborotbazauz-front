<script setup lang="ts">
    
    import { ACCOUNT } from '~/libs/appwrite';
    import { useLoadingStore } from '~/store/loading.store';

    const loadingStore = useLoadingStore();
    const router = useRouter();

    onMounted(() => {
        ACCOUNT.get()
        .then(() => {
            router.push('/')
        })
        .catch((error) => {
            loadingStore.set(false)
        });
    });
</script>


<template>

    <UiLoader v-if="loadingStore.isLoading" />
    <template v-else>
        <LayoutsMainNavbar />
        <section class="min-h-screen bg-white dark:bg-black">
            <slot />
        </section>        
    </template>
</template>