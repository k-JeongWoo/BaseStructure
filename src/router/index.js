import Vue from 'vue'
import Router from 'vue-router'
import sample from '@/router/sample'
import MedicalProgram from '@/router/medical'
import Auth from '@/router/auth'
import User from '@/router/user'
import UserInfo from '@/router/loginUserInfo'
import Screening from '@/router/screening'

Vue.use(Router)

const routes = [
  ...sample,
  ...MedicalProgram,
  ...Auth,
  ...User,
  ...Screening,
  ...UserInfo
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
