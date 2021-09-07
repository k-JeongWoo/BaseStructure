<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg question_pop">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">문의하기</span>
          </h1>
          <button class="btn_right" @click="openModal('close')">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents " style="padding:16px 32px 18px !important;">
        <h2 class="title_05 mb4"><span class="colorH">문의병원:</span> <span class="">씨젠클리닉</span></h2>
        <div class="question_txtBox ">
          <textarea v-model="medicalInquiryDesc" v-on:input="inqueryTyping"></textarea>
          <p class="text_byte">
            <span :class="medicalInquirySize > 500 ? 'colorB': 'color0'">{{medicalInquirySize}}<!--빨강:colorB--></span>
            / 500 byte
          </p>
        </div>
        <div class="btnArea">
          <button class="btn_fill_color04" @click="popupControll()">취소</button>
          <button class="btn_fill" @click="openModal('regist')">확인</button>
        </div>
      </div>
      <!--//contents-->
      <!-- footer //footer -->
      <div v-if="isOpenModal">
        <component :is="modalGbn">
            <div class="modal-header" slot="header">
              <h3>{{ modalTitle }}</h3>
            </div>
            <p slot="body" v-html="modalContent"></p>
            <button slot="moveBtn1" @click="popupControll" class="btn modal-default-button">확인</button>
            <button slot="moveBtn2" class="btn" @click="modalClean">취소</button>
        </component>
      </div>
    </div>
    <!--  //container  -->
  </div>
</template>

<script>
import confirmModal from '../modal/ConfirmModal'
import moveModal from '../modal/MoveModal'
import {fetchInquireRegist} from '../../api'

export default {
  props: {
    selectmodal: Number
  },
  data () {
    return {
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: '',
      medicalInquiryDesc: '',
      medicalInquirySize: 0
    }
  },
  created () {
    console.log(1)
  },
  methods: {
    popupControll () {
      this.$emit('popupdata', false)
      this.$router.go()
    },
    setModalCompo (pCompo) {
      if (pCompo === 'close') {
        this.modalGbn = moveModal
        this.modalTitle = '주의'
        this.modalContent = '입력한 내용이 저장되지 않았습니다. 페이지를 나가시겠습니까?'
      } else if (pCompo === 'regist') {
        if (this.medicalInquirySize > 500) {
          alert('최대 입력 길이를 초과하였습니다.')
        } else {
          const objectValue = {
            hospitalId: this.selectmodal,
            medicalInquiryDesc: this.medicalInquiryDesc
          }
          fetchInquireRegist(objectValue).then(res => {
            console.log(res.data.data)
            if (res.data.resultCode === '0000') {
              this.modalGbn = confirmModal
              this.modalTitle = '알림'
              this.modalContent = '작성하신 글이 저장되었습니다.'
            }
          }).catch(error => {
            console.log(error)
          })
        }
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
    inqueryTyping: function (e) {
      this.medicalInquirySize = getByte(e.target.value)
    }
  }
}

function getByte (str) {
  return str
    .split('')
    .map(s => s.charCodeAt(0))
    .reduce((prev, c) => (prev + ((c === 10) ? 2 : ((c >> 7) ? 2 : 1))), 0)
}
</script>

<style scoped>

</style>
