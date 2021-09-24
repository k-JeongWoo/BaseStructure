import NoticeList from '@/components/notice/NoticeList'
import Header from '@/components/layout/Header'
import {headerBtnType} from '../store/index'

export default [
  {
    path: '/notice/NoticeList',
    name: 'NoticeList',
    components: {
      header: Header,
      default: NoticeList
    },
    meta: headerBtnType.page_notice,
    props: true
  }
]
