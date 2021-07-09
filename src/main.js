// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AmCharts from 'amcharts3'
import AmSerial from 'amcharts3/amcharts/serial'
import AmPie from 'amcharts3/amcharts/pie'
import router from './router'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import en from './locales/en.json'
import ko from './locales/ko.json'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Vuetify from 'vuetify'

Vue.use(VueI18n)
Vue.use(AmCharts)
Vue.use(AmSerial)
Vue.use(AmPie)
Vue.use(Vuetify)

// 다국어 처리
const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: { en, ko }
})

Vue.use(VueMaterial)

router.beforeEach((to, from, next) => {
  // 사용자별 언어 설정 분기할 부분
  // i18n.locale = 'en'
  let testFlag = true
  if (!testFlag) {
    if (to.path === '/agreement' || to.path === '/auth/niceBlank' || to.path === '/auth/signUpForm') {
      axios.get(`/api/v1/api/auth/tokenUserInfo`, {},
        {withCredentials: true}
      ).then(function (response) {
        // console.log(response)
        if (response.data.resultCode === 'error') {
          next('/')
        } else {
          next()
        }
      })
    } else {
      axios.get('/api/v1/api/user/userInfo')
        .then(function (response) {
          console.log(response)
          if (to.path === '/' && response.data.resultCode !== 'error') {
            next('Mainhome')
          } else if (to.path === '/user/userdetail' && response.data.resultCode === 'error') {
            alert('로그인 후 이용 가능합니다.')
            next({
              path: '/',
              query: {
                redirecturi: encodeURIComponent(to.fullPath)
              },
              replace: true
            })
          } else {
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
    // dev
    if (to.path === '/user/userdetail') {
      console.log(to)
      alert('로그인 후 이용 가능합니다.')
      next({
        path: '/',
        query: {
          redirecturi: encodeURIComponent(to.fullPath)
        },
        replace: true
      })
    } else {
      next()
    }
  }
})

Vue.use(VueCookie)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})

export default Vuetify
