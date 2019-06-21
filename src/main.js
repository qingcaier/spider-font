import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'
import { Input, Page, Select, Option, Table, Button } from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.component('Input', Input)
Vue.component('Page', Page)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Table', Table)
Vue.component('Button', Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
