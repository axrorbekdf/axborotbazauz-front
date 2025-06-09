<script setup lang="ts">

const { locale, locales, setLocale } = useI18n()
const router = useRouter()

// Select uchun variantlar yaratish
const options = locales.value.map(loc => ({
  label: loc.name,   // Masalan: "English", "Русский", "O‘zbek"
  value: loc.code    // Masalan: "en", "ru", "uz"
}))

// Select onchange funksiyasi
function onLanguageChange(value: any) {
  setLocale(value)

  // URL prefixni ham o‘zgartirish uchun qayta yo‘naltirish
  const path = router.currentRoute.value.fullPath
  router.push(`/${value}${path.replace(/^\/[a-z]{2}/, '')}`)
}
</script>

<template>
  <USelect
    :model-value="locale"
    @change="onLanguageChange"
    :options="options"
    option-attribute="label"
    value-attribute="value"
    class="w-40"
  />
</template>
