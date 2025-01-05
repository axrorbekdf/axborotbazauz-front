import { useApiFetch } from "./FetchService";


  const SubjectService = {

    index(params: object){
        return useApiFetch()("subject/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`subject/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`subject/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("subject/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`subject/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`subject/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default SubjectService;