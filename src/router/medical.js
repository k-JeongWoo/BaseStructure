import Medicalprogram from '@/page/medicalprogram/MedicalProgramPage'
import MedicalConsulting from '@/page/medicalprogram/MedicalConsultingPage'
import MedicalInquire from '@/page/medicalprogram/MedicalInquirePage'
import MedicalInquireContents from '@/page/medicalprogram/MedicalInquireContentsPage'
import Header from '@/components/layout/Header'
import FntTestPage from '@/components/fntTestPage'

export default [
  {
    path: '/medical/first/medicalprogram',
    name: 'Medicalprogram',
    components: {
      header: Header,
      default: Medicalprogram
    },
    props: true
  },
  {
    path: '/medical/medicalConsulting',
    name: 'MedicalConsulting',
    components: {
      header: Header,
      default: MedicalConsulting
    },
    props: true
  },
  {
    path: '/medical/medicalInquire',
    name: 'MedicalInquire',
    components: {
      header: Header,
      default: MedicalInquire
    }
  },
  {
    path: '/medical/medicalInquireContents',
    name: 'MedicalInquireContents',
    components: {
      header: Header,
      default: MedicalInquireContents
    }
  },
  {
    path: '/FntTestPage',
    name: 'fntTestPage',
    components: {
      header: Header,
      default: FntTestPage
    },
    props: true
  }
]
