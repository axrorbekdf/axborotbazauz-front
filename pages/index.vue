<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const search = ref(null)

watch(() => route.query.qidirish, (newQ) => {
  search.value = newQ
  console.log('Query o‘zgardi:', newQ)
})

</script>

<template>
  <!-- Head Section -->
  <HomeHeader />
  
  <!-- Search Section -->
  <HomeSearch />

  <!-- Subject Grid Section -->
  <HomeSubjects />

  <!-- Recent Items Section -->

  <HomeRecentItems v-if="search == null"/>
  <HomeSearchResultItems v-else :search="search" />

  <!-- Footer Wave -->
  <HomeFooter />
</template>



