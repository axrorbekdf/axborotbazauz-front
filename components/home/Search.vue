<script lang="ts" setup>

const modelStore = useHomeStore();
const loadingStore = useLoadingStore();  
const route = useRoute()
// const subjectSlug = route.params.subject_slug;
const categorySlug = route.params.category_slug as string;
const subjectSlug = route.params.subject_slug as string;

const routeInfo = defineProps({
  route: {
    type: String,
    default: "/document/category/",
    required: false
  }
});


const search = ref(null)

watch(search, (newValue, oldValue) => {
    modelStore.getAllRecentMaterials(search.value, null, categorySlug, subjectSlug);
});

onMounted(async () => {
  await modelStore.getAllCategories()
  .finally(() => {
    loadingStore.set(false);
  }); 
});

</script>

<template>
    <UiLoader v-if="loadingStore.isLoading" />
    <template v-else>
        <section class="bg-purple-700 text-white py-12" style="background-color: #0A133C;">
            <div class="container max-w-screen-xl mx-auto px-4">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex flex-wrap gap-4">
                    <input v-model="search" type="text" placeholder="Nimalar qidirmoqchisiz?" class="flex-1 px-4 py-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-black">
                    <button class="w-full md:w-auto bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">Qidirish</button>
                </div>
                <div class="flex flex-wrap gap-4 mt-6">
                    <!-- <NuxtLink to="/category" class="px-4 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600">Kategoriya</NuxtLink> -->
                    <NuxtLink to="/" class="px-4 py-2 rounded-full shadow bg-purple-500 text-white hover:bg-purple-600">Barchasi 450</NuxtLink>

                    <NuxtLink
                      :class="categorySlug === item?.slug ? 'bg-purple-500 text-white hover:bg-purple-600':'bg-gray-200 text-purple-700 hover:bg-purple-300'"
                      :to="routeInfo.route+item?.slug" 
                      v-for="(item) in modelStore.getCategories as Array<any>" 
                      :key="item" 
                      class="px-3 py-2 text-sm rounded-full shadow"
                    >
                      {{ item.name }} 
                      <span v-if="item.count > 0"> {{ item.count }} </span>
                    </NuxtLink>
                    
                    <!-- <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Diplom ishlar 450</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink>
                    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</NuxtLink> -->
                </div>
            </div>
            </div>
        </section>    
    </template>
    
</template>
