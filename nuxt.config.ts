// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  colorMode: {
    preference: 'light'
  },
  pinia: {
    storesDirs: ['./store/**'],
  },

})