<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}];

</script>

<template>
    <div class="bg-gray-100 font-sans relative">

      <!-- Header -->
      <header class="text-white py-4 p-4 bg-cover bg-center bg-no-repeat min-h-64" style="background-image: url('https://arxiv.uz/assets/img/bg.jpg');">
        <div class="container mx-auto px-4 flex items-center justify-between">
          <h1 class="text-3xl font-bold mt-8">
            <img src="https://arxiv.uz/assets/img/logo.png" alt="">
          </h1>
        </div>
      </header>

      <!-- Main Content -->
      <div class="container mx-auto px-4 mt-6 p-6 flex flex-col lg:flex-row gap-6 relative -top-24 bg-white">
        <!-- Sidebar -->
        <aside class="w-full lg:w-1/4 rounded-lg p-4">
          <div class="mb-6 border p-4 rounded-lg">
            <h2 class="text-lg font-bold mb-2">Login</h2>
            <form class="space-y-4">
              <input type="text" placeholder="Login" class="w-full p-2 border rounded-md">
              <input type="password" placeholder="Parol" class="w-full p-2 border rounded-md">
              <button class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Kirish</button>
              <div class="w-full text-center">yoki <a href="#" class="text-red-500 hover:underline text-sm">Ro'yxatdan o'tish</a></div>
              <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Facebook orqali kirish</button>
            </form>
          </div>

          <div class="border p-4" style="display: none;">
            <h2 class="text-lg font-bold mb-2">Bo'limlar</h2>
            <ul class="space-y-2">
              <li><a href="#" class="text-red-500 font-bold hover:underline">Barchasi</a></li>
              <li><a href="#" class="text-blue-500 hover:underline">Dars ishlanmalari (280)</a></li>
              <li><a href="#" class="text-blue-500 hover:underline">Diplom ishlari (1113)</a></li>
              <li><a href="#" class="text-blue-500 hover:underline">Slaydlar (2450)</a></li>
              <li><a href="#" class="text-blue-500 hover:underline">Referatlar (27459)</a></li>
              <li><a href="#" class="text-blue-500 hover:underline">Kurs ishlari (8260)</a></li>
            </ul>
          </div>
          
          <div class="max-w-md mx-auto  rounded-lg overflow-hidden border border-gray-200">
            <!-- Card Header -->
            <!-- <div class="bg-blue-500 text-white px-4 py-3">
              <h2 class="text-lg font-bold">Bo'limlar</h2>
            </div> -->

            <!-- List Items -->
            <ul class="divide-y divide-gray-200">
              <!-- Item 1 -->
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Barchasi</a>
                <span class="text-gray-500 text-sm">15</span>
              </li>
              <!-- Item 2 -->
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Dars ishlanmalari (280)</a>
                <span class="text-gray-500 text-sm">32</span>
              </li>
              <!-- Item 3 -->
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Diplom ishlari (1113)</a>
                <span class="text-gray-500 text-sm">7</span>
              </li>
              <!-- Item 4 -->
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Slaydlar (2450)</a>
                <span class="text-gray-500 text-sm">23</span>
              </li>
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Referatlar (27459)</a>
                <span class="text-gray-500 text-sm">23</span>
              </li>
              <li class="flex justify-between items-center px-4 py-3">
                <a href="#" class="text-blue-500 hover:underline font-medium">Kurs ishlari (8260)</a>
                <span class="text-gray-500 text-sm">23</span>
              </li>
            </ul>
          </div>

        </aside>

        <!-- Main Section -->
        <main class="w-full lg:w-3/4 bg-white">
          <!-- Search Bar -->
          <div class="bg-white mt-4 rounded-lg mb-6 flex flex-col sm:flex-row items-center">
            <input type="text" placeholder="Nimani qidirmoqdasiz?" class="w-full p-2 border rounded-md">
            <button class="sm:ml-2 mt-2 sm:mt-0 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600">
              <i class="fas fa-search text-gray-500"></i>
            </button>
          </div>

          <div class="bg-white mt-4 rounded-lg mb-6 flex flex-col sm:flex-row items-center">
            <UBreadcrumb :links="links" />
          </div>

          <!-- Category Grid -->
          <div class="bg-orange-50 p-6 border rounded-lg grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 mb-6">
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Adabiyot
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Algebra
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Anatomiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Arxitektura
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Astronomiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Biologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Biotexnologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Botanika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Chizmachilik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              CHQBT
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Davlat tilida ish yuritish
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Dinshunoslik asoslari
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Ekologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Energetika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Falsafa
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Fizika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Fransuz tili
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Geodeziya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Geografiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Geologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Geometriya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Huquqshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Informatika va AT
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Ingliz tili
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Iqtisodiyot
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Issiqlik texnikasi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Jismoniy tarbiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Kimyo
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Konchilik ishi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Madaniyatshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Maktabgacha va boshlang'ich ta'lim
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Manaviyat asoslari
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Mashinasozlik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Materialshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Mehnat
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Melioratsiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Metrologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Mexanika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Milliy istiqlol g'oyasi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Musiqa
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Nemis tili
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              O'qish
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Odam va uning salomatligi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Odobnoma
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Oziq-ovqat texnologiyasi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Pedagogika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Prezident asarlari
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Psixologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Psixologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Qishloq va o'rmon xo'jaligi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Radiotexnika
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Rus tili va adabiyoti
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              San'at
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Siyosatshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Sotsiologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Suv xo'jaligi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Tabiatshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Tarix
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Tasviriy san'at
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Texnika va texnologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Tibbiyot
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Tilshunoslik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              To'qimachilik
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Transport
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Valeologiya
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Xayot faoliyati xavfsizligi
            </a>
            <a href="#" class="text-black-500 font-mono text-md hover:underline">
              <Icon name="ion:library-outline" class="w-5 h-5"/>
              Zoologiya
            </a>
            <!-- Add more categories as needed -->
          </div>

          <!-- Latest Additions -->
          <div class="bg-white border p-6 rounded-lg">
            <h2 class="text-3xl font-medium mb-4">So'nggi qo'shilganlar</h2>
            <ul class="space-y-4">
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Microsoft Office dasturini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <li class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div class="flex flex-col">
                  <a href="#" class="text-blue-500 hover:underline text-xl">Dasturlash tillarini o'qitish metodikasi</a>
                  <span class="text-md">Kurs ishlari / Informatika va AT</span>
                </div>
                
                <UBadge color="primary" variant="solid">
                  <Icon name="mingcute:alarm-1-line" class="w-4 h-4"/>
                  8 kun oldin
                </UBadge>
              </li>
              <!-- Add more items as needed -->
            </ul>
          </div>
        </main>
      </div>

      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto px-4 text-center">
          <p>&copy; 2012-2024 Arxiv.uz. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
        
    </div>
</template>



