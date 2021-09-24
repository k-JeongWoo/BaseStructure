import Vue from 'vue'
import Router from 'vue-router'
import sample from './sample'
import Auth from './auth'
import User from './user'
import UserInfo from './loginUserInfo'
import Screening from './screening'
import Medicine from './medicine'
import Hospital from './hospital'
import AppInformation from './AppInformation'
import Notice from './notice'

Vue.use(Router)

const routes = [
  ...sample,
  ...Auth,
  ...User,
  ...Screening,
  ...UserInfo,
  ...Medicine,
  ...Hospital,
  ...AppInformation,
  ...Notice
]

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL
})
