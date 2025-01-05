import { useApiFetch } from "./FetchService";


  const UserService = {

    index(params: object){
        return useApiFetch()("user/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`user/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`user/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("user/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`user/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`user/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default UserService;