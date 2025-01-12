<script setup lang="ts">

const props = defineProps({
    pages: {
        type: Array<any>,
        default: [],
        required: true
    }
})

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
</script>
<template>
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
                    v-for="(slide, index) in props.pages"
                    :key="index"
                    :class="`flex-shrink-0 w-[calc(100%/${slidesToShow})] bg-gray-300 flex items-center justify-center rounded-lg h-64 mx-4 my-4`"
                >
                    <img :src="'http://127.0.0.1:8000/storage/'+slide?.previewPath" :alt="'Slide ' + (index + 1)" class="object-cover w-full h-full rounded-lg" />
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
</template>