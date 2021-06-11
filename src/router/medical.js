import Medicalprogram from '@/page/medicalprogram/MedicalProgramPage'
import MedicalConsulting from '@/page/medicalprogram/MedicalConsultingPage'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/main/medicalprogram',
    name: 'Medicalprogram',
    components: {
      header: Header,
      default: Medicalprogram
    }
  },
  {
    path: '/main/medicalConsulting',
    name: 'MedicalConsulting',
    components: {
      header: Header,
      default: MedicalConsulting
    }
  }
]
