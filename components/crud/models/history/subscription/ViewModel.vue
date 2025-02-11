<script setup lang="ts">

const props = defineProps({
    model: {
        type: Object,
        default: {},
        required: true
    },
})

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
    
  </div>
</template>
