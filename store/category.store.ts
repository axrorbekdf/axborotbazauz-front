import { defineStore } from "pinia";
import Category from '~/model/category';
import CategoryService from "~/services/Category";


export const useCategoryStore = defineStore("category", {
    state: () => ({
        category: null as Category | null,
        categories: [] as Category[],
    }),
    getters: {
        oneModel: state => state.category,
        getModels: state => state.categories
    },
    actions: {
        setOneModel(model: Category){
          this.category = model;
        },

        async getAllModel(){
            try {
                await CategoryService.forOptions()
                .then((res: any) => {
                    
                    const data: Category[] = (res.result.data);
                    const newData: Category[] = data.map((item) => {
                      return Category.fromApiData(item);
                    });

                    this.categories = newData;
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createModel(category: Category){
          try {
          
              await CategoryService.store(category)
              .then((res: any) => {

                this.getAllModel();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateModel(id:number, category: Category){
          try {
          
              await CategoryService.update(id, category)
              .then((res: any) => {

                this.getAllModel();
          
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

                this.getAllModel();
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});