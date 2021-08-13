import AppInformation from '@/components/appInformation/AppInformation'
import AppPrivacyAgree from '@/components/appInformation/AppPrivacyAgree'
import AppPrivacyService from '@/components/appInformation/AppPrivacyService'
import AppMarketing from '@/components/appInformation/AppMarketing'
import Header from '@/components/layout/Header'
import {headerBtnType} from '../store/index'

export default [
  {
    path: '/about/appInformation',
    name: 'AppInformation',
    components: {
      header: Header,
      default: AppInformation
    },
    props: true,
    meta: headerBtnType.page_common_close,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_close.titleTxt = to.params.dynamicTitle
      next()
    }
  },
  {
    path: '/about/appPrivacyAgree',
    name: 'AppPrivacyAgree',
    components: {
      header: Header,
      default: AppPrivacyAgree
    }
  },
  {
    path: '/about/appPrivacyService',
    name: 'AppPrivacyService',
    component: AppPrivacyService
  },
  {
    path: '/about/appMarketing',
    name: 'AppMarketing',
    component: AppMarketing
  }
]
