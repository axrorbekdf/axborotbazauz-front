import { defineStore } from "pinia";
import UserService from "~/services/User";


export const useUserStore = defineStore("user", {
    state: () => ({
        model: {},
        models: [],
    }),
    getters: {
        oneModel: state => state.model,
        getModels: state => state.models
    },
    actions: {
        setOneModel(model:any){
          this.model = model;
        },

        async getAllModel(search: String|null, perPage: Number|null){
            try {
                await UserService.index({
                  search: search,
                  perPage: perPage
                })
                .then((res: any) => {

                    this.models = res.result.data;
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createModel(model: any){
          try {
          
              await UserService.store(model)
              .then((res: any) => {

                this.getAllModel(null, null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateModel(id:number, model: any){
          try {
          
              await UserService.update(id, model)
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
          
              await UserService.delete(id)
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