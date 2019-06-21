import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import About from './views/About.vue'
import Help from './views/Help.vue'
import Index from './views/Index.vue'
import test from './views/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/test', name: 'test', component: test },
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/aboutus',
          name: 'aboutus',
          component: About
        },
        {
          path: '/help',
          name: 'help',
          component: Help
        },
        {
          path: '/home/douyu',
          name: 'douyu',
          component: () => import('./views/Douyu.vue')
        },
        {
          path: '/home/huya',
          name: 'huya',
          component: () => import('./views/Huya.vue')
        },
        {
          path: '/home/qie',
          name: 'qie',
          component: () => import('./views/Qie.vue')
        },
        {
          path: '/home/chushou',
          name: 'chushou',
          component: () => import('./views/Chushou.vue')
        },
        {
          path: '/home/yy',
          name: 'yy',
          component: () => import('./views/Yy.vue')
        }
      ]
    }
  ]
})
