<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Xush kelibsiz! - Qidirganizni topasiz!',
  meta: [
    // Umumiy meta
    { name: 'description', content: 'Bu sayt Nuxt 3 bilan yaratilgan va SEO uchun optimallashtirilgan.' },
    { name: 'keywords', content: 'nuxt3, seo, vue, web development' },
    { name: 'author', content: 'Your Name' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Open Graph (Facebook, Telegram va boshqalar uchun)
    { property: 'og:title', content: 'axborotbaza.uz - qidirganizni topasiz!' },
    { property: 'og:description', content: 'Sayt haqida qisqacha tavsif. Eng yaxshi Nuxt 3 loyihasi.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://axborotbaza.uz/' },
    { property: 'og:image', content: 'https://axborotbaza.uz/favicon.ico' },  // 1200x630 tavsiya etiladi

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'axborotbaza.uz - qidirganizni topasiz!' },
    { name: 'twitter:description', content: 'Nuxt 3 asosida qurilgan kuchli veb-loyiha.' },
    { name: 'twitter:image', content: 'https://axborotbaza.uz/favicon.ico' },
    { name: 'twitter:site', content: '@your_twitter_username' }  // ixtiyoriy
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ]
})

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



