<script setup lang="ts">

const modelStore = useHomeStore();
const loadingStore = useLoadingStore();  

const routeInfo = defineProps({
  route: {
    type: String,
    default: "/document/subject/",
    required: false
  },
  categorySlug: {
    type: String,
    default: "",
    required: false
  }
});

onMounted(async () => {
  await modelStore.getAllSubjects()
  .finally(() => {
    loadingStore.set(false);
  }); 
});
</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />
    <template v-else>
        <section class="container max-w-screen-xl mx-auto py-12 px-4">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2 bg-yellow-200 p-6 rounded-lg">
                <NuxtLink v-if="routeInfo.categorySlug" :to="routeInfo.route+routeInfo.categorySlug+'/'+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item" class="text-center font-bold">{{ item.name }} 1</NuxtLink>
                <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="text-center font-bold">{{ item.name }}</NuxtLink>
                <!-- <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="font-bold text-sm flex items-center">{{ item.name }}</NuxtLink> -->

                <!-- <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink>
                <NuxtLink to="/" class="text-center font-bold">Adabiyot</NuxtLink> -->
                <!-- Add more items as needed -->
            </div>
        </section>
    </template>
    
</template>