import HospitalDetail from '@/components/hospital/HospitalDetail'
import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer.vue'
import HospitalVisit from '@/components/hospital/HospitalVisit'
import HospitalList from '@/components/hospital/HospitalList'
import HospitalRegist from '@/components/hospital/HospitalRegist'

export default [
  {
    path: '/hospital/hospitalList',
    name: 'HospitalList',
    components: {
      header: Header,
      default: HospitalList
      // footer: Footer
    },
    props: true
  },
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
  },
  {
    path: '/hospital/hospitalRegist',
    name: 'HospitalRegist',
    components: {
      header: Header,
      default: HospitalRegist
    },
    props: true
  }
]
