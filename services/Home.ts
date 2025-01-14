import { useApiFetch } from "./FetchService";


  const HomeService = {

    category(params: object){
        return useApiFetch()("v1/category", {
            method: "GET",
            params: (params)
        })
    },

    subject(params: object){
        return useApiFetch()("v1/subject", {
            method: "GET",
            params: (params)
        })
    },

    material(params: object){
        return useApiFetch()("v1/material", {
            method: "GET",
            params: (params)
        })
    },
}

export default HomeService;