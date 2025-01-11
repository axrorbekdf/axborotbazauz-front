import { useApiFetch } from "./FetchService";


  const MaterialService = {

    index(params: object){
        return useApiFetch()("material/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`material/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`material/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("material/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`material/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`material/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default MaterialService;