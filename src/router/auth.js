import Header from '@/components/layout/Header'
import Agreement from '@/components/auth/Agreement'
import NiceBlank from '@/components/auth/Niceblank'
import SignUpForm from '@/components/auth/SignUpForm'
import {headerBtnType} from '../store'

export default [
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement,
    props: true
  },
  {
    path: '/auth/niceBlank',
    name: 'NiceBlank',
    component: NiceBlank,
    props: true
  },
  {
    path: '/auth/signUpForm',
    name: 'SignUpForm',
    components: {
      header: Header,
      default: SignUpForm
    },
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = '회원 정보 입력'
      next()
    }
  }
]
