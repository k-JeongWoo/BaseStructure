import AppInformation from '@/components/appInformation/AppInformation'
import AppPrivacyAgree from '@/components/appInformation/AppPrivacyAgree'
import AppPrivacyService from '@/components/appInformation/AppPrivacyService'
import AppMarketing from '@/components/appInformation/AppMarketing'
import AppPersonAgree from '@/components/appInformation/AppPersonAgree'
import appPrivacyPerson from '@/components/appInformation/appPrivacyPerson'
import AppPrivacySensitive from '@/components/appInformation/AppPrivacySensitive'
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
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
    }
  },
  {
    path: '/about/appPrivacyAgree',
    name: 'AppPrivacyAgree',
    components: {
      header: Header,
      default: AppPrivacyAgree
    },
    props: true,
    meta: headerBtnType.page_common_back,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_back.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_back.conClass = to.query.conClass
      next()
    }
  },
  {
    path: '/about/appPrivacyService',
    name: 'AppPrivacyService',
    component: AppPrivacyService
  },
  {
    path: '/about/appPrivacyPerson',
    name: 'AppPrivacyPerson',
    component: appPrivacyPerson
  },
  {
    path: '/about/appPrivacySensitive',
    name: 'AppPrivacySensitive',
    component: AppPrivacySensitive
  },
  {
    path: '/about/appMarketing',
    name: 'AppMarketing',
    component: AppMarketing
  },
  {
    path: '/agree/appPersonAgree',
    name: 'AppPersonAgree',
    components: {
      header: Header,
      default: AppPersonAgree
    },
    props: true,
    meta: headerBtnType.page_common_close,
    beforeEnter (to, from, next) {
      headerBtnType.page_common_close.titleTxt = to.query.dynamicTitle
      headerBtnType.page_common_close.conClass = to.query.conClass
      next()
    }
  }
]
