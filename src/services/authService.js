import router from '../router'
import store from '../store'
const logout = () => {
    store.commit('logout')
    router.push({ name: 'login' })
}
const getToken = () => {
    return localStorage.getItem('token') ?? ''
}
const setToken = (token) => {
    localStorage.setItem('token', token)
}

export default {
    logout, getToken, setToken
}