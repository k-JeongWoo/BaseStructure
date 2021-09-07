import HospitalDetail from '@/components/hospital/HospitalDetail'
import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer.vue'
import HospitalExpectedPlan from '@/components/hospital/HospitalExpectedPlan'
import HospitalList from '@/components/hospital/HospitalList'
import HospitalRegist from '@/components/hospital/HospitalRegist'
import RecentlyVisit from '@/components/hospital/RecentlyVisit'
import InquireList from '@/components/hospital/InquireList'
import HealthStatus from '@/components/hospital/HealthStatus'
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
    meta: headerBtnType.page_hospital_List,
    beforeEnter (to, from, next) {
      headerBtnType.page_hospital_List.titleTxt = to.query.dynamicTitle
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
      headerBtnType.page_hospital_introduce.titleTxt = to.query.dynamicTitle
      next()
    },
    props: true
  },
  {
    path: '/hospital/hospitalExpectedPlan',
    name: 'HospitalExpectedPlan',
    components: {
      header: Header,
      default: HospitalExpectedPlan
      // footer: Footer
    },
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
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
    meta: headerBtnType.page_hospital_regist,
    props: true
  },
  {
    path: '/hospital/recentlyVisit',
    name: 'RecentlyVisit',
    components: {
      header: Header,
      default: RecentlyVisit
    },
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
    },
    props: true
  },
  {
    path: '/hospital/inquireList',
    name: 'InquireList',
    components: {
      header: Header,
      default: InquireList
    },
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
    },
    props: true
  },
  {
    path: '/hospital/healthStatus',
    name: 'HealthStatus',
    components: {
      header: Header,
      default: HealthStatus
    },
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
    },
    props: true
  }
]
