<script setup lang="ts">
import { UiDealsLoader, type USkeleton } from '#components';
import type { UButton } from '#components';
import { useMutation } from '@tanstack/vue-query';
import { COLLECTION_DEALS, DATABASE_ID, statusList  } from '~/constants';
import { DATABASE } from '~/libs/appwrite';
import { useStatusQuery } from '~/query/use-status-query';

definePageMeta({
    layout: "documents"
});

useHead({
    title: "Documents | Jira software"
}) 

const { data, isLoading, refetch } = useStatusQuery();

const dragCardRef = ref(null);
const sourceColumnRef = ref(null);
const isMoving = ref(null);

const { mutate, isPending } = useMutation({
    mutationKey: ['moveCard'],
    mutationFn: ({docId, status}: {docId: string; status: string}) =>
        DATABASE.updateDocument(DATABASE_ID, COLLECTION_DEALS, docId, {status}),
    onSuccess:() => refetch(),
});

const handleDragStart = (ideal, column) => {
    isMoving.value = true;
}
const handleDragOver = () => {}
const handleDrop = () => {}


</script>

<template>
    <div class="grid grid-cols-4 gap-4 mt-12" v-if="isLoading">
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />
        <USkeleton class="h-12 dark:bg-gray-900 bg-gray-100" />

        <UiDealsLoader />
        <UiDealsLoader />
        <UiDealsLoader />
        <UiDealsLoader />
    </div>
    <div class="grid grid-cols-4 gap-4 mt-12" v-else>
        <div v-for="(column, index) in data" :key="column.id"  @dragover="handleDragOver" @drop="handleDrop">
            <UButton class="w-full h-12" color="blue" variant="outline">
                <span class="fond-bold">{{ column.name }}</span>
                <span class="text-sm text-neutral-500">{{ column.items.length }}</span>
            </UButton>

            <SharedCreateDeal :status="column.id" :refetch="refetch"/>

            <div v-for="card in column.items" :key="card.id" 
                class="my-3 dark:bg-gray-900 bg-gray-100 rounded-md p-2 animation"  
                role="button" 
                draggable="true"
                @dragstart="handleDragStart"
            >
                <div class="flex items-center space-x-2">
                    <span class="font-bold text-lg uppercase">{{ card.name }}</span>
                </div>

                <UDivider class="my-3" />

                <div class="opacity-55 text-sm line-clamp-1">
                    {{ card.description }}
                </div>

                <UButton color="blue" class="w-full mt-3 group" variant="ghost">
                    <span class="font-bold">More details</span>
                    <Icon name="material-symbols:arrow-right-alt-rounded"  class="group-hover:translate-x-2 transition"/>
                </UButton>
            </div>
        </div>
    
    </div>
</template>

<style scoped>
@keyframes show {
    from{
        transform: scale(0.5) translateY(0);
        opacity: 1;
    }
    to{
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.animation{
    animation: show 0.3s ease-in-out;
}


</style>