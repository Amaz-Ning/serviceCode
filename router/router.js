import Vue from 'vue'
import VueRouter from 'vue-router'
import Components from '../src/pages'
Vue.use(VueRouter)
const route = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Components.welcome
    },
    {
      path: '/index',
      component: Components.home,
      children: [
        {
          path: '',
          component: Components.entry
        },
        {
          path: '/code',
          component: Components.code
        },
        {
          path: '/article',
          component: Components.article
        },
        {
          path: '/picture',
          component: Components.picture
        },
        {
          path: '/other',
          component: Components.other
        }
      ]
    }
  ]
})

export default route
