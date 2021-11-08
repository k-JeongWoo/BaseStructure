import EnterCodePage from '@/components/auth/EnterCodePage'
import Login from '@/components/Index'
import Mainhome from '@/components/Mainhome'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header'
import NotFound from '@/components/common/NotFound'
import LeftMenu from '@/components/layout/LeftMenu'
import DoctorMain from '@/components/DoctorMain'
import ChartSample from '@/components/screening/chartsample'
import {headerBtnType} from '../store/index'

export default [
  {
    path: '/enterCodePage',
    name: 'EnterCodePage',
    components: {
      header: Header,
      default: EnterCodePage
    }
  },
  {
    path: '/login',
    name: 'Lognin',
    components: {
      header: Header,
      default: Login
    },
    meta: headerBtnType.page_common_close,
    beforeEnter: (to, from, next) => {
      headerBtnType.page_common_close.titleTxt = to.params.dynamicTitle
      headerBtnType.page_common_close.conClass = 'noBg login01'
      sessionStorage.clear()
      next()
    }
  },
  {
    path: '/',
    name: 'mainHome',
    components: {
      header: Header,
      leftMenu: LeftMenu,
      default: Mainhome,
      footer: Footer
    },
    meta: headerBtnType.page_main,
    props: true
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
    path: '/sample/SamplePage',
    name: 'SamplePage',
    components: {
      header: Header,
      default: ChartSample
    },
    meta: headerBtnType.page_common_back,
    props: true,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = '테스트 페이지'
      headerBtnType.page_common_back.conClass = 'noBg about'
      next()
    }
  }
]
