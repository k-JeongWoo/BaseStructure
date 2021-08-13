import HospitalDetail from '@/components/hospital/HospitalDetail'
import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer.vue'
import HospitalVisit from '@/components/hospital/HospitalVisit'
import HospitalList from '@/components/hospital/HospitalList'
import HospitalRegist from '@/components/hospital/HospitalRegist'
import {headerBtnType} from '../store/index'

export default [
  {
    path: '/hospital/hospitalList',
    name: 'HospitalList',
    components: {
      header: Header,
      default: HospitalList
      // footer: Footer
    },
    meta: headerBtnType.page_main,
    beforeEnter (to, from, next) {
      // headerBtnType.page_main.titleTxt = from.$router.params.dynamicTitle
      next()
    },
    props: true
  },
  {
    path: '/hospital/hospitalDetail',
    name: 'HospitalDetail',
    components: {
      header: Header,
      default: HospitalDetail
      // footer: Footer
    },
    meta: headerBtnType.page_hospital_introduce,
    beforeEnter (to, from, next) {
      // headerBtnType.page_main.titleTxt = from.$router.params.dynamicTitle
      next()
    },
    props: true
  },
  {
    path: '/hospital/hospitalVisit',
    name: 'HospitalVisit',
    components: {
      header: Header,
      default: HospitalVisit
      // footer: Footer
    },
    props: true
  },
  {
    path: '/hospital/hospitalRegist',
    name: 'HospitalRegist',
    components: {
      header: Header,
      default: HospitalRegist
    },
    meta: headerBtnType.page_hospital_introduce,
    props: true
  }
]
