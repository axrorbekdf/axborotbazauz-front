<template>
  <div class="bg-purple-700" style="background-color: #0A133C">
      <section class="container max-w-screen-xl mx-auto py-12 px-4">
          <div class="text-gray-300 p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div class="space-y-2 sm:space-x-4 sm:space-y-0 text-center sm:text-left">
                  <a href="#" class="text-base hover:underline block sm:inline">Qoidalar</a>
                  <a href="#" class="text-base hover:underline block sm:inline">Reklama beruvchilar uchun</a>
                  <a href="#" class="text-base hover:underline block sm:inline">Biz bilan aloqa</a>
              </div>
              <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <a href="#" class="text-base hover:underline">O'zbek</a>
                    <div class="flex items-center border border-black">
                        <div v-html="counterHtml" />
                    </div>
              </div>
          </div>
          <div class="text-gray-300 text-base p-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <p>©2025 AxborotBaza.uz</p>
              <p>Sayt yaratuvchi DriveSoft (drivesoft.uz)</p>
          </div>
      </section>
  </div>
</template>

<script setup>
const counterHtml = ref('')

onMounted(() => {
  const pg = encodeURIComponent(window.location.href)
  counterHtml.value = `
    <!-- START WWW.UZ TOP-RATING -->
    <a href="http://www.uz/ru/res/visitor/index?id=47835" target=_top>
      <img src="https://cnt0.www.uz/counter/collect?id=47835&pg=${pg}&col=340F6E&t=ffffff&p=BD6F6F" width=88 height=31 border=0 alt="Топ рейтинг www.uz">
    </a>
    <!-- FINISH WWW.UZ TOP-RATING -->
  `
})
</script>