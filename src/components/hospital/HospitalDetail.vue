<template>
  <!--contents-->
  <div class="contents">
    <div class="hospital_detail">
      <p class="title_05 colorA">병원안내</p>
<!--      <h2 class="title_01 mb4">{{ hospitalDetail.pdYadmNm === '' ? '씨젠 클리닉' : '' }}</h2>-->
      <h2 class="title_01 mb4">씨젠 클리닉 (부속의원)</h2>
      <div class="hospital_sampleImg">
        <img src="../../assets/resources/images/_temp/hospital_temp01.png" alt="씨젠클리닉 병원사진">
      </div>
      <div class="btnArea" v-if="prevRoute.name !== 'HospitalRegist'">
        <button :class="hospitalDetail.thirdAgreeChk === 'N' ? 'btn_fill' : 'btn_fill_color04'"
                @click="pageUrl(hospitalDetail.thirdAgreeChk, hospitalDetail.hospitalId)">주치의 병원으로 등록</button>
      </div>
      <h2 class="title_02 mt5"><span>수요일</span><span>9:00 ~ 18:00</span></h2>
      <p class="title_09 mt3">
      </p>
      <ul class="medical_subject mt3">
        <li class="rabel_fill radius bgColor06 color0">외래진료</li>
        <li class="rabel_fill radius bgColor06 color0">종합 건강검진</li>
        <li class="rabel_fill radius bgColor06 color0">가정의학과</li>
      </ul>
      <div class="btnArea mt6 mb5">
        <iframe id="app_init_frame" style="display:none"></iframe>
        <a href="tel:82+03212345678" target="app_init_frame" class="btn_border">전화하기</a>
        <button class="btn_border" @click="openModal('inquireRegist', hospitalDetail.hospitalId)">문의하기</button>
      </div>
      <div class="hospital_detailInfo">
        <section>
          <h3 class="title_05">병원소개</h3>
          <p class="contTxt_06 mt4">
            국내 최초로 의원에서 분자진단을 통해 병의 원인을 정확하게 진단할 수 있고 의사에게 생활 건강 코칭을 받을 수 있는 라이프케어 병원입니다.
          </p>
        </section>
        <section class="mt7">
          <h3 class="title_05">씨젠클리닉 프로그램</h3>
          <ul class="hospital_program mt4">
            <li>
              <div class="icoBox">
                <i class="icoProgram_01 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>마음</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_02 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>신경인지</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_03 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>심혈관</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_04 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>근골격</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_05 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>대사</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_06 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>면역</p>
            </li>
            <li>
              <div class="icoBox">
                <i class="icoProgram_07 hP"></i><!-- ico_program_01 : 마음 / ico_program_02 : 신경인지 / ico_program_03 : 심혈관 / ico_program_04 : 근골격 / ico_program_05 : 대사 / ico_program_06 : 면역 / ico_program_07 : 피부&체형 -->
              </div>
              <p>피부&체형</p>
            </li>
          </ul>
        </section>
        <section class="mt9">
          <h3 class="title_05">진료시간</h3>
          <p class="title_09 mt4">점심시간 <span>13:00 ~ 14:00</span></p>
          <ul class="list_styleB mt4">
            <li class="list_item">
              <span>월요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span>화요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span>수요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span>목요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span>금요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span class="colorG">토요일</span>
              <span>13:00 ~ 14:00</span>
            </li>
            <li class="list_item">
              <span class="colorB">일요일</span>
              <span>진료없음</span>
            </li>
            <li class="list_item">
              <span class="colorB">공휴일</span>
              <span>진료없음</span>
            </li>
          </ul>
        </section>
        <section class="mt7">
          <h3 class="title_05">
            위치정보
            <button type="button" class="rabel_fill_color02 radius">복사하기</button>
          </h3>
          <p class="title_10 mt4">서울시 송파구 오금로 15길 5, 송파빌딩 2, 3층</p>
        </section>
        <section class="mt7">
          <h3 class="title_05">의사정보</h3>
          <ul class="list_styleC mt4">
            <li class="list_item title_06"><i class="icoCom_doctor mr3"></i><span>김종석</span> 원장님</li>
            <li class="list_item title_06"><i class="icoCom_doctor mr3"></i><span>나윤채</span> 부원장님</li>
          </ul>
        </section>
        <section class="mt7">
          <h3 class="title_05">진료과목</h3>
          <p class="title_10 mt4">통합기능의학, 만성피로, 스트레스, 항노화프로그램, 대사질환, 면역</p>
        </section>
        <section class="mt7">
          <h3 class="title_05">진료항목</h3>
          <p class="title_10 mt4">치료, 검사, 예방접종 </p>
        </section>
        <section class="mt7">
          <h3 class="title_05">의료장비</h3>
          <ul class="list_styleB mt4">
            <li class="list_item layoutFlex betweenFlex">
              <p>임상화학/명역검사기</p>
              <span class="num">1</span>
            </li>
            <li class="list_item layoutFlex betweenFlex">
              <p>적외선 조사기</p>
              <span class="num">2</span>
            </li>
            <li class="list_item layoutFlex betweenFlex">
              <p>일반 엑스선 촬영장치</p>
              <span class="num">3</span>
            </li>
          </ul>
        </section>
        <!--//hospital_detail-->
        <div v-if="isOpenModal">
          <component :is="modalGbn" v-bind:selectmodal="modalObj" v-on:popupdata="modalData">
            <div class="modal-header" slot="header">
              <h3>{{ modalTitle }}</h3>
            </div>
            <p slot="body" v-html="modalContent"></p>
            <button slot="moveBtn1" @click="userHospitalRegist(hospitalDetail.thirdAgreeChk)" class="btn modal-default-button">확인</button>
            <button slot="moveBtn2" @click="modalData" class="btn">취소</button>
          </component>
        </div>
        <!--//box_wrap-->
      </div>
    </div>
    <div class="btnArea">
      <button type="button" class="btn_text_size03 underline colorC">개인정보 처리업무 위탁 정보 공개</button>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import {hospitalDetail, personAgreeRegist, hospitalRegist} from '../../api'
import inquireRegistPopup from './InquireRegist'
import moveModal from '../modal/MoveModal'

export default {
  props: ['popupdata'],
  data () {
    return {
      hospitalId: this.$route.query.searchVal,
      hospitalDetail: [],
      prevRoute: [],
      modalGbn: '',
      isOpenModal: false,
      modalObj: this.$route.query,
      modalTitle: '',
      modalContent: ''
    }
  },
  mounted () {
    const objectValue = {
      hospitalId: this.$route.query.searchVal
    }
    hospitalDetail(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.hospitalDetail = res.data.data
      }
    }).catch(error => {
      console.log(error)
    })
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  methods: {
    pageUrl (valueGbn, hospitalkey) {
      if (valueGbn === 'N') {
        this.modalTitle = '확인'
        this.modalContent = '주치의 병원으로 등록 하시겠습니까?'
        this.openModal('hospitalRegist', hospitalkey)
      } else {
        this.modalTitle = '주의'
        this.modalContent = '주치의 병원을 취소 하시겠습니까?'
        this.openModal('hospitalCancle', hospitalkey)
      }
    },
    setModalCompo (pCompo, intVal) {
      if (pCompo === 'inquireRegist') {
        this.modalGbn = inquireRegistPopup
        this.modalObj = intVal
      } else if (pCompo === 'hospitalRegist') {
        this.modalGbn = moveModal
        this.modalObj = intVal
      } else if (pCompo === 'hospitalCancle') {
        this.modalGbn = moveModal
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
    },
    userHospitalRegist (value) {
      console.log(value)
      if (value === 'N') {
        const objectValue = {
          hospitalIds: [this.hospitalId]
        }
        hospitalRegist(objectValue).then(res => {
          if (res.data.resultCode === '0000') {
            this.$router.go()
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        const objectValue = {
          hospitalId: this.hospitalId,
          agreeChk: 'N'
        }
        personAgreeRegist(objectValue).then(res => {
          if (res.data.resultCode === '0000') {
            this.$router.push({path: '/hospital/hospitalList', query: { dynamicTitle: '병원 목록 조회' }})
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
