import Login from '@/components/Index'
import Mainhome from '@/components/Mainhome'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header'
import NotFound from '@/components/common/NotFound'
import LeftMenu from '@/components/layout/LeftMenu'
import DoctorMain from '@/components/DoctorMain'
import {headerBtnType} from '../store/index'
import axios from 'axios'

export default [
  {
    path: '/login',
    name: 'Lognin',
    component: Login,
    meta: {
      conClass: 'noBg login01' // ex) 'noBg inquery_info_01',
    },
    beforeEnter: (to, from, next) => {
      sessionStorage.clear()
      next()
    }
  },
  {
    path: '/doctorMain',
    name: 'DoctorMain',
    components: {
      header: Header,
      leftMenu: LeftMenu,
      default: DoctorMain,
      footer: Footer
    },
    meta: headerBtnType.page_doctorMain,
    props: true
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'Mainhome',
    components: {
      header: Header,
      leftMenu: LeftMenu,
      default: Mainhome,
      footer: Footer
    },
    meta: headerBtnType.page_main,
    beforeEnter: (to, from, next) => {
      if (from.name === 'SignUpForm' || from.path === '/') {
        if (process.env.NODE_ENV !== 'development') {
          // console.log(' 비동기통신 _ 유저정보 조회  ')
          axios.get('/api/v1/api/user/userInfo')
            .then(function (response) {
              if (response.data.resultCode === 'error') {
                // sessionStorage.clear()
                sessionStorage.setItem('usr_name', '게스트')
                sessionStorage.setItem('result_code', response.data.resultCode)
                next()
              } else {
                console.log('Add Session Storage ! - User Name = ' + response.data.data.name)
                sessionStorage.setItem('usr_name', response.data.data.name)
                sessionStorage.setItem('usr_mail', response.data.data.mail)
                sessionStorage.setItem('usr_tel', response.data.data.tel)
                sessionStorage.setItem('usr_age', response.data.data.age)
                sessionStorage.setItem('result_code', response.data.resultCode)
                next()
              }
            })
            .catch(function (error) {
              console.log(error)
              // next('/')
              // 서비스 블랭크 페이지로
            })
        } else {
          sessionStorage.setItem('result_code', 'error')
          sessionStorage.setItem('usr_name', '게스트')
          next()
        }
      } else {
        next()
      }
    },
    props: true
  },
  {
    path: '/mainhome',
    name: 'Mainhome2',
    components: {
      header: Header,
      leftMenu: LeftMenu,
      default: Mainhome,
      footer: Footer
    },
    meta: headerBtnType.page_main,

    beforeEnter: (to, from, next) => {
      if (from.name === 'SignUpForm' || from.path === '/') {
        if (process.env.NODE_ENV !== 'development') {
          // console.log(' 비동기통신 _ 유저정보 조회  ')
          axios.get('/api/v1/api/user/userInfo')
            .then(function (response) {
              if (response.data.resultCode === 'error') {
                // sessionStorage.clear()
                sessionStorage.setItem('usr_name', '게스트')
                sessionStorage.setItem('result_code', response.data.resultCode)
                next()
              } else {
                console.log('Add Session Storage ! - User Name = ' + response.data.data.name)
                sessionStorage.setItem('usr_name', response.data.data.name)
                sessionStorage.setItem('usr_mail', response.data.data.mail)
                sessionStorage.setItem('usr_tel', response.data.data.tel)
                sessionStorage.setItem('usr_age', response.data.data.age)
                sessionStorage.setItem('result_code', response.data.resultCode)
                next()
              }
            })
            .catch(function (error) {
              console.log(error)
              // next('/')
              // 서비스 블랭크 페이지로
            })
        } else {
          sessionStorage.setItem('result_code', 'error')
          sessionStorage.setItem('usr_name', '게스트')
          next()
        }
      } else {
        next()
      }
    },
    props: true
  }
]
