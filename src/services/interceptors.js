import store from '../store'
import axios from 'axios'
import router from '../router'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + store.state.auth.token
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error) {
        if (error.response.status == 401) {
            router.push({ path: '/logout' })
        } else {
            store.commit('snackbar/showSnackbar')
            store.state.snackbar.message = error
        }
    }
    return Promise.reject(error);
});

export default axios