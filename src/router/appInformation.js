import AppInformation from '@/components/appInformation/AppInformation'
import AppPrivacyAgree from '@/components/appInformation/AppPrivacyAgree'
import AppPrivacyService from '@/components/appInformation/AppPrivacyService'
import AppMarketing from '@/components/appInformation/AppMarketing'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/about/appInformation',
    name: 'AppInformation',
    components: {
      header: Header,
      default: AppInformation
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
