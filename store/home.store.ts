import { defineStore } from "pinia";
import HomeService from '~/services/Home';


export const useHomeStore = defineStore("home", {
    state: () => ({
        categories: [],
        subjects: [],
        materials: [],
    }),
    getters: {
        getCategories: state => state.categories,
        getSubjects: state => state.subjects,
        getMaterials: state => state.materials
    },
    actions: {
        async getAllCategories(search: String|null = null, perPage: Number|null = null){
            try {
                await HomeService.category({
                  search: search,
                  perPage: perPage
                })
                .then((res: any) => {

                    this.categories = res.result;
            
                }).catch((error) => {
                    
                  console.error('Failed to load posts:', error);
                });
            
              } catch (error) {
                  console.error('Failed to load posts:', error);
        
              }
        },
        async getAllSubjects(search: String|null = null, perPage: Number|null = null){
          try {
              await HomeService.subject({
                search: search,
                perPage: perPage
              })
              .then((res: any) => {

                  this.subjects = res.result;
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },
        async getAllRecentMaterials(
            search: String|null = null, 
            perPage: Number|null = null, 
            category: Number|null = null,
            subject: Number|null = null
          ){
          try {
              await HomeService.material({
                search: search,
                perPage: perPage,
                category: category,
                subject: subject,
              })
              .then((res: any) => {

                  this.materials = res.result;
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});