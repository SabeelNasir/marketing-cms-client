import { putRequest, postRequest, getRequest, deleteRequest } from '@/services/requests'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import '../assets/icons/themify-icons.css'

export default {
    install(Vue) {
        Vue.prototype.$postRequest = postRequest
        Vue.prototype.$putRequest = putRequest
        Vue.component('ValidationProvider', ValidationProvider)
        Vue.component('ValidationObserver', ValidationObserver)
        Vue.use(VueFormWizard)
    }
}