import { useApiFetch } from "./FetchService";


  const AuthService = {

    login(user: object){
        return useApiFetch()("v2/auth/login", {
            method: "POST",
            body: user
        })
    },

    register(user: object){
        return useApiFetch()("user/register", {
            method: "POST",
            body: user
        })
    },

    getUser(){
        return useApiFetch()("auth/me", {
            method: "GET"
        })
    },

    logout(){
        return useApiFetch()("auth/logout", {
            method: "POST"
        })
    }

}

export default AuthService;