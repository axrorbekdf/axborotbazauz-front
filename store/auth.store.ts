interface User {
    id: String,
    name: String,
    email: String,
    status: Boolean
}

const initialState: {user: User} = {
    user: {
        id: "",
        name: "",
        email: "",
        status: false,
    }
}


export const useAuthStore = defineStore("auth", {
    state: () => initialState,
    getters: {
        currentUser: state => state.user,
    },
    actions: {
        set(user: User){
            this.$patch({user})
        },
        clear(){
            this.$patch(initialState)
        }
    },
});