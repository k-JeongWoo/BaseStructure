import ScreeningInfo from '@/components/screening/ScreeningInfo'
import ScreeningWrite from '@/components/screening/ScreeningWrite'

export default [
  {
    path: '/screeningInfo',
    name: 'ScreeningInfo',
    component: ScreeningInfo,
    props: true
  },
  {
    path: '/screeningWrite',
    name: 'ScreeningWrite',
    component: ScreeningWrite,
    props: true
  }
]
