import { defineStore } from "pinia";
import HomeService from '~/services/Home';


export const useHomeStore = defineStore("home", {
    state: () => ({
        categories: [],
        subjects: [],
        materials: [],
        material: {} as any,
    }),
    getters: {
        getCategories: state => state.categories,
        getSubjects: state => state.subjects,
        getMaterials: state => state.materials,
        getMaterial: state => state.material
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
            category: String|null = null,
            subject: String|null = null
          ){
          try {
              await HomeService.material({
                search: search,
                perPage: perPage,
                categorySlug: category,
                subjectSlug: subject,
              })
              .then((res: any) => {

                  this.materials = res.result.data;
          
              }).catch((error) => {
                  
                console.error('Failed to load posts:', error);
              });
          
            } catch (error) {
                console.error('Failed to load posts:', error);
      
            }
        },

        async getOneMaterial(
          slug: String = ''
        ){
        try {
            await HomeService.oneMaterial(slug)
            .then((res: any) => {

                this.material = res.result;
        
            }).catch((error) => {
                
              console.error('Failed to load posts:', error);
            });
        
          } catch (error) {
              console.error('Failed to load posts:', error);
    
          }
        },

        async getDownloadMaterial(
          slug: String = ''
        ){
        try {
            await HomeService.downloadMaterial(slug)
            .then((res: any) => {

                this.material = res.result;
        
            }).catch((error) => {
                
              console.error('Failed to load posts:', error);
            });
        
          } catch (error) {
              console.error('Failed to load posts:', error);
    
          }
        }
    },
});