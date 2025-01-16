<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
const subjectSlug = route.params.subject_slug as string;

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
        <HomeSubjects/>

        <!-- Recent Items Section -->
        <HomeSearchResultItems :subject-slug="subjectSlug" />

        <!-- Footer Wave -->
        <HomeFooter />
    </div>
</template>