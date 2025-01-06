<script setup lang="ts" >

const isMenuOpen = ref(false);

const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
    <header class="bg-purple-700 text-white py-4">
      <div class="container max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <!-- Logo -->
        <div class="text-3xl font-bold">Axborot<span class="text-yellow-400">Baza</span></div>
        
        <button class="bg-white md:hidden text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Get Started</button>

        <!-- Hamburger Icon -->
        <button @click="toggleMenu" class="md:hidden text-3xl focus:outline-none">
          &#9776;
        </button>
  
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-6 text-lg">
          <NuxtLink to="/" class="hover:text-yellow-400">Bosh sahifa</NuxtLink>
          <NuxtLink to="/payment" class="hover:text-yellow-400">Biz haqimizda</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Qoidalar</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Reklama beruvchilar uchun</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Biz bilan aloqa</NuxtLink>
        </nav>

        <button class="bg-white hidden md:flex text-purple-700 px-4 py-2 rounded-full shadow-md hover:bg-yellow-400">Kirish</button>
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
          <NuxtLink to="/category" class="hover:text-yellow-400">Biz haqimizda</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Tariflar</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Aloqa</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Pages +</NuxtLink>
          <NuxtLink to="/category" class="hover:text-yellow-400">Contact</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <style>
  .menu-slide {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  