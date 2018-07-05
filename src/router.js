import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Onboarding from './views/Onboarding.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
    }
  ]
})
