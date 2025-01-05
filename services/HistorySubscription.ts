import { useApiFetch } from "./FetchService";


  const HistorySubscriptionService = {

    index(params: object){
        return useApiFetch()("history/subscription/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`history/subscription/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`history/subscription/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("history/subscription/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`history/subscription/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`history/subscription/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default HistorySubscriptionService;