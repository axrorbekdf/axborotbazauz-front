<script setup lang="ts">

const images = [
        "/images/book1.jpg",
        "/images/book2.jpg",
        "/images/book3.jpg",
        "/images/book4.jpg",
        "/images/book5.jpg",
        "/images/book6.jpg",
      ];
</script>

<template>

    <!-- Bottom Section -->
    <div class="grid grid-cols-4 gap-4">


        <div class="bg-gray-100 min-h-screen p-6">
            <!-- Page Title -->
            <h1 class="text-3xl font-bold text-center mb-6">Book Style Image Viewer</h1>

            <!-- Books Container -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <!-- Each Book -->
            <div
                v-for="(image, index) in images"
                :key="index"
                class="relative w-full aspect-[3/4] bg-white shadow-lg rounded-lg overflow-hidden group"
            >
                <!-- Image -->
                <img
                :src="image"
                alt="Book Image"
                class="object-cover w-full h-full"
                />
                <!-- Book Overlay -->
                <div
                class="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                Book {{ index + 1 }}
                </div>
            </div>
            </div>
        </div>

    </div>
</template>

