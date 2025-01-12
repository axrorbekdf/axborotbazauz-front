<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const categorySlug = route.params.category_slug as string;
</script>
<template>
    <!-- <div>
        <h1>Category test Page</h1>
        <p>Category: {{ categorySlug }}</p>
    </div> -->

    <!-- Head Section -->
    <HomeHeader />
    
    <!-- Search Section -->
    <HomeSearch />

    <!-- Subject Grid Section -->
    <HomeSubjects :route="'/document/category/'" :category-slug="categorySlug"/>

    <!-- Recent Items Section -->
    <HomeRecentItems :category-id="categorySlug"/>

    <!-- Footer Wave -->
    <HomeFooter />
</template>