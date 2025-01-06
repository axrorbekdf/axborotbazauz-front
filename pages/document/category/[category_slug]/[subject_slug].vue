<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const categorySlug = route.params.category_slug;
const subjectSlug = route.params.subject_slug;
</script>
<template>
    <div>
        <h1>Subject Page</h1>
        <p>Category: {{ categorySlug }}</p>
        <p>Subject: {{ subjectSlug }}</p>
    </div>
</template>