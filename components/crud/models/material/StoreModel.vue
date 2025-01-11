<script setup lang="ts">

// Slider data
const pages = ref([
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
    { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
]);

// Configurations
const slidesToShow = 4; // Number of slides to show at a time
const currentIndex = ref(0);

// Scroll to next set of slides
const scrollToNext = () => {
//   if (currentIndex.value < slides.value.length) {
    currentIndex.value +=2;
//   }
};

// Scroll to previous set of slides
const scrollToPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -=2;
  }
};
const title = ref("")
const category_id = ref(0)
const subject_id = ref(0)
</script>
 
<template>

    <!-- Container -->
  <div class="max-w-4xl mx-auto">
    <!-- Top Section -->
    <div class="flex flex-col gap-4 mb-6">
      <!-- Long Rectangle -->
      <div class="h-6 rounded my-2">
        <UInput v-model="title" />
      </div>

      <!-- Two Smaller Rectangles -->
      <div class="flex gap-4 my-2">
        <div class="h-6 w-1/2">
            <USelectMenu
                v-model="category_id"
                searchable
                searchable-placeholder="Search a person..."
                class="w-full"
                placeholder="Select a person"
                :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
            />
        </div>
        <div class="h-6 w-1/2">
            <USelectMenu
                v-model="subject_id"
                searchable
                searchable-placeholder="Search a person..."
                class="w-full"
                placeholder="Select a person"
                :options="['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']"
            />
        </div>
      </div>

      <!-- Center Rectangle -->
      <div class="h-6 w-1/3 mx-auto bg-gray-300 rounded">
        <UInput type="file" size="sm" icon="i-heroicons-folder" aria-placeholder="Faylni tanlang"/>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-400 mb-6">

    <!-- Bottom Section -->
    <div class="grid grid-cols-1 gap-1">

            <div class="bg-gray-100 flex items-center justify-center rounded-lg">
                <!-- Slider Container -->
                <div class="relative w-full max-w-6xl overflow-hidden">
                    <!-- Slider Items -->
                    <div
                        ref="slider"
                        :style="{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }"
                        class="flex transition-transform duration-10 ease-in-out mx-4"
                    >
                        <!-- Each Slide -->
                        <div
                            v-for="(slide, index) in pages"
                            :key="index"
                            :class="`flex-shrink-0 w-[calc(100%/${slidesToShow})] bg-gray-300 flex items-center justify-center rounded-lg h-64 mx-4 my-4`"
                        >
                            <img :src="slide.image" :alt="'Slide ' + (index + 1)" class="object-cover w-full h-full rounded-lg" />
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <button
                        @click="scrollToPrev"
                        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        &#8592;
                    </button>
                    <button
                        @click="scrollToNext"
                        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        &#8594;
                    </button>
                </div>
            </div>




    </div>
  </div>
</template>

<style>
/* Slider styles */
.slider-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none; /* For Firefox */
}

.slider-container::-webkit-scrollbar {
  display: none; /* For Chrome, Safari */
}

.slider-item {
  scroll-snap-align: center;
}
</style>