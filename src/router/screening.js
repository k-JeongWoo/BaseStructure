import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScreeningInfo from '@/page/screening/ScreeningInfo'
import ScreeningWrite from '@/page/screening/ScreeningWrite'

export default [
  {
    path: '/screeningInfo',
    name: 'ScreeningInfo',
    components: {
      header: Header,
      default: ScreeningInfo,
      footer: Footer
    },
    props: true
  },
  {
    path: '/screeningWrite',
    name: 'ScreeningWrite',
    components: {
      header: Header,
      default: ScreeningWrite
    },
    props: true
  }
]
