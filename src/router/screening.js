import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScreeningResult from '@/page/screening/ScreeningResult'
import ScreeningDetail from '@/page/screening/ScreeningDetail'
import ScreeningCancer from '@/page/screening/ScreeningCancer'
import ScreeningMedicineList from '@/page/screening/ScreeningMedicineList'
import ScreeningInfo from '@/page/screening/ScreeningInfo'
import ScreeningWrite from '@/page/screening/ScreeningWrite'
import ScreeningDataLoad from '@/page/screening/ScreeningDataLoad'
import ScreeningSecurityNumber from '@/page/screening/ScreeningSecurityNumber'
import ScreeningDocumentPdf from '@/page/screening/ScreeningDocumentPdf'
import ChartSample from '@/components/screening/chartsample'
import {headerBtnType} from '../store/index'

export default [
  {
    path: '/screening/screeningResult',
    name: 'ScreeningResult',
    components: {
      header: Header,
      default: ScreeningResult
    },
    meta: headerBtnType.page_healthInfo_detail,
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
    meta: headerBtnType.page_common_close,
    props: true
  },
  {
    path: '/screening/screeningCancer',
    name: 'ScreeningCancer',
    components: {
      header: Header,
      default: ScreeningCancer
    },
    meta: headerBtnType.page_healthInfo_detail2,
    props: true
  },
  {
    path: '/screening/screeningMedicineList',
    name: 'ScreeningMedicineList',
    components: {
      header: Header,
      default: ScreeningMedicineList
    },
    meta: headerBtnType.page_healthInfo_detail3,
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
    meta: headerBtnType.page_common_close,
    props: true
  },
  {
    path: '/screening/screeningDataLoad',
    name: 'ScreeningDataLoad',
    components: {
      header: Header,
      default: ScreeningDataLoad
    },
    meta: headerBtnType.page_healthInfo,
    mode: 'history'
  }
]
