// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import AMGauge from 'amcharts3/amcharts/gauge'
import AmPie from 'amcharts3/amcharts/pie'
import router from './router'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import ko from './locales/ko.json'
import VueMaterial from 'vue-material'
import vueMoment from 'vue-moment'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueI18n)
Vue.use(AmCharts)
Vue.use(AmSerial)
Vue.use(AmPie)
Vue.use(AMGauge)
Vue.use(vueMoment)
Vue.use(VueMaterial)
Vue.use(VueCookie)
Vue.use(vueMoment)

// 다국어 처리
const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: { en, ko }
})

router.beforeEach((to, from, next) => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.NODE_ENV === 'development')
  // 사용자별 언어 설정 분기할 부분
  // i18n.locale = 'en'
  if (process.env.NODE_ENV === 'development') {
    if (to.path === '/agreement' || to.path === '/auth/niceBlank' || to.path === '/auth/signUpForm') {
      axios.get(`/api/v1/api/auth/tokenUserInfo`, {},
        {withCredentials: true}
      ).then(function (response) {
        // console.log(response)
        if (response.data.resultCode === 'error') {
          next('/mainhome')
        } else {
          next()
        }
      })
    } else {
      axios.get('/api/v1/api/user/userInfo')
        .then(function (response) {
          console.log(response.data.resultCode)
          sessionStorage.setItem('result_code', response.data.resultCode)
          console.log(to.path)
          if (response.data.resultCode !== 'error') {
            alert(1)
            // 로그인 한 상태
            console.log('Add Session Storage ! - User Name = ' + response.data.data.name)
            sessionStorage.setItem('usr_name', response.data.data.name)
            sessionStorage.setItem('usr_mail', response.data.data.mail)
            sessionStorage.setItem('usr_tel', response.data.data.tel)
            sessionStorage.setItem('usr_age', response.data.data.age)
            sessionStorage.setItem('result_code', response.data.resultCode)
            next()
          } else if (response.data.resultCode === 'error' && to.path === '/mainhome') {
            alert(2)
            // 로그인 안한상태
            sessionStorage.setItem('usr_name', '게스트')
            alert('로그인 후 이용 가능합니다.')
            next({
              path: '/login'
            })
          } else {
            alert(4)
            sessionStorage.setItem('usr_name', '게스트')
            sessionStorage.setItem('result_code', response.data.resultCode)
            next()
          }
        })
        .catch(function (error) {
          console.log(error)
          // next('/')
          // 서비스 블랭크 페이지로
        })
    }
  } else {
    console.log('1')
    // dev
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
