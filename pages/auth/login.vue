<script lang="ts" setup>
import AuthService from '~/services/Auth';

    definePageMeta({
        layout: "auth"
    })

    useHead({
        title: "Kirish | Axborot-Baza.UZ"
    })

    const router = useRouter();

    const isLogin = ref(true);

    const toggleLogin = () => (isLogin.value = !isLogin.value)

    onMounted(() => {
        AuthService.getUser()
        .then((res: any) => {
            
            if(res.status){
                router.push('/');
            }
            
        });
    });

</script>
<template>
    <div class="flex items-center justify-center h-screen w -full relative">
        <!-- <NuxtImg src="/bg-auth.jpg" class="absolute inset-0 w-full h-full object-cover z-10" /> -->
        <div class="absolute inset-0 w-full h-full z-20 dark:bg-black/60 bg-white/40"></div>

        <UCard class="z-50 md:w-1/2 lg:w-1/3 relative sm:w-full sm:z-50 sm:relative" :ui="{body: {base: 'flex gap-12'}}">
            <div class="space-y-6 flex-1">
                
                <h1 class="text-5xl font-bold flex justify-between mt-6 mb-0">
                    <template v-if="isLogin">Kirish</template>
                    <template v-else>Ro'yxatdan o'tish</template>
                    <SharedColorMode />
                </h1>

                <!-- <h1 class="opacity-70 text-2xl mt-0">
                    <template v-if="isLogin">Axborot-Baza boshqaruv paneliga kirish.</template>
                    <template v-else>Please use the following credentials to register</template>
                </h1> -->

                <div>
                    <AuthLogin v-if="isLogin" :toggle-login="toggleLogin"/>
                    <AuthRegister v-else :toggle-login="toggleLogin"/>
                </div>
            </div>
        </UCard>
    </div>
</template>