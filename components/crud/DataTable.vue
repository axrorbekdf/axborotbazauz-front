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

onMounted(async () => {
  await model.modelStore.getAllModel();
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

const isOpenView = ref(false);
const isOpenCreate = ref(false);
const isOpenUpdate = ref(false);

function modalShowView(row:any){
  isOpenView.value = !isOpenView.value;
  model.modelStore.setOneModel(row);
}


</script>

<template>
  <!-- <UiLoader/> -->
  <!-- <UiLoader v-if="loadingStore.isLoading" /> -->
  <p v-if="loadingStore.isLoading">Yuklanmoqda</p>
  <template v-else>
      <div>
        <CrudModal :is-open="isOpenView" :toggle-show="modalShowView" :model="model.modelStore.oneModel"/>

        <!-- <UButton label="View" color="white" variant="solid" @click="modalShowView()"/> -->
        <UTable v-model="selected" :rows="modelStore.getModels" :columns="model.modelCrud.getColumns()" @select="select">
          <template #name-data="{ row }">
            <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="actions(row)">
              <UButton color="gray" variant="solid" label="Amallar"/>
            </UDropdown>
          </template>
        </UTable>
      </div>
  </template>
</template>

