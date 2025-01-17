<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const materialSlug = route.params.material_slug as string;

</script>
<template>
    <div>
        <!-- <h1>Subject Page</h1>
        <p>Subject: {{ subjectSlug }}</p> -->

        <!-- Head Section -->
        <HomeHeader />
        
        <!-- Search Section -->
        <HomeSearch />

        <!-- Subject Grid Section -->
        <!-- <HomeMaterialPresentationShow /> -->
        <HomeMaterialShow :material-slug="materialSlug"/>

        <!-- Recent Items Section -->
        <HomeRecentItems/>

        <!-- Footer Wave -->
        <HomeFooter />
    </div>
</template>