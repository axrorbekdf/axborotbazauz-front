import { defineStore } from "pinia";
// import Category from '~/model/category';
import CategoryService from "~/services/Category";


export const useCategoryStore = defineStore("category", {
    state: () => ({
        category: null,
        categories: [],
    }),
    getters: {
        oneModel: state => state.category,
        getModels: state => state.categories
    },
    actions: {
        setOneModel(model:any){
          this.category = model;
        },

        async getAllModel(search: String|null, perPage: Number|null){
            try {
                await CategoryService.index({
                  search: search,
                  perPage: perPage
                })
                .then((res: any) => {

                    this.categories = res.result.data;
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createModel(category: any){
          try {
          
              await CategoryService.store(category)
              .then((res: any) => {

                this.getAllModel(null, null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateModel(id:number, category: any){
          try {
          
              await CategoryService.update(id, category)
              .then((res: any) => {

                this.getAllModel(null, null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteModel(id:number){
          try {
          
              await CategoryService.delete(id)
              .then((res: any) => {

                this.getAllModel(null, null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});