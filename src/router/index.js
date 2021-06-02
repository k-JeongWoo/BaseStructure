import Vue from 'vue'
import Router from 'vue-router'
import sample from '@/router/sample'

Vue.use(Router)

const routes = [
  ...sample
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
