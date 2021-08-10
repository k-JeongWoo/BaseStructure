import UserDetail from '@/components/user/UserDetail'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/user/userdetail',
    name: 'UserDetail',
    components: {
      header: Header,
      default: UserDetail
    },
    props: true
  }
]
