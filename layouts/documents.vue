<script setup lang="ts">

import { UiLoader } from '#components';
import { ACCOUNT } from '~/libs/appwrite';
const authStore = useAuthStore();

const router = useRouter();
const loadingStore = useLoadingStore();

    onBeforeMount(() => {
        console.log(loadingStore);
        
        ACCOUNT.get()
        .then((response) => {
            loadingStore.set(false)

            authStore.set({
                id: response.$id,
                name: response.name,
                email: response.email,
                status: response.status,
            });
        })
        .catch(() => {
            router.push('/auth/login')
        })
    });
</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />
    <main v-else>
        <LayoutsNavbar />
        <LayoutsSidebar />
        <section class="min-h-screen bg-white dark:bg-black pl-72 pt-[10vh]">
            <div class="p-4">
                <slot />
            </div>
        </section>
    </main>
</template>