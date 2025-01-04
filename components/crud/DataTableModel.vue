<script setup lang="ts">

const loadingStore = useLoadingStore();

const model = defineProps({
  modelCrud: {
    type: Object,
    default: {},
    required: true
  },
  modelStore: {
    type: Object,
    default: {},
    required: true
  }
});

// Belgilanganlar qatori
const data = ref([]);

onMounted(async () => {
  await model.modelStore.getAllModel(null);
});



// Amallar ro'yhatida
const actions = (row:any) => {
  if (!row || !row.id) {
    console.error('Invalid row data', row);
    return [];
  }

  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row)
    }, {
      label: 'View',
      icon: 'i-heroicons-document-duplicate-20-solid',
      // click: () => console.log('Edit', row)
      click: () => modalShowView(row)
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => console.log('Delet', row)
    }]
  ];
};

// Belgilanganlar qatori
const selected = ref([]);
// Qidirilayotgan matn yoki text
const search = ref('')

// Tabledagi qatorni bosganda o'sha qatorni belgilanganlar qatoriga qo'shish uchun
const select = (row:any):any => {

  if (!row || !row.id) {
    console.error('Invalid row data', row);
    return 0;
  }

  const index = selected.value.findIndex(item => item.id === row.id)
  if (index === -1) {
    selected.value = [];
    selected.value.push(row)
  } else {
    selected.value.splice(index, 1)
  }
}

watchEffect(() => {
  model.modelStore.getAllModel(search.value);
});

// const filteredRows = computed(() => {
  
//   if (!search.value) {
//       return model.modelStore.getModels
//   }
//   // model.modelStore.getAllModel(search.value);
//   return model.modelStore.getModels.filter((item: any) => {
//       return Object.values(item).some((value) => {
//           return String(value).toLowerCase().includes(search.value.toLowerCase())
//       })
//   })

// })

const page = ref(1)
const pageCount = 5

const paginateRows = computed(() => {
  return model.modelStore.getModels.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})

const isOpenView = ref(false);
const isOpenStore = ref(false);
const isOpenUpdate = ref(false);

function modalShowView(row:any){
  isOpenView.value = !isOpenView.value;
  model.modelStore.setOneModel(row);
}

function modalStore(){
  isOpenStore.value = !isOpenStore.value;
  // model.modelStore.setOneModel(row);
  
}


</script>

<template>
  <!-- <UiLoader/> -->
  <!-- <UiLoader v-if="loadingStore.isLoading" /> -->
  <p v-if="loadingStore.isLoading">Yuklanmoqda</p>
  <template v-else>
      <div>
        <CrudViewModel :is-open="isOpenView" :toggle-show="modalShowView" :model="model.modelStore.oneModel"/>
        <CrudStoreModel :is-open="isOpenStore" :toggle-show="modalStore" :model="model.modelCrud.getFormFields()"/>


        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 items-center justify-between">
          <!-- Qator boshidagi UInput -->
          <div class="flex items-center">
            <UInput v-model="search" placeholder="Qidirish..." />
          </div>

          <!-- Qator oxiridagi UButton -->
          <div class="flex items-center">
            <UButton label="Create" color="primary" variant="soft" class="mx-5" @click="modalStore()" />
          </div>
        </div>



        <UTable v-model="selected" :rows="paginateRows" :columns="model.modelCrud.getColumns()" @select="select">
          <template #name-data="{ row }">
            <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="actions(row)">
              <UButton color="gray" variant="solid" label="Amallar"/>
            </UDropdown>
          </template>
        </UTable>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="model.modelStore.getModels.length" />
        </div>
      </div>
  </template>
</template>

