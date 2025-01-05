import { useApiFetch } from "./FetchService";


  const PaymentService = {

    index(params: object){
        return useApiFetch()("payment/index", {
            method: "GET",
            params: (params)
        })
    },

    forOptions(params: Object){
        return useApiFetch()(`payment/for/options`, {
            method: "GET",
            params: (params)
        })
    },

    view(id: any){
        return useApiFetch()(`payment/view/${id}`, {
            method: "GET"
        })
    },

    store(catgory: object){
        return useApiFetch()("payment/store", {
            method: "POST",
            body: catgory
        })
    },

    update(id: any, catgory: object){
        return useApiFetch()(`payment/update/${id}`, {
            method: "PUT",
            body: catgory
        })
    },

    delete(id: any){
        return useApiFetch()(`payment/delete/${id}`, {
            method: "DELETE"
        })
    },

}

export default PaymentService;