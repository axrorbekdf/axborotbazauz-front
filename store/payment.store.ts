import { defineStore } from "pinia";
import PaymentService from "~/services/Payment";


export const usePaymentStore = defineStore("payment", {
    state: () => ({
        model: {},
        models: [],
        links: {},
        meta: {}
    }),
    getters: {
        oneModel: state => state.model,
        getModels: state => state.models,
        getLinks: state => state.links,
        getMeta: state => state.meta,
    },
    actions: {
        setOneModel(model:any){
          this.model = model;
        },

        async getAllModel(search: String|null, page: Number|null, perPage: Number|null){
            try {
                await PaymentService.index({
                  search: search,
                  page: page,
                  perPage: perPage
                })
                .then((res: any) => {

                    this.models = res.result.data;
                    this.links = res.result.links;
                    this.meta = res.result.meta;
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },

        async createModel(model: any){
          try {
          
              await PaymentService.store(model)
              .then((res: any) => {

                this.getAllModel(null, null,null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async updateModel(id:number, model: any){
          try {
          
              await PaymentService.update(id, model)
              .then((res: any) => {

                this.getAllModel(null, null,null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async deleteModel(id:number){
          try {
          
              await PaymentService.delete(id)
              .then((res: any) => {

                this.getAllModel(null, null,null);
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});