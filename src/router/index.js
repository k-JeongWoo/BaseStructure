import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login'

Vue.use(Router)

const routes = [
  ...Login
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
//  base: process.env.BASE_URL
})
