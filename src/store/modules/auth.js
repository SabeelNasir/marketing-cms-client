/* eslint-disable */
const state = {
    user: {
        email: null,
        userProfile: null
    },
    token: localStorage.getItem('token') || null,
}
const mutations = {
    setUser(state, data) {
        localStorage.setItem('userKey', JSON.stringify(data.user))
        localStorage.setItem('token', data.token)
        state.user = data.user
        state.token = data.token
    },
    logout(state) {
        console.log('removing localstorage')
        localStorage.removeItem('userKey')
        localStorage.removeItem('token')
        state.user = {
            email: null,
            role: null
        }
        state.token = null
    }
}
const getters = {
    getUser: () => {
        const data = JSON.parse(localStorage.getItem('userKey')) || state.user
        return data
    },
    isLoggedIn: () => {
        return state.token != null
    }
}
const actions = {
    logout(context) {
        if (context.state.isLoggedIn) {
            return new Promise((resolve, reject) => {
                context.commit('logout')
            })
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}