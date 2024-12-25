<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col">
        <div class="text-center">
            <Icon name="svg-spinners:3-dots-fade" class="w-5 h-5"/>
        </div>

        <div class="my-3 dark:bg-gray-900 bg-gray-100  rounded-md p-2 animate">
            <USkeleton class="w-10/12 h-4 bg-gray-300" />
            <USkeleton class="w-full h-1 my-3 bg-gray-300" />
            <USkeleton class="w-full h-8 bg-gray-300" />
            <USkeleton class="w-full h-6 my-3 bg-gray-300"/>
        </div>
    </div> 
</template>