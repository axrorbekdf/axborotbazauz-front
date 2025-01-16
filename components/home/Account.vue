<script setup>
const authStore = useAuthStore();

const activeTab = ref(1);

const tabs = [
  { id: 1, label: 'Sozlamalar'},
  { id: 2, label: 'Obunalar tarixi'},
];
</script>
<template>
    <section class="container max-w-screen-xl mx-auto py-12 px-4">
        <h2 class="text-2xl font-bold text-purple-700 mb-6">{{ authStore.currentUser.name }}</h2>
        <div class="space-y-4">
            <div class="flex h-auto">
                <!-- Tabs -->
                <div class="flex flex-col w-1/5">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        @click="activeTab = tab.id"
                        class="py-3 px-4 focus:outline-none text-start text-lg rounded-sm"
                        :class="{ 'bg-lime-400': activeTab === tab.id }"
                    >
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="flex-grow bg-white px-6 items-start">
                    <h1 class="text-2xl font-bold">{{ tabs.find(tab => tab.id === activeTab).label }}</h1>
                    <div v-if="activeTab == 1">
                        <h1>Test</h1>
                    </div>

                    <div v-if="activeTab == 2">
                        <div class="flex items-center justify-between border p-4 bg-white" v-for="obuna in authStore.currentUser.obuna">
                            <!-- Left Section -->
                            <div>
                                <p class="text-gray-500 text-sm">{{ obuna.date}} - {{ obuna.payment }}</p>
                                <p class="text-2xl font-bold my-2">{{ obuna.subscription.name}} ({{ obuna.subscription.period}}-kunlik)</p>
                                <p class="text-gray-400 text-sm">{{obuna.start_date}} dan - {{ obuna.end_date}} gacha</p>
                            </div>

                            <!-- Center Section -->
                            <!-- <div class="flex items-center">
                                <span class="ml-2 font-bold text-lg">{{ obuna.payment }}</span>
                            </div> -->

                            <!-- Right Section -->
                            <div class="text-right">
                                <p class="text-2xl font-bold">{{ obuna.subscription.price}}</p>
                                <p class="text-gray-500 text-sm">so'm</p>
                            </div>
                        </div>
                    </div>

                    <div v-if="activeTab == 3">
                        <h1>3</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>