import Vue from 'vue'
import Router from 'vue-router'
import sample from '@/router/sample'
import MedicalProgram from '@/router/medical'
import Auth from '@/router/auth'
import User from '@/router/user'

Vue.use(Router)

const routes = [
  ...sample,
  ...MedicalProgram,
  ...Auth,
  ...User
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
