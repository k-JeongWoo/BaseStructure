import Medicine from '@/page/medicine/MedicinePage'
import Header from '@/components/layout/Header'

export default [
  {
    path: '/medicine/Medicine',
    name: 'Medicine',
    components: {
      header: Header,
      default: Medicine
    }
  }
]
