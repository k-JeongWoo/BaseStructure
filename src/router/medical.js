import Medicalprogram from '@/page/medicalprogram/MedicalProgramPage'
import MedicalCouncle from '@/page/medicalprogram/MedicalCounclePage'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/main/medicalprogram',
    name: 'Medicalprogram',
    components: {
      header: Header,
      default: Medicalprogram,
      footer: Footer
    }
  },
  {
    path: '/main/medicalCouncle',
    name: 'medicalCouncle',
    components: {
      header: Header,
      default: MedicalCouncle,
      footer: Footer
    }
  }
]
