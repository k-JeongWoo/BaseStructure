<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg question_detail">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">문의내용 상세보기 </span>
          </h1>
          <button @click="popupControll" class="btn_right">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <ul class="inquiry_wrap" v-if="Object.keys(InquireDetail).length !== 0">
          <li class="inquiry_content"><!-- 문의 : inquiry_content // 답변 : answer_content-->
            <p class="title_05 colorH">문의내용 {{ InquireDetail.length }}</p>
            <p class="title_06">{{ InquireDetail.medicalInquiryDesc }}</p>
            <p class="title_12 colorH">{{ InquireDetail.medicalInqueryDate }}</p>
          </li>
          <li class="answer_content" v-if="InquireDetail.inqueryAnswerCheck === 'Y'">
            <p class="title_05 colorH">답변내용</p>
            <p class="title_06">{{ InquireDetail.medicalInqueryAnswer }}</p>
            <p class="title_12 colorH">{{ InquireDetail.medicalInqueryAnswerDate }}</p>
          </li>
          <li class="answer_content" v-else>
            <p class="title_06">답변 대기중입니다.</p>
          </li>
        </ul>
        <ul class="inquiry_wrap" v-else>
          <li class="answer_content">
            <p class="title_06">문의하신 글이 삭제 되었습니다.</p>
          </li>
        </ul>
      </div>
      <!--//contents-->
      <!-- footer -->
      <footer class="footer typeB">
        <div class="btnArea">
          <button class="btn_border" @click="openPopup"><i class="icoCom_del_border mr3"></i>문의글 삭제</button>
        </div>
      </footer>
      <!-- //footer -->
    </div>
    <!--  //container  -->
    <modal v-if="showModal" @close="showModal = false">
      <div class="modal-header" slot="header">
        <h3>{{ modalTitle }}</h3>
      </div>
      <p slot="body" v-html="modalContent"></p>
      <button slot="moveBtn2" @click="showModal = false" class="btn">취소</button>
      <button slot="moveBtn1" @click="removeinquire(selectmodal)" class="btn modal-default-button">삭제</button>
    </modal>
  </div>
</template>

<script>
import {fetchInquireDetail, fetchInquireRemove} from '../../api'
import modal from '../modal/MoveModal'

export default {
  props: {
    selectmodal: Number
  },
  data () {
    return {
      InquireDetail: [],
      modalTitle: '주의',
      modalContent: '문의하신 내용을 삭제하시겠습니까?',
      showModal: false
    }
  },
  methods: {
    popupControll () {
      // this.$emit('popupdata', false)
      this.$router.go(-1)
    },
    removeinquire (value) {
      let objectValue = {
        inqueryId: value
      }
      fetchInquireRemove(objectValue).then(res => {
        if (res.data.resultCode === '0000') {
          this.showModal = !this.showModal
          this.$router.go()
          // this.$router.push({name: 'InquireList', params: { dynamicTitle: '최근 문의사항', conClass: 'noBg recent_question', searchVal: this.hospitalkey }})
        }
      }).catch(error => {
        console.log(error)
      })
    },
    openPopup () {
      this.showModal = !this.showModal
    }
  },
  created () {
    const objectValue = {
      inqueryId: this.selectmodal
    }
    fetchInquireDetail(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.InquireDetail = res.data.data
      }
    }).catch(error => {
      this.InquireDetail = {}
      console.log(error)
    })
  },
  components: {
    modal: modal
  }
}
</script>

<style scoped>

</style>
