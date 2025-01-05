import { useApiFetch } from "./FetchService";


  const SubscriptionService = {

    index(params: object){
        return useApiFetch()("subscription/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`subscription/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`subscription/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("subscription/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`subscription/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`subscription/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default SubscriptionService;