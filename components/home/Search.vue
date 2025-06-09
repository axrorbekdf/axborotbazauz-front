<script lang="ts" setup>

const modelStore = useHomeStore();
const loadingStore = useLoadingStore();  
const route = useRoute()
const router = useRouter()
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

const isActive = computed(() => {
  return route.path === '/' || route.path === '/tarifs'
})

const search = ref(null)
const isSearch = ref(false)

// Qidirish funksiyasi (watch va button uchun)
const getRecentMaterials = async () => {
    loadingStore.setSearch(true)
    
    window.scrollTo({
      top: 300,
      behavior: 'smooth'
    })

    try {
      
      // ✅ Ayni route'da qolib, query param qo‘shish
      router.push({
        path: route.path,
        query: {
          ...route.query, // eski query larni saqlab qolish
          qidirish: search.value // yangi q parametri
        }
      })
      
      await modelStore.getAllRecentMaterials(search.value, 1, 10, categorySlug, subjectSlug)

    } catch (err) {
      console.error(err)
    } finally {
      loadingStore.setSearch(false)
    }
};

const all_count = computed(() =>
  (modelStore.getCategories as Array<any>).reduce((total, item) => total + (item?.count || 0), 0)
)

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
                    <input v-model="search" type="text" @keyup.enter="getRecentMaterials" placeholder="Nimalar qidirmoqchisiz?" class="flex-1 px-4 py-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-black">
                    <button @click="getRecentMaterials" class="w-full md:w-auto bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">Qidirish</button>
                </div>
                <div class="w-full flex flex-wrap gap-4 mt-6">
                    <!-- <NuxtLink to="/category" class="px-4 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600">Kategoriya</NuxtLink> -->
                    <NuxtLink 
                      to="/" 
                      :class="isActive ? 'bg-purple-500 text-white hover:bg-purple-600':'bg-gray-200 text-purple-700 hover:bg-purple-300'"
                      class="flex flex-auto sm:flex-none justify-between items-center rounded-full shadow text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                    >
                        <span>Barchasi</span>
                        <span class="mx-2">{{all_count}}</span>
                    </NuxtLink>

                    <NuxtLink
                      :class="categorySlug === item?.slug ? 'bg-purple-500 text-white hover:bg-purple-600':'bg-gray-200 text-purple-700 hover:bg-purple-300'"
                      :to="routeInfo.route+item?.slug" 
                      v-for="(item) in modelStore.getCategories as Array<any>" 
                      :key="item" 
                      class="flex flex-auto sm:flex-none justify-between items-center rounded-full shadow text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                    >
                      <span>{{ item.name }}</span> 
                      <span v-if="item.count > 0" class="mx-2"> {{ item.count }} </span>
                    </NuxtLink>
                    
                </div>
            </div>
            </div>
        </section>    
    </template>
    
</template>
