import { defineStore } from "pinia";
import CategoryService from "~/services/Category";
import SubjectService from '~/services/Subject';
import MaterialService from '~/services/Material';


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
        },
        async getAllRecentMaterials(
            search: String|null = null, 
            perPage: Number|null = null, 
            category: Number|null = null,
            subject: Number|null = null
          ){
          try {
              await MaterialService.index({
                search: search,
                perPage: perPage,
                category: category,
                subject: subject,
              })
              .then((res: any) => {

                  this.materials = res.result.data;
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        }
    },
});