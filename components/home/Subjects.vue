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
        <section class="container max-w-screen-xl mx-auto py-12 px-4 hidden md:block">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2 bg-yellow-200 p-6 rounded-lg">
                <NuxtLink v-if="routeInfo.categorySlug" :to="routeInfo.route+routeInfo.categorySlug+'/'+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item" class="font-bold text-sm flex items-center p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink>
                <!-- <NuxtLink v-if="routeInfo.categorySlug" :to="routeInfo.route+routeInfo.categorySlug+'/'+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item" class="text-center font-bold p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink> -->
                <!-- <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="text-center font-bold p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink> -->
                <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="font-bold text-sm flex items-center p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink>
            </div>
        </section>

        <section class="container max-w-screen-xl mx-auto py-12 px-4 block md:hidden relative">
          <!-- Mobil: scrollable grid, Desktop: oddiy grid -->

            <!-- LEFT -->
            <div class="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-gray-400 text-xl"><</div>

            <!-- RIGHT -->
            <div class="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-gray-400 text-xl">></div>

          <div
            class="overflow-x-auto md:overflow-visible bg-yellow-200 p-6 rounded-lg"
          >
            <div
              class="grid grid-flow-col grid-rows-2 md:grid md:grid-cols-6 gap-2 w-max md:w-full"
            >
              <NuxtLink v-if="routeInfo.categorySlug" :to="routeInfo.route+routeInfo.categorySlug+'/'+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item" class="font-bold text-sm flex items-center p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink>
              <!-- <NuxtLink v-if="routeInfo.categorySlug" :to="routeInfo.route+routeInfo.categorySlug+'/'+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item" class="text-start font-bold p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink> -->
              <!-- <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="text-start font-bold p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink> -->
              <NuxtLink v-else :to="routeInfo.route+item.slug" v-for="(item) in modelStore.getSubjects as Array<any>" :key="item+1" class="font-bold text-sm flex items-center p-1 hover:bg-purple-200">{{ item.name }}</NuxtLink>
            </div>
          </div>
        </section>

    </template>
    
</template>