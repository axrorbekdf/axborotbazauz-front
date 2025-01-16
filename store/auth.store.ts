import { defineStore } from "pinia";
import { getItem, removeItem, setItem } from "~/helpers/persistaneStorage";
import AuthService from "~/services/Auth";

interface User {
    id: String,
    name: String,
    phone: String,
    password: String,
    is_active: Boolean,
    role: String,
    token: String,
    obuna: Array<any>
}

const initialState: {user: User} = {
    user: {
        id: "",
        name: "",
        phone: "",
        password: "",
        is_active: false,
        role: "",
        token: "",
        obuna: []
    }
}


export const useAuthStore = defineStore("auth", {
    state: () => initialState,
    getters: {
        currentUser: state => state.user,
    },
    actions: {
        set(user: User){
            setItem('token', user.token)
        
            this.$patch({user})
        },
        update(user: User){
            const token = getItem('token')
            user.token = token
            this.$patch({user})
        },
        clear(){
            removeItem('token')
            
            this.$patch(initialState)
        }
    },
});