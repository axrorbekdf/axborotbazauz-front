
<template>
    <div class="fixed top-0 left-0 bottom-0 h-screen dark:bg-gray-900 bg-gray-200 w-72 border-r dark:border-r-gray-800 border-r-gray-300 pt-4">
        
        <br>
        <br>
        <br>
        <div class="flex flex-col space-y-6">
            <NuxtLink to="/admin/dashboard" class="flex items-center space-x-1 pl-2 ">
                <!-- <NuxtImg src="/logo.svg"  width="50" height="50"/> -->
                <span class="text-2xl font-medium pl-4">Bo'limlar</span> 
            </NuxtLink>


            <div class="pl-4">
                <UiSidebarItem />
            </div>
        </div>
    </div>
</template>