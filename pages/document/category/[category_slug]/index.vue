<script setup lang="ts">
const route = useRoute()

useHead({
  title: 'Xush kelibsiz! - Qidirganizni topasiz!',
  meta: [
    // Umumiy meta
    { name: 'description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
    { name: 'keywords', content: 'dars ishlanmalari, diplom ishlar, kurs ishlari, referatlar, slaydlar, fan materiallari, o‘quv materiallari, bepul yuklab olish, Axborot Baza, ta’lim resurslari, metodik ishlar, maktab darslari, universitet ishlari, pedagogika, ilmiy ishlar, referatlar to‘plami' },
    { name: 'author', content: 'https://drivesoft.uz' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // Open Graph (Facebook, Telegram va boshqalar uchun)
    { property: 'og:title', content: 'axborotbaza.uz - qidirganizni topasiz!' },
    { property: 'og:description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://axborotbaza.uz/' },
    { property: 'og:image', content: 'https://axborotbaza.uz/favicon.ico' },  // 1200x630 tavsiya etiladi

  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
  ]
})

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
    <HomeSearchResultItems :category-slug="categorySlug"/>

    <!-- Footer Wave -->
    <HomeFooter />
</template>