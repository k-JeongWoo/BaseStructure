<template lang="html">
  <!-- footer -->
  <div class="footer">
    <ul>
      <li :class="classGbn === 'home' ? 'on' : ''">
        <button @click="pageUrl('home')">
          <i class="ico_home"></i>
          <span>홈</span>
        </button>
      </li>
      <li>
        <button @click="pageUrl('doctor')" :class="classGbn !== 'home' ? 'on' : ''">
          <i class="ico_doc"></i>
          <span>주치의</span>
        </button>
      </li>
    </ul>
    <div v-if="isOpenModal">
      <component :is="modalGbn">
        <div class="modal-header" slot="header">
          <h3>{{ modalTitle }}</h3>
        </div>
        <p slot="body" v-html="modalContent"></p>
        <button slot="moveBtn1" @click="modalClean" class="btn modal-default-button">확인</button>
      </component>
    </div>
  </div>
  <!-- //footer -->
</template>

<script>
import { myHospitalList } from '../../api/index'
import confirmPopup from '../modal/ConfirmModal'

export default {
  data () {
    return {
      myHospitalListLength: [],
      classGbn: this.$route.meta.titleTxt,
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: ''
    }
  },
  methods: {
    pageUrl (urlValue) {
      if (urlValue === 'home') {
        this.classGbn = urlValue
        this.$router.push({name: 'mainHome'}).catch(() => {})
      } else {
        this.classGbn = urlValue
        myHospitalList().then(res => {
          if (res.data.resultCode !== 'error') {
            this.myHospitalListLength = res.data.data
            if (res.data.data.length > 0) {
              this.$emit('eventdata', res.data.data[0].hospitalId)
              this.$router.push({path: '/doctorMain', query: { hospitalId: res.data.data[0].hospitalId }})
              //   .catch(error => {
              //     console.log(error)
              //   })
            } else {
              this.$router.push('/hospital/hospitalRegist')
            }
          } else {
            this.openModal('message')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    openModal (pCompo) {
      this.setModalCompo(pCompo)
      this.isOpenModal = !this.isOpenModal
    },
    modalClean () {
      this.modalTitle = ''
      this.modalContent = ''
      this.isOpenModal = !this.isOpenModal
    },
    setModalCompo (pCompo) {
      if (pCompo === 'message') {
        this.modalGbn = confirmPopup
        this.modalTitle = '확인'
        this.modalContent = '로그인 후 이용 가능합니다.'
      }
    }
  }
}
</script>
