<script setup lang="ts">


</script>

<template>

  <UiHeader />
  
  <!-- Search Section -->
  <section class="bg-purple-700 text-white py-12">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex flex-wrap gap-4">
          <input type="text" placeholder="Searching" class="flex-1 px-4 py-2 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
          <button class="w-full md:w-auto bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">Searching</button>
        </div>
        <div class="flex flex-wrap gap-4 mt-6">
          <button class="px-4 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600">All 450</button>
          <button class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Dasr ishlamalar 450</button>
          <button class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Diplom ishlar 450</button>
          <button class="px-4 py-2 bg-gray-200 text-purple-700 rounded-full shadow hover:bg-purple-300">Slaydlar 120</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Grid Section -->
  <section class="container max-w-screen-xl mx-auto py-12 px-4">
    <div class="grid grid-cols-2 md:grid-cols-6 gap-6 bg-yellow-100 p-6 rounded-lg">
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <div class="text-center font-bold">Adabiyot</div>
      <!-- Add more items as needed -->
    </div>
  </section>

  <!-- Recent Items Section -->
  <section class="container max-w-screen-xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold text-purple-700 mb-6">So‘nggi qo‘shilganlar</h2>
    <div class="space-y-4">
      <!-- Single Item -->
      <div class="flex flex-wrap items-center gap-4 p-4 border border-purple-400 rounded-lg">
        <div class="w-6 h-6 bg-purple-500 rounded-full"></div>
        <div class="flex-1">
          <h3 class="font-bold text-sm md:text-base">Tuyap — жой биноларини реконструкция қилиш технологияси</h3>
          <p class="text-xs md:text-sm text-purple-600">Referarlar / Arxitektura</p>
        </div>
        <button class="bg-red-500 text-white px-4 py-1 rounded-full text-xs md:text-sm">8 kun oldin</button>
      </div>
      <!-- Duplicate or dynamically add items -->
    </div>
  </section>

  <!-- Footer Wave -->
  <div class="bg-purple-700">
    <!-- <svg class="w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
    </svg> -->
    <h1>Salom0</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestiae iste reprehenderit, adipisci sit sed similique obcaecati quibusdam cupiditate commodi non neque veritatis sint corporis nihil nobis voluptatem porro totam?
    </p>
  </div>
</template>

<style>
.menu-slide {
  transition: transform 0.3s ease-in-out;
}
</style>





