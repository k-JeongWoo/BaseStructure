// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AmCharts from 'amcharts3/amcharts/amcharts'
import AmSerial from 'amcharts3/amcharts/serial'
import AMGauge from 'amcharts3/amcharts/gauge'
import AmPie from 'amcharts3/amcharts/pie'
import router from './router'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import ko from './locales/ko.json'
import {fetchLoginUserInfo} from './api'

Vue.use(VueI18n)
Vue.use(AmCharts)
Vue.use(AmSerial)
Vue.use(AmPie)
Vue.use(AMGauge)

// 다국어 처리
const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: { en, ko }
})

router.beforeEach((to, from, next) => {
  // 사용자별 언어 설정 분기할 부분
  // i18n.locale = 'en'
  if (to.name === 'SamplePage') {
    next()
  } else {
    fetchLoginUserInfo().then(response => {
      if (response.data.resultCode !== 'error') {
        if ((to.name === 'SignUpForm' && from.name === 'mainHome')) {
          // 회원가입후 back 방지
          window.history.go(1)
        } else {
          // 로그인 한 상태
          sessionStorage.setItem('usr_name', response.data.data.name)
          sessionStorage.setItem('usr_mail', response.data.data.mail)
          sessionStorage.setItem('usr_tel', response.data.data.tel)
          sessionStorage.setItem('usr_age', response.data.data.age)
          sessionStorage.setItem('result_code', response.data.resultCode)
          next()
        }
      } else if (response.data.resultCode === 'error') {
        // 로그인 안한상태
        sessionStorage.setItem('usr_name', '게스트')
        sessionStorage.setItem('result_code', response.data.resultCode)
        if ((to.name === 'UserDetail' && from.name === 'mainHome') ||
            (to.name === 'UserDetail' && from.name === 'DoctorMain')) {
          // 회원탈퇴후 back 방지
          window.history.go(1)
        } else {
          next()
        }
        // sessionStorage.setItem('usr_name', '게스트')
        // alert('로그인 후 이용 가능합니다.')
        // console.log(to.path)
      } else {
        sessionStorage.setItem('usr_name', '게스트')
        sessionStorage.setItem('result_code', response.data.resultCode)
        next()
      }
    }).catch(function (error) {
      console.log(error)
      // next('/')
      // 서비스 블랭크 페이지로
    })
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
