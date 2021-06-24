import Header from '@/components/layout/Header'
import UserInfo from '@/page/userinfo/userInfoPage'

export default [
  {
    path: '/login/userInfo',
    name: 'UserInfo',
    components: {
      header: Header,
      default: UserInfo
    }
  }
]
