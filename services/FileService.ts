import { useApiFetch } from "./FetchService";


  const FileService = {

    index(params: object){
        return useApiFetch()("file/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`file/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`file/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("file/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`file/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`file/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default FileService;