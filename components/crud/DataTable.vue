<script setup lang="ts">

const props = defineProps({
  data: {
    type: Array,
    default: [],
    required: true
  }
});

const columns = [{
  key: 'select',
  label: 'Select'
},{
  key: 'id',
  label: 'ID'
},{
  key: 'name',
  label: 'Ism'
}, {
  key: 'slug',
  label: 'slug'
}, {
  key: 'count',
  label: 'count'
}, {
  key: 'responsible_worker',
  label: 'responsible_worker'
}, {
  key: 'created_at',
  label: 'created_at'
},{
  key: 'updated_at',
  label: 'updated_at'
},{
  key: 'actions'
}];

// const people = [{
//   id: 1,
//   name: 'Lindsay Walton',
//   title: 'Front-end Developer',
//   email: 'lindsay.walton@example.com',
//   role: 'Member'
// }, {
//   id: 2,
//   name: 'Courtney Henry',
//   title: 'Designer',
//   email: 'courtney.henry@example.com',
//   role: 'Admin'
// }, {
//   id: 3,
//   name: 'Tom Cook',
//   title: 'Director of Product',
//   email: 'tom.cook@example.com',
//   role: 'Member'
// }, {
//   id: 4,
//   name: 'Whitney Francis',
//   title: 'Copywriter',
//   email: 'whitney.francis@example.com',
//   role: 'Admin'
// }, {
//   id: 5,
//   name: 'Leonard Krasner',
//   title: 'Senior Designer',
//   email: 'leonard.krasner@example.com',
//   role: 'Owner'
// }, {
//   id: 6,
//   name: 'Floyd Miles',
//   title: 'Principal Designer',
//   email: 'floyd.miles@example.com',
//   role: 'Member'
// }];

const items = (row:any) => {
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
      click: () => console.log('Show', row)
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => console.log('Delet', row)
    }]
  ];
};

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

const selected = ref([]);

const show = (row:any) => {

};


</script>

<template>
  <!-- v-model="selected" -->
  <UTable v-model="selected" :rows="props.data" :columns="columns" @select="select">
    <template #name-data="{ row }">
      <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
    </template>

    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="solid" label="Amallar"/>
      </UDropdown>
    </template>
  </UTable>
</template>

