import { defineStore } from 'pinia';

export const useLoadingStore = defineStore("loading", {
    
    state: () => ({
        isLoading: true,
        isSearch: false,
    }),
    actions: {
        set(isLoading: boolean){
            this.$patch({isLoading})
        },
        setSearch(isSearch: boolean){
            this.$patch({isSearch})
        },
    },
});