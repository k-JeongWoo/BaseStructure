<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg consent_pop">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">개인정보 제3자 제공동의</span>
          </h1>
          <button class="btn_right" @click="popupControll">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <div class="consent_agree">
          <p class="contTxt_04">
            등록하신 병원에 본인의 기본건강 정보를<br>
            제공하는데 동의하십니까?
          </p>
          <div class="agreeBox">

            <p class="inputCheck typeA ">
              <input type="checkbox" name="" id="chck01" v-model="personAgree" value="Y">
              <label for="chck01">
                <span class="bul"></span>개인정보 제3자 제공동의<span class="colorB">(필수)</span>
              </label>
            </p>

            <div class="agree_txtBox">
              <div class="scrollArea">
                <p class="contTxt_06">
                  씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다.씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! 씨젠클리닉 김종석입니다.
                </p>
              </div>
            </div>

            <div class="btnArea">
              <button class="btn_fill_color04" @click="popupControll">취소</button>
              <button class="btn_fill" @click="registAgree">확인</button>
            </div>
          </div>
        </div>

      </div>
      <!--//contents-->
      <!-- footer //footer -->
      <div v-if="isOpenModal">
        <component :is="modalGbn" v-on:popupdata="modalClean">
          <div class="modal-header" slot="header">
            <h3>{{ modalTitle }}</h3>
          </div>
          <p slot="body" v-html="modalContent"></p>
          <button slot="moveBtn1" @click="modalClean" class="btn modal-default-button">확인</button>
        </component>
      </div>
    </div>
    <!--  //container  -->
  </div>
</template>

<script>
import {personAgreeRegist} from '../../api'
import confirmModal from '../modal/ConfirmModal'

export default {
  props: {
    selectmodal: Number
  },
  data () {
    return {
      personAgree: [],
      isOpenModal: false,
      modalTitle: '',
      modalContent: '',
      modalGbn: ''
    }
  },
  methods: {
    pageUrl () {
      this.$router.go(-1)
    },
    registAgree () {
      if (this.personAgree.length > 0) {
        let objectValue = {
          hospitalId: this.selectmodal,
          agreeChk: this.personAgree.toString()
        }
        personAgreeRegist(objectValue).then(res => {
          console.log(res)
          if (res.data.resultCode === '0000') {
            this.popupControll()
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        this.openModal('selectRequire')
      }
    },
    popupControll () {
      this.$emit('popupdata', false)
    },
    setModalCompo (pCompo) {
      if (pCompo === 'selectRequire') {
        this.modalGbn = confirmModal
        this.modalTitle = '알림'
        this.modalContent = '개인정보 제3자 제공동의를 선택해주세요.'
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
    }
  }
}
</script>
