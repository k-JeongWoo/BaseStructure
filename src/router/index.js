import Vue from 'vue'
import Router from 'vue-router'
import sample from '@/router/sample'
import MedicalProgram from '@/router/medical'

Vue.use(Router)

const routes = [
  ...sample,
  ...MedicalProgram
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
