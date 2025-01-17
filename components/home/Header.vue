<script setup lang="ts">
import AuthService from '~/services/Auth';

const router = useRouter();

const {currentUser, clear} = useAuthStore()
const loadingStore = useLoadingStore()
const toast = useToast();
const errors = ref('');

const isMenuOpen = ref(false);
const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
}

const statusCount = computed(() => {
  var count = 0;
  for (const item of currentUser.obuna) {
      if (item.status === true) {
        count++
      }
  }

  return count;
});

const items = [
  [{
    label: 'Status: Passive',
    icon: 'emojione:prohibited',
  }],
  [{
    label: 'Sozlamalar',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => {
      router.push('/account');
    }
  }], [{
    label: 'Tizimdan chiqish',
    icon: 'i-heroicons-arrow-right-circle-20-solid',
    click: () => {
      logout()
    }
  }]
];

if(statusCount.value > 0){
    items[0][0].label = 'Status: Active'
    items[0][0].icon = 'emojione:party-popper'
}

const logout = async () => {
    loadingStore.set(true);

    AuthService.logout()
    .then(() => {
        loadingStore.set(false);
        router.push('/')    

        toast.add({
            title: 'Tizimdan chiqildi!',
        })

        clear();

    }).catch(error => {
        loadingStore.set(false);
        errors.value = error;
        toast.add({
            title: 'Error',
            description: error.message
        })
        
    })
    .finally(() => {
        loadingStore.set(false)
    }); 
}

</script>

<template>
    <header class="bg-purple-700 text-white py-4" style="background-color: #0A133C">
      <div class="container max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-bold">Axborot<span class="text-yellow-400" style="color: #EA850C">Baza</span></NuxtLink>
        

        <div v-if="currentUser.is_active">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="md:hidden">
              <UButton color="white" :label="currentUser.name" trailing-icon="i-heroicons-chevron-down-20-solid" class="bg-red border-0 text-white outline-none hover:bg-red"/>
            </UDropdown>
        </div>
        <NuxtLink v-else to="/admin/dashboard" class="bg-white md:hidden text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Kirish</NuxtLink>

        <!-- Hamburger Icon -->
        <button @click="toggleMenu" class="md:hidden text-3xl focus:outline-none">
          &#9776;
        </button>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-6 text-lg">
          <NuxtLink to="/" class="hover:text-yellow-400">Bosh sahifa</NuxtLink>
          <NuxtLink to="/tarifs" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/principle" class="hover:text-yellow-400">Qoidalar</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-yellow-400">Biz bilan aloqa</NuxtLink>
          <NuxtLink v-if="currentUser.is_active && currentUser.role == 'admin'" to="/admin/dashboard" class="text-yellow-400 hover:text-yellow-400">Boshqaruv paneliga o'tish</NuxtLink>
        </nav>

        <div v-if="currentUser.is_active">
            <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" class="hidden md:flex">
              <UButton color="white" :label="currentUser.name" trailing-icon="i-heroicons-chevron-down-20-solid" class="bg-red border-0 text-white outline-none hover:bg-red"/>
            </UDropdown>
        </div>
        <div v-else>
          <NuxtLink to="/auth/login" class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 flex-row items-center">Kirish</NuxtLink>
        </div>
          
        <!-- <NuxtLink v-if="currentUser.is_active && currentUser.role == 'admin'" to="/admin/dashboard" class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Boshqaruv paneliga o'tish</NuxtLink> -->
      </div>
  
      <!-- Mobile Navigation -->
      <div
        class="fixed top-0 right-0 h-full w-64 bg-purple-700 text-white transform menu-slide shadow-lg z-50"
        :class="{ 'translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen }"
      >
        <div class="flex justify-between items-center px-4 py-4 border-b border-purple-600">
          <div class="text-2xl font-bold">Menu</div>
          <button @click="toggleMenu" class="text-3xl focus:outline-none">&times;</button>
        </div>
        <nav class="flex flex-col gap-4 p-4 text-lg">
          <NuxtLink to="/" class="hover:text-yellow-400">Bosh sahifa</NuxtLink>
          <NuxtLink to="/tarifs" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/principle" class="hover:text-yellow-400">Qoidalar</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-yellow-400">Biz bilan aloqa</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <style>
  .menu-slide {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  