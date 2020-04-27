import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import config from './config/config'
import BootstrapVuePlugins from './plugins/bootstrap-vue-plugins'
import ElementUiPlugins from './plugins/element-ui-plugins'
import globalFunctions from './utils/globalFunctions'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
Vue.use(config)
Vue.use(BootstrapVuePlugins)
Vue.use(ElementUiPlugins)
Vue.use(globalFunctions)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
