import { defineStore } from "pinia";
import CategoryService from "~/services/Category";
import SubjectService from '~/services/Subject';


export const useHomeStore = defineStore("home", {
    state: () => ({
        categories: [],
        subjects: [],
    }),
    getters: {
        getCategories: state => state.categories,
        getSubjects: state => state.subjects
    },
    actions: {
        async getAllCategories(search: String|null = null, perPage: Number|null = null){
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
        async getAllSubjects(search: String|null = null, perPage: Number|null = null){
          try {
              await SubjectService.index({
                search: search,
                perPage: perPage
              })
              .then((res: any) => {

                  this.subjects = res.result.data;
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
      }
    },
});