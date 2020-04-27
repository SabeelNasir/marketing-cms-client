import { putRequest, postRequest, getRequest, deleteRequest } from '@/services/requests'

export default {
    install(Vue) {
        Vue.prototype.$postRequest = postRequest
        Vue.prototype.$putRequest = putRequest
    }
}