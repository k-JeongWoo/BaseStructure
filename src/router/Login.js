import LoginPage from '../components/Login/Login'
import TopMenu from '../components/Layout/TopMenu'
import LeftMenu from '../components/Layout/LeftMenu'
import FooterMenu from '../components/Layout/FooterMenu'
export default [
  {
    path: '/',
    name: 'Login',
    components: {
      header: TopMenu,
      default: LoginPage,
      leftMenu: LeftMenu,
      footer: FooterMenu
    }
  }
]
