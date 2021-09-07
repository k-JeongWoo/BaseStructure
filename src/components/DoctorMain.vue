<template>
  <!--contents-->
  <div class="contents">
    <div class="navShow_page" >
      <div class="box_wrap">
        <div class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">최근 내원 이력</p>
            <h2 class="title_01">진료/검사/치료 이력 </h2>
            <button class="btn_right" @click="pageUrl('clinic', propsdata)">
              <i class="icoArrow_blackMore">더보기</i>
            </button>
          </div>
          <div class="visit_history_wrap box_shadow01">
            <!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
            <div class="visit_history_detail" :class="clinicList.clinicType === '진료' ? 'type01' : clinicList.clinicType === '검사' ? 'type02' : 'type03'" v-if="clinicList.regDate">
              <h2 class="title_03">{{ clinicList.clinicType }}</h2>
              <div class="suggestion_doctor">
                <div class="doctor_info">
                  <div class="doctor_img">
                    <img src="../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
                  </div>
                  <ul>
                    <li class="sugges_date">{{ clinicList.regDate }}</li>
                    <li class="sugges_doc">{{ clinicList.emplyName }}</li>
                  </ul>
                </div>
              </div>
              <!--//suggestion_doctor-->
              <div class="doctor_comment">
                <h3 class="title_07" v-if="clinicList.clinicRecord">진료기록</h3>
                <div class="cont" v-if="clinicList.clinicRecord">
                  <p>{{ clinicList.clinicRecord }}</p>
                </div>
                <h3 class="title_07" v-if="clinicList.clinicCaution">주의사항</h3>
                <div class="cont" v-if="clinicList.clinicCaution">
                  <p>{{ clinicList.clinicCaution }}</p>
                </div>
              </div>
              <!--//doctor_comment-->
            </div>
            <div class="visit_history_detail" v-else>
              <H3>최근 내원 이력이 없습니다.</H3>
            </div>
          </div>
          <!--//visit_history_wrap-->
        </div>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <p class="title_05 colorA">기능별 건강</p>
          <h2 class="title_01">건강상태 요약</h2>
          <ul class="health_state list_styleA mt4">
            <template v-for="item in healthyList">
              <li class="list_item">
                <a class="btn_health_state" @click="healthSatusFnt(item.careProgramId, propsdata, item.careProgramName)">
                  <!-- icoProgram_01 : 마음 / icoProgram_02 : 신경인지 / icoProgram_03 : 심혈관 / icoProgram_04 : 근골격 / icoProgram_05 : 대사 / icoProgram_06 : 면역 / icoProgram_07 : 피부&체형 /icoProgram_08 : 기타  -->
                  <i :class="'icoProgram_0'+item.careProgramId"></i><span>{{ item.careProgramName }}</span>
                </a>
              </li>
            </template>
          </ul>
          <!--//health_state-->
        </section>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">다음 예상 내원일</p>
            <h2 class="title_01">상세내역</h2>
            <button class="btn_right" @click="pageUrl('plan', propsdata)">
              <i class="icoArrow_blackMore">더보기</i>
            </button>
          </div>
          <p class="infomation_box mb4">
            <i class="icoCom_i">i</i>
            <span class="tit">예상 내원일</span>
            <span class="cont">진료시 안내한 내원일로 결정된 예약일이 아니므로 별도 전화예약이 필요합니다. </span>
          </p>
          <div class="btnArea mb4">
            <iframe id="app_init_frame" style="display:none"></iframe>
            <a href="tel:82+03212345678" target="app_init_frame" class="btn_fill">전화 예약하기</a>
          </div>
          <ul class="reservation_list">
            <li class="item" v-for="item in magementPlanList">
              <div class="reservation_info">
                <div class="reser_dDay blue">{{ item.ddays === 0 ? '' : 'D-' }}<span>{{ item.ddays === 0 ? 'Today' : item.ddays }}</span></div><!--class="blue" 추가시 디데이 배경색상변경-->
                <ul class="ico_listStyle01">
                  <li class="list_item" >
                    <i class="icoCom_day_purple">예약일</i>
                    <span>{{ item.visitDate }} ({{ item.visitWeek }})</span>
                  </li>
                  <li class="list_item">
                    <i class="icoCom_time_purple">예약시간</i>
                    <span>{{ item.visitTime }}</span>
                  </li>
                  <li class="list_item">
                    <i class="icoCom_memo_purple">진료</i>
                    <span>{{ item.magementPlanType }}</span>
                  </li>
                </ul>
              </div>
            </li>
            <!--//item-->
          </ul>

        </section>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <p class="title_05 colorA">본원 검사 결과</p>
          <h2 class="title_01">Inbody</h2>

          <div class="inbody_box mt4">
            <div class="dateTime_box box_shadow01">
              <button type="button" class="btn_left">
                <i class="icoArrow_blackL">이전</i>
              </button>
              <p class="dateTime_txt">
                <span class="date">2021.04.21</span>
                <span class="time">11:30</span>
              </p>
              <button type="button" class="btn_right">
                <i class="icoArrow_blackR">다음</i>
              </button>
            </div>
            <!--//dateTime_box-->
            <ul class="inbody_list">
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">체중</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">60.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">골격근량</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">25.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">체지방량</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">35.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01 bgColorB">
                <h3 class="title_07 mb1">BMI</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">20.76</span>
                      <!-- <span class="title_10 colorC">kg</span> -->
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01 bgColorB">
                <h3 class="title_07 mb1">체지방률</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">10.0</span>
                      <span class="title_10 colorC">%</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
            </ul>
          </div>
          <!--//inbody_box-->
        </section>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">최근 문의사항</p>
            <h2 class="title_01">문의사항/답변</h2>
            <button class="btn_right" @click="pageUrl('inquire', propsdata)">
              <i class="icoArrow_blackMore">더보기</i>
            </button>
          </div>
          <div class="btnArea">
            <button class="btn_fill" @click="openModal('inquireRegist', propsdata)">문의하기</button>
          </div>
          <div class="question_list">
            <div class="question_item" v-for="item in inqueryList">
              <a @click="openModal('inquiremodal', item.inqueryId)">
                <div class="itme_tit">
                  <p class="title_07">{{ item.inqueryDate }}</p>
                  <p class="rabel_fill radius" :class="item.inqueryAnswerCheck === 'N' ? 'wait' : ''"><!-- wait 클래스 추가시 빨간색 // 없는경우 파란색 -->
                    {{ item.inqueryAnswerCheck === 'N' ? '답변대기중' : '답변완료' }}
                  </p>
                </div>
              </a>
              <div class="item_cont">
                <p class="title_10">{{ item.medicalInquiryDesc }}</p>
              </div>
            </div>
          </div>
          <!--//question_list-->
        </section>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">병원안내</p>
            <h2 class="title_01">{{ pdYadmNm }}</h2>
            <button class="btn_right" @click="pageUrl('detail', propsdata)">
              <i class="icoArrow_blackMore">더보기</i>
            </button>
          </div>
          <h2 class="title_02"><span class="mr2">수요일</span> <span>9:00 ~ 18:00</span></h2>
          <p class="title_09 mt3">
            서울시 송파구 오금로 15길 5, 송파빌딩 2, 3층
          </p>
          <ul class="medical_subject mt3">
            <li class="rabel_fill radius bgColor06 color0">외래진료</li>
            <li class="rabel_fill radius bgColor06 color0">종합 건강검진</li>
            <li class="rabel_fill radius bgColor06 color0">가정의학과</li>
          </ul>
        </section>

      </div>
      <!--//box_wrap-->
      <div v-if="isOpenModal">
        <component :is="modalGbn" v-bind:selectmodal="modalObj" v-on:popupdata="modalData">
          <div class="modal-header" slot="header">
            <h3>{{ modalTitle }}</h3>
          </div>
          <p slot="body" v-html="modalContent"></p>
          <button slot="moveBtn1" @click="modalData" class="btn modal-default-button">확인</button>
        </component>
      </div>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import {hospitalHealthyList} from '../api/index'
import agreePopup from '../components/appInformation/AppPersonAgree'
import inquirePopup from '../components/hospital/InquireDetailPopup'
import inquireRegistPopup from '../components/hospital/InquireRegist'
import confirmModal from '../components/modal/ConfirmModal'

export default {
  props: ['propsdata'],
  data () {
    return {
      healthyList: [],
      magementPlanList: [],
      inqueryList: [],
      clinicList: [],
      agreeChk: '',
      modalGbn: '',
      isOpenModal: false,
      modalObj: this.$route.query.hospitalId,
      modalTitle: '',
      modalContent: '',
      hospitalId: '',
      pdYadmNm: ''
    }
  },
  async mounted () {
    const objectValue = {
      hospitalId: this.$route.query.hospitalId
    }
    await hospitalHealthyList(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.healthyList = res.data.data.careProgramResponses
        this.magementPlanList = res.data.data.magementPlanResponses
        this.inqueryList = res.data.data.medicalInqueryResponses
        this.clinicList = res.data.data.clinicResponse
        this.agreeChk = res.data.data.healthAgreeChk
        this.pdYadmNm = res.data.data.pdYadmNm
        if (res.data.data.healthAgreeChk === 'N') {
          this.openModal('agreemodal')
        }
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    pageUrl: function (value, searchVal) {
      if (value === 'clinic') {
        this.$router.push({path: '/hospital/recentlyVisit', query: { dynamicTitle: '최근 내원 이력', conClass: 'visit_history01', searchVal: searchVal }})
      } else if (value === 'health') {
        alert('준비중 입니다.')
      } else if (value === 'plan') {
        this.$router.push({path: '/hospital/hospitalExpectedPlan', query: { dynamicTitle: '예상 내원일 상세정보', conClass: 'noBg hospital_visitDate', searchVal: searchVal }})
      } else if (value === 'inbody') {
        alert('준비중 입니다.')
      } else if (value === 'inquire') {
        this.$router.push({path: '/hospital/inquireList', query: { dynamicTitle: '최근 문의사항', conClass: 'noBg recent_question', searchVal: searchVal }})
      } else if (value === 'detail') {
        this.$router.push({path: '/hospital/hospitalDetail', query: { dynamicTitle: '문의내용 상세보기', conClass: 'noBg question_detail', searchVal: searchVal }})
        // this.$router.push({path: '/hospital/hospitalDetail', query: { searchVal: searchVal, dynamicTitle: this.pdYadmNm }})
      } else if (value === 'inquireDetail') {
        this.$router.push({path: '/hospital/hospitalDetail', query: { dynamicTitle: '문의내용 상세보기', conClass: 'noBg question_detail', searchVal: searchVal }})
      }
    },
    setModalCompo (pCompo, intVal) {
      if (pCompo === 'agreemodal') {
        this.modalGbn = agreePopup
        this.modalObj = this.propsdata
      } else if (pCompo === 'inquiremodal') {
        this.modalGbn = inquirePopup
        this.modalObj = intVal
      } else if (pCompo === 'inquireRegist') {
        this.modalGbn = inquireRegistPopup
        this.modalObj = intVal
      } else if (pCompo === 'agree') {
        this.modalGbn = confirmModal
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
    healthSatusFnt (programkey, hospitalkey, programName) {
      if (this.agreeChk === 'N') {
        this.modalTitle = '주의'
        this.modalContent = '제3자 정보제공동의 후 서비스 이용이 가능합니다.'
        this.openModal('agree', '')
      } else {
        this.$router.push({path: '/hospital/healthStatus', query: { dynamicTitle: programName, conClass: 'health_status', careProgramId: programkey, hospitalId: hospitalkey }})
      }
    }
  }
}
</script>

<style scoped>

</style>
