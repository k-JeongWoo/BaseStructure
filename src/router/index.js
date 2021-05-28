import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Mainhome from '@/components/Mainhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mainhome',
      name: 'Mainhome',
      component: Mainhome
    }
  ],
  mode: 'history'
})
