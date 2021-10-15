import UserDetail from '@/components/user/UserDetail'
import Header from '@/components/layout/Header'
import {headerBtnType} from '../store'

export default [
  {
    path: '/user/userdetail',
    name: 'UserDetail',
    components: {
      header: Header,
      default: UserDetail
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
