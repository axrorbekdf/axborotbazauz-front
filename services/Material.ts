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

    store(material: object){
        return useApiFetch()("material/store", {
            method: "POST",
            body: material
        })
    },

    fileUploaded(material: object){
        return useApiFetch()(`material/uploaded`, {
            method: "POST",
            body: material,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    },

    update(id: any, material: object){
        return useApiFetch()(`material/update/${id}`, {
            method: "PUT",
            body: material
        })
    },

    delete(id: any){
        return useApiFetch()(`material/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default MaterialService;