import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import config from './config/config'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
Vue.use(config)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
