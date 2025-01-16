<script setup lang="ts" >

const isMenuOpen = ref(false);
const authStore = useAuthStore();
const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
}

const userInfo = ref({});

const isCheckUser = computed(() => {
  userInfo.value = authStore.currentUser;

  return Object.keys(userInfo.value).length === 0;
});

</script>

<template>
    <header class="bg-purple-700 text-white py-4">
      <div class="container max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <NuxtLink to="/" class="text-3xl font-bold">Axborot<span class="text-yellow-400">Baza</span></NuxtLink>
        
        <NuxtLink to="/admin/dashboard" class="bg-white md:hidden text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Kirish</NuxtLink>

        <!-- Hamburger Icon -->
        <button @click="toggleMenu" class="md:hidden text-3xl focus:outline-none">
          &#9776;
        </button>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-6 text-lg">
          <NuxtLink to="/" class="hover:text-yellow-400">Bosh sahifa</NuxtLink>
          <!-- <NuxtLink to="/about" class="hover:text-yellow-400">Biz haqimizda</NuxtLink> -->
          <NuxtLink to="/tarifs" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/principle" class="hover:text-yellow-400">Qoidalar</NuxtLink>
          <!-- <NuxtLink to="/partners" class="hover:text-yellow-400">Reklama beruvchilar uchun</NuxtLink> -->
          <NuxtLink to="/contact" class="hover:text-yellow-400">Biz bilan aloqa</NuxtLink>
        </nav>

        <div v-if="!isCheckUser">
            <NuxtLink to="/account" class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 flex-row items-center">
              <p>{{ authStore.currentUser.name }}</p>
              <span>Active: 12-12-2025 - 14-12-2025</span>
            </NuxtLink>
        </div>
        <div v-else>
          <NuxtLink to="/auth/login" class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 flex-row items-center">Kirish</NuxtLink>
        </div>
        
        <NuxtLink to="/admin/dashboard" class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Kirish 1</NuxtLink>
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
          <!-- <NuxtLink to="/about" class="hover:text-yellow-400">Biz haqimizda</NuxtLink> -->
          <NuxtLink to="/tarifs" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/principle" class="hover:text-yellow-400">Qoidalar</NuxtLink>
          <!-- <NuxtLink to="/partners" class="hover:text-yellow-400">Reklama beruvchilar uchun</NuxtLink> -->
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
  