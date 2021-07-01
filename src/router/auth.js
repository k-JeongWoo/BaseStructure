import Header from '@/components/layout/Header'
import Agreement from '@/components/auth/Agreement'
import NiceBlank from '@/components/auth/NiceBlank'
import SignUpForm from '@/components/auth/SignUpForm'

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
    }
  }
]
