import Vue from 'vue'
import Router from 'vue-router'
import sample from './sample'
import MedicalProgram from './medical'
import Auth from './auth'
import User from './user'
import UserInfo from './loginUserInfo'
import Screening from './screening'
import Medicine from './medicine'
import Hospital from './hospital'

Vue.use(Router)

const routes = [
  ...sample,
  ...MedicalProgram,
  ...Auth,
  ...User,
  ...Screening,
  ...UserInfo,
  ...Medicine,
  ...Hospital
]

export default new Router({
  routes: routes,
  mode: 'history',
  base: process.env.BASE_URL
})
