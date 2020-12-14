import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/plugins/firebase'
import AuthHandler from '@/handler/auth'

Vue.config.productionTip = false

AuthHandler.instance()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
