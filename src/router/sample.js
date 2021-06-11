import Index from '@/components/Index'
import Mainhome from '@/components/Mainhome'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header'
import NotFound from '@/components/common/NotFound'
import axios from 'axios'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/mainhome',
    name: 'Mainhome',
    components: {
      header: Header,
      default: Mainhome,
      footer: Footer
    },
    beforeEnter: (to, from, next) => {
      console.log(from)
      if (from.name === 'SignUpForm' || from.name === 'Index') {
        let axiosTest = true
        if (axiosTest) {
          console.log(' 비동기통신 _ 유저정보 조회  ')
          axios.get('/api/v1/api/user/userInfo')
            .then(function (response) {
              console.log(response)
              if (response.data.resultCode === 'error') {
                sessionStorage.clear()
                next('/')
              } else {
                sessionStorage.setItem('usr_name', response.data.data.name)
                sessionStorage.setItem('usr_mail', response.data.data.mail)
                sessionStorage.setItem('usr_tel', response.data.data.tel)
                sessionStorage.setItem('usr_age', response.data.data.age)
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
      next()
    }
  }
]
