import Index from '@/components/Index'
import Mainhome from '@/components/Mainhome'
import Agreement from '@/components/Agreement'
import NotFound from '@/components/common/NotFound'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/mainhome',
    name: 'Mainhome',
    component: Mainhome
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement
  }
]
