import { defineStore } from "pinia";
import MaterialService from "~/services/MaterialService";


export const useMaterialStore = defineStore("material", {
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
                await MaterialService.index({
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
          
              await MaterialService.store(model)
              .then((res: any) => {

                this.getAllModel(null, null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },


        async materialUploded(material: any){
          try {
          
              await MaterialService.fileUploaded(material)
              .then((res: any) => {

                this.setOneModel(res.result.data);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateModel(id:number, model: any){
          try {
          
              await MaterialService.update(id, model)
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
          
              await MaterialService.delete(id)
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