// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    '@nuxtjs/i18n'
  ],
  colorMode: {
    preference: 'light'
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
  app: {
    head: {
      title: 'Xush kelibsiz! - Qidirganizni topasiz!',
      meta: [
        { name: 'description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
        { name: 'keywords', content: 'dars ishlanmalari, diplom ishlar, kurs ishlari, referatlar, slaydlar, fan materiallari, o‘quv materiallari, bepul yuklab olish, Axborot Baza, ta’lim resurslari, metodik ishlar, maktab darslari, universitet ishlari, pedagogika, ilmiy ishlar, referatlar to‘plami' },
        { name: 'author', content: 'https://drivesoft.uz' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // Open Graph
        { property: 'og:title', content: 'axborotbaza.uz - qidirganizni topasiz!' },
        { property: 'og:description', content: 'Dars ishlanmalari, diplom ishlari, slaydlar, referatlar, kurs ishlari va fanlar bo‘yicha turli materiallarni yuklab olish yoki yuklash mumkin bo‘lgan bepul ta’lim platformasi — Axborot Baza.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://axborotbaza.uz/' },
        { property: 'og:image', content: 'https://axborotbaza.uz/favicon.ico' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    }
  },

  sitemap: {
    siteUrl: 'https://axborotbaza.uz',
    autoLastmod: false,
    trailingSlash: false,
    gzip: true,

    // Static sahifalar
    routes: [
      '/',
      '/tarifs',
      '/principle',
      '/principle',
      '/contact',
      '/account',

      '/document/category/dars-ishlanmalar',
      '/document/category/diplom-ishlar',
      '/document/category/darsliklar',
      '/document/category/slaydlar',
      '/document/category/referatlar',
      '/document/category/kurs-ishlari',

      '/document/subject/adabiyot',
      '/document/subject/algebra',
      '/document/subject/anatomiya',
      '/document/subject/arxitektura',
      '/document/subject/astronomiya',
      '/document/subject/biologiya',
      '/document/subject/biotexnologiya',
      '/document/subject/botanika',
      '/document/subject/chizmachilik',
      '/document/subject/chqbt',
      '/document/subject/davlat-tilida-ish-yuritish',
      '/document/subject/dinshunoslik-asoslari',
      '/document/subject/ekologiya',
      '/document/subject/energetika',
      '/document/subject/falsafa',
      '/document/subject/fizika',
      '/document/subject/fransuz-tili',
      '/document/subject/geodeziya',
      '/document/subject/geografiya',
      '/document/subject/geologiya',
      '/document/subject/geometriya',
      '/document/subject/huquqshunoslik',
      '/document/subject/informatika-va-at',
      '/document/subject/ingliz-tili',
      '/document/subject/iqtisodiyot',
      '/document/subject/issiqlik-texnikasi',
      '/document/subject/jismoniy-tarbiya',
      '/document/subject/kimyo',
      '/document/subject/konchilik-ishi',
      '/document/subject/madaniyatshunoslik',
      '/document/subject/maktabgacha-va-boshlang-ich-ta-lim',
      '/document/subject/manaviyat-asoslari',
      '/document/subject/mashinasozlik',
      '/document/subject/materialshunoslik',
      '/document/subject/mehnat',
      '/document/subject/melioratsiya',
      '/document/subject/metrologiya',
      '/document/subject/mexanika',
      '/document/subject/milliy-istiqlol-g-oyasi',
      '/document/subject/musiqa',
      '/document/subject/nemis-tili',
      '/document/subject/o-qish',
      '/document/subject/odam-va-uning-salomatligi',
      '/document/subject/odobnoma',
      '/document/subject/oziq-ovqat-texnologiyasi',
      '/document/subject/pedagogik-psixologiya',
      '/document/subject/prezident-asarlari',
      '/document/subject/psixologiya',
      '/document/subject/psixologiya-1',
      '/document/subject/qishloq-va-o-rmon-xo-jaligi',
      '/document/subject/radiotexnika',
      '/document/subject/rus-tili-va-adabiyoti',
      '/document/subject/san-at',
      '/document/subject/siyosatshunoslik',
      '/document/subject/sotsiologiya',
      '/document/subject/suv-xo-jaligi',
      '/document/subject/tabiatshunoslik',
      '/document/subject/tarix',
      '/document/subject/tasviriy-san-at',
      '/document/subject/texnika-va-texnologiya',
      '/document/subject/tibbiyot',
      '/document/subject/tilshunoslik',
      '/document/subject/to-qimachilik',
      '/document/subject/transport',
      '/document/subject/valeologiya',
      '/document/subject/xayot-faoliyati-xavfsizligi',
      '/document/subject/zoologiya',
      
    ],

    // ❌ admin sahifalarni yashirish
    exclude: [
      '/admin',
      '/admin/**',
      '/login',
      '/dashboard',
      '/user/**'
    ]
  },

  gtag: {
    id: 'AW-17095139576', // 17078865033, Sizning Google Ads yoki Analytics ID'ingiz
    config: {
      anonymize_ip: true,
    },
  },

  i18n: {
    locales: [
      {
        code: 'uz',
        name: 'Oʻzbek',
        file: 'uz.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json'
      },
    ],
    lazy: true,
    // langDir: 'locales/',
    defaultLocale: 'uz',
    strategy: 'prefix', // yoki 'prefix', 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'uz'
    },
  }
})