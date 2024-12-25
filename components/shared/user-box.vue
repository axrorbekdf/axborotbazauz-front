<script setup lang="ts">
import { NuxtLink, UButton, UDivider } from '#components';
import { useAuthStore } from '#imports';
import { ACCOUNT } from '~/libs/appwrite';

const { currentUser, clear} = useAuthStore();
const loadingStore = useLoadingStore();
const router = useRouter();
const toast = useToast();
const errors = ref('');

const logout = async () => {
        loadingStore.set(true);
    
        ACCOUNT.deleteSession('current')
        .then(() => {
            router.push('auth/login')    
            loadingStore.set(false);

            toast.add({
                title: 'Log out',
            })

            clear();

        }).catch(error => {
            console.log(error);
            errors.value = error;
            toast.add({
                title: 'Error',
                description: error.message
            })
            loadingStore.set(false);
        })
        .finally(() => {
            loadingStore.set(false)
        }); 
    }

</script>

<template>
    <UPopover :popper="{ placement: 'left' }">
        <UAvatar :alt="currentUser.name" class="uppercase" size="lg" />

        <template #panel>
            <div class="p-2 w-100 bg-white dark:bg-black">
                <p class="text-neutral-600 text-sm">{{ currentUser.email }}</p>

                <div class="flex items-center mt-3 space-x-2">
                    <div class="rounded-md dark:bg-gray-900 bg-gray-300 p-1">
                        <UAvatar :alt="currentUser.name" class="uppercase" />
                    </div>

                    <p class="capitalize text-[15px] text-sm">{{ currentUser.name }}'s documents</p>

                </div>

                <UDivider class="my-3"/>

                <NuxtLink to="/profile">
                    <UButton class="w-full" color="blue" variant="ghost">Profile</UButton>
                </NuxtLink>
                <UButton class="w-full" color="red" variant="ghost" @click="logout()">Logout</UButton>

            </div>
        </template>
    </UPopover>
</template>