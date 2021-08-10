import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScreeningResult from '@/page/screening/ScreeningResult'
import ScreeningDetail from '@/page/screening/ScreeningDetail'
import ScreeningCancer from '@/page/screening/ScreeningCancer'
import ScreeningMedicineList from '@/page/screening/ScreeningMedicineList'
import ScreeningInfo from '@/page/screening/ScreeningInfo'
import ScreeningWrite from '@/page/screening/ScreeningWrite'
import ScreeningSecurityNumber from '@/page/screening/ScreeningSecurityNumber'
import ScreeningDocumentPdf from '@/page/screening/ScreeningDocumentPdf'
import ChartSample from '@/components/screening/chartsample'

export default [
  {
    path: '/screening/screeningResult',
    name: 'ScreeningResult',
    components: {
      header: Header,
      default: ScreeningResult
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
    path: '/screening/screeningCancer',
    name: 'ScreeningCancer',
    components: {
      header: Header,
      default: ScreeningCancer
    },
    props: true
  },
  {
    path: '/screening/screeningMedicineList',
    name: 'ScreeningMedicineList',
    components: {
      header: Header,
      default: ScreeningMedicineList
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
  },
  {
    path: '/screening/chartSample',
    name: 'ChartSample',
    components: {
      header: Header,
      default: ChartSample,
      footer: Footer
    },
    props: true
  },
  {
    path: '/screening/screeningDocumentPdf',
    name: 'ScreeningDocumentPdf',
    component: ScreeningDocumentPdf,
    props: true
  }
]
