// import Medicine from '@/page/medicine/MedicinePage'
import Header from '@/components/layout/Header'
import MedicationHistory from '@/components/medication/MedicationHistory'
import MedicationSetting from '@/components/medication/MedicationSetting'

export default [
  {
    path: '/medicine/medicationHistory',
    name: 'MedicationHistory',
    components: {
      header: Header,
      default: MedicationHistory
    }
  },
  {
    path: '/medicine/medicationSetting',
    name: 'MedicationSetting',
    components: {
      header: Header,
      default: MedicationSetting
    }
  }
]
