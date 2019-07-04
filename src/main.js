import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'
import {
  Input,
  Page,
  Select,
  Option,
  Table,
  Button,
  Timeline,
  TimelineItem,
  Divider
} from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import KeepRatio from 'vue-keep-ratio'

Vue.use(KeepRatio)
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'

axios.defaults.baseURL = 'http://127.0.0.1:5000'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded'

Vue.component('Input', Input)
Vue.component('Page', Page)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('Table', Table)
Vue.component('Button', Button)
Vue.component('Timeline', Timeline)
Vue.component('TimelineItem', TimelineItem)
Vue.component('Divider', Divider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
