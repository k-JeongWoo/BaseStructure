import Medicalprogram from '@/page/medicalprogram/MedicalProgramPage'
import MedicalConsulting from '@/page/medicalprogram/MedicalConsultingPage'
import MedicalInquire from '@/page/medicalprogram/MedicalInquirePage'
import MedicalInquireContents from '@/page/medicalprogram/MedicalInquireContentsPage'
import FntTestPage from '@/page/FntTestPage'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/main/medicalprogram',
    name: 'Medicalprogram',
    components: {
      header: Header,
      default: Medicalprogram
    },
    props: true
  },
  {
    path: '/main/medicalConsulting',
    name: 'MedicalConsulting',
    components: {
      header: Header,
      default: MedicalConsulting
    },
    props: true
  },
  {
    path: '/main/medicalInquire',
    name: 'MedicalInquire',
    components: {
      header: Header,
      default: MedicalInquire
    }
  },
  {
    path: '/main/medicalInquireContents',
    name: 'MedicalInquireContents',
    components: {
      header: Header,
      default: MedicalInquireContents
    }
  },
  {
    path: '/fntTestPage',
    name: 'fntTestPage',
    components: {
      default: FntTestPage
    }
  }
]
