import HospitalDetail from '@/components/hospital/HospitalDetail'
import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer.vue'
import HospitalVisit from '@/components/hospital/HospitalVisit'

export default [
  {
    path: '/hospital/hospitalDetail',
    name: 'HospitalDetail',
    components: {
      header: Header,
      default: HospitalDetail
      // footer: Footer
    },
    props: true
  },
  {
    path: '/hospital/hospitalVisit',
    name: 'HospitalVisit',
    components: {
      header: Header,
      default: HospitalVisit
      // footer: Footer
    },
    props: true
  }
]
