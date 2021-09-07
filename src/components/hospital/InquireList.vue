<template>
  <!--contents-->
  <div class="contents">
    <div class="question_list" v-if="inquireList.length">
      <template v-for="item in inquireList">
        <div class="question_item" >
          <a @click="openModal('inquiremodal', item.inqueryId)">
            <div class="itme_tit">
              <p class="title_07">{{ item.inqueryDate }}</p>
              <!-- wait 클래스 추가시 빨간색 // 없는경우 파란색 -->
              <p class="rabel_fill radius" :class="item.inqueryAnswerCheck === 'Y' ? '' : 'wait'">
                {{ item.inqueryAnswerCheck === 'Y' ? '답변완료' : '답변대기중'}}
              </p>
            </div>
          </a>
          <div class="item_cont">
            <p class="title_10">{{ item.medicalInquiryDesc }}</p>
          </div>
        </div>
      </template>
      <!--//box_wrap-->
      <div v-if="isOpenModal">
        <component :is="modalGbn" v-bind:selectmodal="modalObj" v-bind:hospitalkey="propsdata" v-on:popupdata="modalData">

        </component>
      </div>
    </div>
    <!--더보기버튼-->
<!--    <div class="btnMoreArea">-->
<!--      <button type="button" @click="plusList">더보기<i class="icoArrow_purpleB"></i></button>-->
<!--    </div>-->
    <!--//더보기버튼-->
    <div style="text-align: center" v-else>
      <template>
        <div class="visit_history_wrap box_shadow01"><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
          <div class="visit_history_detail">
            <h4>최근 문의한 내역이 없습니다.</h4>
          </div>
        </div>
      </template>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import {fetchInquireList} from '../../api'
import inquirePopup from '../../components/hospital/InquireDetailPopup'

export default {
  props: ['propsdata'],
  data () {
    return {
      inquireList: [],
      modalGbn: '',
      isOpenModal: false,
      modalObj: 0
    }
  },
  created () {
    const objectValue = {
      hospitalId: this.$route.query.searchVal,
      pageNo: 1
    }
    console.log(objectValue)
    fetchInquireList(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.inquireList = res.data.data.content
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    plusList () {
      alert('준비중 입니다')
    },
    setModalCompo (pCompo, intVal) {
      if (pCompo === 'inquiremodal') {
        this.modalGbn = inquirePopup
        this.modalObj = intVal
      }
    },
    openModal (pCompo, intVal) {
      this.setModalCompo(pCompo, intVal)
      this.isOpenModal = !this.isOpenModal
    },
    modalData: function (value) {
      this.isOpenModal = value
      this.modalGbn = ''
    }
  }
}
</script>

<style scoped>

</style>
