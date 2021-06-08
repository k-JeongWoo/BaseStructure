import Index from '@/components/Index'
import Mainhome from '@/components/Mainhome'
import Agreement from '@/components/Agreement'
import axios from 'axios'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mainhome',
    name: 'Mainhome',
    component: Mainhome,
    beforeEnter: (to, from, next) => {
      let var1 = '1'
      let var2 = 'a'
      let usrName = ''
      if (var1 === var2) {
        axios.get('/api/usr')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      usrName = '이철규'
      console.log(' 비동기통신 _ 유저정보 조회 필요 set_storage ')
      sessionStorage.setItem('usr_name', usrName)
      next()
    }
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement
  }
]
