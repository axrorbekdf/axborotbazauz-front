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
  },
  modelType: {
    type: String,
    default: "",
  }
});

// Belgilanganlar qatori
const data = ref([]);
const page = ref(1)
const pageCount = ref(10)

onMounted(async () => {
  console.log(pageCount.value);
  
  await model.modelStore.getAllModel(null, page.value, pageCount.value);
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
      click: () => modalShowUpdate(row)
    }, {
      label: 'View',
      icon: 'i-heroicons-document-duplicate-20-solid',
      // click: () => console.log('Edit', row)
      click: () => modalShowView(row)
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => modalDelete(row)
    }]
  ];
};

// Belgilanganlar qatori
const selected = ref<any>([]);
// Qidirilayotgan matn yoki text
const search = ref('')

// Tabledagi qatorni bosganda o'sha qatorni belgilanganlar qatoriga qo'shish uchun
const select = (row:any):any => {

  if (!row || !row.id) {
    console.error('Invalid row data', row);
    return 0;
  }

  const index = selected.value.findIndex((item:any) => item.id === row.id)
  if (index === -1) {
    selected.value = [row];
  } else {
    selected.value.splice(index, 1)
  }
}

watchEffect(() => {
  model.modelStore.getAllModel(search.value, page.value, pageCount.value);
});


const paginateRows = computed(() => {
  // return model.modelStore.getModels.slice((page.value - 1) * pageCount, (page.value) * pageCount)
  // return model.modelStore.getModels
})

const isOpenView = ref(false);
const isOpenStore = ref(false);
const isOpenUpdate = ref(false);

function modalShowView(row:any = null){
  isOpenView.value = true;
  model.modelStore.setOneModel(row);
}

function modalShowViewClose(){
  isOpenView.value = false;
}

function modalShowStore(){
  isOpenStore.value = !isOpenStore.value;
  // model.modelStore.setOneModel(row);
}

function modalShowUpdate(row:any){
  isOpenUpdate.value = !isOpenUpdate.value;
  model.modelStore.setOneModel(row);
}

function modalStore(data: Object){
  isOpenStore.value = !isOpenStore.value;
  // model.modelStore.setOneModel(row);
  model.modelStore.createModel(data)
}

function modalUpdate(data: any){
  isOpenUpdate.value = !isOpenUpdate.value;
  // model.modelStore.setOneModel(row);
  model.modelStore.updateModel(data.id, data)
}

function modalDelete(row: any){
  model.modelStore.deleteModel(row.id)
}


</script>

<template>
  <!-- <UiLoader/> -->
  <UiLoader v-if="loadingStore.isLoading" />
  <!-- <p v-if="loadingStore.isLoading">Yuklanmoqda</p> -->
  <template v-else>
      <div>
        <CrudViewModel :is-open="isOpenView" :toggle-show-close="modalShowViewClose" :model="model.modelCrud.getFormFields(model.modelStore.oneModel)" :model-type="model.modelType"/>
        <CrudStoreModel :is-open="isOpenStore" :toggle-show="modalShowStore" :model="model.modelCrud.getFormFields()" :create-model="modalStore" :model-type="model.modelType"/>
        <CrudUpdateModel :is-open="isOpenUpdate" :toggle-show="modalShowUpdate" :model="model.modelCrud.getFormFields(model.modelStore.oneModel)" :update-model="modalUpdate" :model-type="model.modelType"/>


        <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 items-center justify-between">
          <!-- Qator boshidagi UInput -->
          <div class="flex items-center">
            <UInput v-model="search" placeholder="Qidirish..." />
          </div>

          <!-- Qator oxiridagi UButton -->
          <div class="flex items-center">
            <UButton label="Create" color="primary" variant="soft" class="mx-5" @click="modalShowStore()" />
          </div>
        </div>



        <UTable v-model="selected" :rows="model.modelStore.getModels" :columns="model.modelCrud.getColumns()" @select="select">
          <template #name-data="{ row }">
            <span :class="[selected.find((person:any) => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="actions(row)">
              <UButton color="gray" variant="solid" label="Amallar"/>
            </UDropdown>
          </template>
        </UTable>

        <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="page" :page-count="pageCount" :total="model.modelStore?.getMeta.total" />
        </div>
      </div>
  </template>
</template>

