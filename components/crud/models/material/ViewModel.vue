<script setup lang="ts">

const props = defineProps({
    model: {
        type: Object,
        default: {},
        required: true
    },
})

console.log(props.model);


// Slider data
// const pages = ref([
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
//     { image: "https://i.pinimg.com/736x/06/dd/5a/06dd5a642a9c37906d69227152eb9fc0.jpg" },
// ]);

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
  <div>    
      <table class="w-full table-auto border-collapse border border-gray-200">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2 text-left">Nomi</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Qiymati {{ props.model.modelStore }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-100" v-for="(property, key) in props.model" :key="property" v-show="!property.hidden">
            <td class="border border-gray-300 px-4 py-2">{{ property.name }}</td>

            <td v-if="property?.relation?.status" class="border border-gray-300 px-4 py-2">{{ property?.value[property?.relation?.name] }}</td>
            <td v-else class="border border-gray-300 px-4 py-2">{{ property.value }}</td>
          </tr>
          
        </tbody>
      </table>

      <!-- Divider -->
      <hr class="border-gray-400 mb-6">

      <!-- Bottom Section -->
      <div class="grid grid-cols-1 gap-1">

          <UiSlider :pages="props.model.pages.value"/>
              
      </div>
    
  </div>
</template>
