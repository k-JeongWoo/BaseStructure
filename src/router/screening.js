import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScreeningResult from '@/page/screening/ScreeningResult'
import ScreeningDetail from '@/page/screening/ScreeningDetail'
import ScreeningInfo from '@/page/screening/ScreeningInfo'
import ScreeningWrite from '@/page/screening/ScreeningWrite'
import ScreeningSecurityNumber from '@/page/screening/ScreeningSecurityNumber'

export default [
  {
    path: '/screening/screeningResult',
    name: 'ScreeningResult',
    components: {
      header: Header,
      default: ScreeningResult,
      footer: Footer
    },
    props: true
  },
  {
    path: '/screening/screeningDetail',
    name: 'ScreeningDetail',
    components: {
      header: Header,
      default: ScreeningDetail,
      footer: Footer
    },
    props: true
  },
  {
    path: '/screening/screeningInfo',
    name: 'ScreeningInfo',
    components: {
      header: Header,
      default: ScreeningInfo,
      footer: Footer
    },
    props: true
  },
  {
    path: '/screening/screeningWrite',
    name: 'ScreeningWrite',
    components: {
      header: Header,
      default: ScreeningWrite
    },
    props: true
  },
  {
    path: '/screening/ScreeningSecurityNumber',
    name: 'ScreeningSecurityNumber',
    components: {
      header: Header,
      default: ScreeningSecurityNumber
    },
    mode: 'history'
  }
]
