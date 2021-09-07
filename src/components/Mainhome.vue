<template>
      <!--contents-->
      <div class="contents">
        <div class="box_wrap bgNone" v-if="">
          <section class="box_p32 bgColorB" v-if="result_code === 'error'">
            <p class="title_05 colorA">서비스 이용 안내</p>
            <h2 class="title_02">환영합니다!</h2>
            <p class="contTxt_06 mt4">로그인을 통해 건강 데이터를 연동해보세요.<br>
              나의 활동을 모니터링하고 병원에서 의사에게
              직접 라이프 코칭을 받아 보실 수 있습니다.</p>
            <div class="wellcome_img">
              <img src="../assets/resources/images/common/img_wellcome.png" alt="코칭이미지">
            </div>
            <div class="btnArea mt4">
              <button type="button" class="btn_fill" @click="movePagefnt">로그인</button>
            </div>
          </section>
          <!--//box_p32-->
<!--          <section class="box_p32 bgColorB"-->
<!--                   v-if="result_code !== 'error' &&-->
<!--                   Linked_data === 'N'">-->
<!--            <p class="title_05 colorA">데이터 연동 안내</p>-->
<!--            <h2 class="title_02">건강 데이터를 연동하세요!</h2>-->
<!--            <p class="contTxt_06 mt4">나의 활동을 모니터링하고 병원에서 의사에게-->
<!--              직접 라이프 코칭을 받아 보실 수 있습니다.</p>-->
<!--            <div class="pairingBox">-->
<!--              <p class="iconBox">-->
<!--&lt;!&ndash;                &ndash;&gt;-->
<!--&lt;!&ndash;                <i class="icon_iosHealth">연동</i>&ndash;&gt;-->
<!--&lt;!&ndash;                <span>건강</span>&ndash;&gt;-->
<!--&lt;!&ndash;                삼성헬스&ndash;&gt;-->
<!--								<i class="icon_samsungHealth">연동</i>-->
<!--								<span>삼성헬스</span>-->
<!--              </p>-->
<!--              <p class="pairing_white">-->
<!--                <i class="icoCom_pairing">연동</i>-->
<!--              </p>-->
<!--              <p class="iconBox">-->
<!--                <i class="icon_viocross">연동</i>-->
<!--                <span>셀리메디</span>-->
<!--              </p>-->
<!--            </div>-->
<!--            &lt;!&ndash; <div class="pairingBox">-->
<!--              <p class="iconBox">-->
<!--                <i class="icon_samsungHealth">연동</i>-->
<!--                <span>건강</span>-->
<!--              </p>-->
<!--              <p class="pairing_white">-->
<!--                <i class="icoCom_pairing">연동</i>-->
<!--              </p>-->
<!--              <p class="iconBox">-->
<!--                <i class="icon_viocross">연동</i>-->
<!--                <span>셀리메디</span>-->
<!--              </p>-->
<!--            </div> &ndash;&gt;-->
<!--            <div class="btnArea mt4" v-if="Linked_data === 'N'">-->
<!--              <button type="button" class="btn_fill">데이터 연동</button>-->
<!--            </div>-->
<!--          </section>-->
          <!--//box_p32-->
          <div class="box_p16 bgColorB"
               v-if="result_code !== 'error' && userVisitList.length > 0">
            <div class="swiper-container reserSlide">
              <swiper class="swiper-wrapper reservation_list" :options="swiperOption" v-if="isLoading">
                  <li class="swiper-slide item"
                      v-for="(item,index) in userVisitList"
                      :key="index">
                    <div class="tit">
                      <p>내일 가야 할 병원</p>
                    </div>
                    <div class="reservation_info">
                      <div class="reser_dDay red">{{ item.ddays === 0 ? '' : 'D-'}}<span>{{ item.ddays === 0 ? 'Today' : item.ddays}}</span></div>
                      <ul class="ico_listStyle01">
                        <li class="list_item">
                          <i class="icoCom_day_purple">예약일</i>
                          <span>{{ item.visitDate }}</span>
                        </li>
                        <li class="list_item">
                          <i class="icoCom_time_purple">예약시간</i>
                          <span>{{ item.visitTime }}</span>
                        </li>
                        <li class="list_item">
                          <i class="icoCom_hos_purple">예약병원</i>
                          <span>{{ item.hospitalName }}</span>
                        </li>
                        <li class="list_item">
                          <i class="icoCom_memo_purple">예약메모</i>
                          <span>{{ item.magementPlanType }}</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                <!--//item-->
              </swiper>
            </div>
          </div>
          <!--//box_p16-->
        </div>
        <!--//box_wrap-->
        <!--//box_wrap-->
        <div class="box_wrap">
          <section class="box_p32" v-if="result_code !== ''">
            <p class="title_05 colorA">활동 요약</p>
            <h2 class="title_01">오늘의 걷기</h2>
            <div class="todayWalking mt4">
              <div class="walkBul tac" v-if="result_code !== 'error'">
                <i class="icoCom_walking">걷기</i>
                <p>
                  <span class="colorA">좋은 걸음</span>으로<br>
                  <span>걸어보세요!</span>
                  <!-- <span>걸으셨군요!</span> -->
                </p>
              </div>
              <p class="contTxt_05 tac">아직 좋은 걸음으로 걸어보지 않으셨네요!<br>
                1분당 100 걸음으로 연속 10분을 걸으면 건강을
                유지하는데 도움이 됩니다.</p>
              <ul class="mt4">
                <li>
                  <i class="icoToday_01">걸음</i>
                  <p class="num">{{ result_code !== 'error' ? todayStepCnt : '0' | commaFnt }}</p>
                  <p class="title_10 colorC">걸음</p>
                </li>
                <li>
                  <i class="icoToday_02">km</i>
                  <p class="num">{{ result_code !== 'error' ? todayDistance : '0'}}</p>
                  <p class="title_10 colorC">km</p>
                </li>
                <li>
                  <i class="icoToday_03">kcal</i>
                  <p class="num">{{ Math.round(todayCalorie) | commaFnt }}</p>
                  <p class="title_10 colorC">kcal</p>
                </li>
              </ul>
              <p class="todayWalking_txt">
                <i class="icoCom_i">i</i>
                <span class="tit">좋은 걸음</span>
                <span class="cont">1분당 100 걸음으로 연속 10분 이상 걷는 것!</span>
              </p>
            </div>
          </section>
          <!--//box_p32-->
<!--          <section class="box_p32">-->
<!--            <p class="title_05 colorA">활동 요약</p>-->
<!--            <h2 class="title_01">오늘의 걷기</h2>-->
<!--            <div class="todayWalking mt4">-->
<!--              <ul>-->
<!--                <li>-->
<!--                  <i class="icoToday_01">걸음</i>-->
<!--                  <p class="num">0</p>-->
<!--                  <p class="title_10 colorC">걸음</p>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <i class="icoToday_02">km</i>-->
<!--                  <p class="num">0</p>-->
<!--                  <p class="title_10 colorC">km</p>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <i class="icoToday_03">KCAL</i>-->
<!--                  <p class="num">0</p>-->
<!--                  <p class="title_10 colorC">KCAL</p>-->
<!--                </li>-->
<!--              </ul>-->
<!--              <p class="todayWalking_txt">-->
<!--                <i class="icoCom_i">i</i>-->
<!--                <span class="tit">좋은 걸음</span>-->
<!--                <span class="cont">1분당 100 걸음으로 연속 10분 이상 걷는 것!</span>-->
<!--              </p>-->
<!--              <div class="btnArea mt6">-->
<!--                <button type="button" class="btn_fill">데이터 연동</button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </section>-->
          <!--//box_p32-->
          <section class="box_p32">
            <h3 class="title_01">오늘의 좋은 걸음</h3>
            <div class="good_walk mt4">
              <p class="good_walkTxt type00"><!--좋지않음 type00 // 보통 type01 // 좋음 type02-->
                아직 좋은 걸음으로 걷지 않으셨어요.<br>
                도전해보세요! 1분당 100 걸음 걷기!
              </p>
              <p class="data_infoTxt mt4">
                총<span class="num">{{ goodStepCnt }}</span>회/일
              </p>
              <div class="bar_graph mt3">
                <!--그래프-->
                <div id="goodWalk_bargraph"></div>
                <!--//그래프-->
                <ul class="time_txt">
                  <li>오전 12시</li>
                  <li>오전 6시</li>
                  <li>오후 12시</li>
                  <li>오후 6시</li>
                </ul>
                <p class="legend">좋은 걸음</p>
              </div>
            </div>
          </section>
          <!--//box_p32-->
          <section class="box_p32">
            <h3 class="title_02">지난 7일간의 평균 걸음</h3>
            <div class=" mt4">
              <p class="data_infoTxt ">
                평균<span class="num">{{ todayStepCnt | commaFnt }}</span>걸음/일
              </p>
              <p class="data_infoTxt" v-if="result_code !== 'error'">({{ weeklyDates }})</p>
              <div class="line_graph mt3">
                <!--그래프-->
                <div id="everWalk_bargraph" class="graph"></div>
                <!--//그래프-->
                <div class="today_box">
                  <div class="today_0">
                    <span>오늘</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!--//box_wrap-->
        <!--
          요거도 사용 안 하나?
        <div class="box_wrap">
          <section class="box_p32">
            <p class="title_05 colorA">내가 먹는 약</p>
            <h2 class="title_01">복약 알람 및 기록</h2>
            <div class="medication_info mt6">
              <ul class="medication_time">
                <li>아침</li>
                <li class="active">점심</li>
                <li>저녁</li>
              </ul>
              <div class="medication_detail">
                <div class="detail_cont active">
                  <div class="medication_notice">
                    <p class="title_01">
                      <i class="icoCom_time">시간</i>
                      <span class="mr1">오후</span>
                      <span>12:30</span>
                    </p>
                    <button type="button" class="btn_border icoBtn"><i class="icoCom_set">설정</i></button>
                  </div>

                  <div class="btnArea mt4">
                    <button type="button" class="btn_border icoBtn disabled"><i class="icoCom_timeRe">설정</i></button>
                    <button type="button" class="btn_fill">약 추가 및 삭제</button>
                  </div>
                </div>
                <div class="detail_cont">내용2<br>내용2</div>
                <div class="detail_cont">내용3<br>내용3</div>
              </div>
            </div>
          </section>
        </div>
          -->

        <!--//box_wrap-->
        <div class="box_wrap" v-show="coachingDetail.clinicId">
          <section class="box_p32">
            <p class="title_05 colorA">주치의 생활코칭</p>
            <h2 class="title_01">주치의 제안 하루 걸음수</h2>
            <div class="suggestion_box mt4">
              <p class="today_txt">
                오늘 목표의 <span class="colorA">{{ Math.round(todayStepPer) }}%</span> 를 걸었습니다.
              </p>
              <p class="goal_walk">
                <i class="icoCom_goal">목표</i>
                목표걸음수 <span class="colorA">{{ clinicStep === null ? 0 : clinicStep | commaFnt }}</span>
              </p>
              <div class="gauge_graph mb7">
                <!--그래프-->
                <div id="suggest_gaugeGraph"></div>
                <!--//그래프-->
                <div class="step_info">
                  <p class="step_num">{{ todayStepCnt | commaFnt }}</p>
                  <p class="step_txt">걸음/일</p>
                </div>
              </div>
              <div class="suggestion_doctor">
                <div class="doctor_info">
                  <div class="doctor_img">
                    <img src="../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
                  </div>
                  <ul>
                    <li class="sugges_date">{{ coachingDetail.regDate }}</li>
                    <li class="sugges_doc">{{ coachingDetail.emplyName }}</li>
                    <li class="sugges_hos">씨젠클리닉</li>
                  </ul>
                </div>
                <div class="doctor_comment">
                  {{ coachingDetail.clinicCoaching }}
                </div>
              </div>
            </div>
          </section>
        </div>
        <!--//box_wrap-->

        <!--//box_wrap-->
        <div class="box_wrap">
          <section class="box_p32 bgColorB"
                   v-if="result_code !== 'error'">
            <p class="title_05 colorA">복약 관리 안내</p>
            <h2 class="title_02">약 먹는 시간을 알려드려요!</h2>
            <p class="contTxt_06 mt4">약 먹는 시간을 자꾸 잊어버리시나요?<br>
              복약 알람 기록기능을 사용해보세요.</p>
          </section>
          <!--//box_p32-->
          <section class="box_p32">
            <p class="title_05 colorA">내가 먹는 약</p>
            <h2 class="title_01">복약 알람 및 기록</h2>
            <div class="btnArea mt4 mb7"
                 v-if="result_code === 'error'">
              <button type="button" class="btn_fill" @click="movePagefnt">+ 알림/약 추가</button>
            </div>

<!--            <template v-for="(item,index) in alarmList">-->
<!--              <div class="medication_box "-->
<!--                   v-if="(alarmList.length > 0 && alarmList) && !(index > 0) || viewList">-->
<!--                <div class="medication_notice">-->
<!--                  <p class="title_01">-->
<!--                    <i class="icoCom_time"></i>-->
<!--                    <span class="mr1">{{ item.takeMedicineTime  }}</span>-->
<!--                    <span></span>-->
<!--                  </p>-->
<!--                  <button type="button" class="btn_border icoBtn"><i class="icoCom_write">작성</i></button>-->
<!--                </div>-->
<!--                <div class="btnArea mt4">-->
<!--                  <button type="button" class="btn_border">모두 복용</button>-->
<!--                </div>-->
<!--                <ul class="medication_list">-->
<!--                  <li v-for="subitem in item.takeMedicineHistoryDetails">-->
<!--                    <p class="medi_name">{{ subitem.takeMedicineDetailsName }}</P>-->
<!--                    <button type="button" class="btn_fill sm">{{ subitem.intakeTakeMedicine === 'N' ? '복용' : '복용완료'}}</button>-->
<!--                  </li>-->
<!--                </ul>-->
<!--              </div>-->
<!--            </template>-->
            <template v-else>
              <div class="btnArea mt4 mb7"
                   v-if="result_code !== 'error'">
                <button class="btn_fill">
                  알림/약 추가
                </button>
                <button class="btn_border">
                  히스토리
                </button>
              </div>
              <div class="medication_box">
                <div class="medication_notice">
                  <p class="title_02">
                    <!--수정 20210803 아이콘 클래스변경 -->
                    <i class="icoCom_time_purple02">시간</i>
                    <!--//수정 20210803 아이콘 클래스변경 -->
                    <span class="mr1">오후</span>
                    <span>12:30</span>
                  </p>
                  <button class="btn_text_size01 colorA"><i class="icoCom_write mr1"></i>수정</button>
                </div>
                <ul class="medication_list">
                  <li class="list_tit">
                    <p class="title_03">복용약 </P>
                    <button type="button" class="btn_text_size02 colorA sm"><i class="icoCom_check mr1">시간</i>전체복용</button>
                  </li>
                  <li>
                    <p class="medi_name">그린노즈 캡슐 </P>
                    <button type="button" class="btn_border sm">복용</button>
                  </li>
                  <li>
                    <p class="medi_name">알레그라디 정</P>
                    <button type="button" class="btn_border sm">복용</button>
                  </li>
                  <li>
                    <p class="medi_name">스니코에스 캡슐</P>
                    <button type="button" class="btn_fill_color02 sm">복용완료</button>
                  </li>
                </ul>
                <div class="btnArea mt4 ">
                  <button type="button" class="btn_fill">저장</button>
                </div>
              </div>
              <!-- //medication_box -->
              <div class="medication_box" v-if="viewList">
                <div class="medication_notice">
                  <p class="title_02">
                    <!--수정 20210803 아이콘 클래스변경 -->
                    <i class="icoCom_time_purple02">시간</i>
                    <!--//수정 20210803 아이콘 클래스변경 -->
                    <span class="mr1">오후</span>
                    <span>12:30</span>
                  </p>
                  <button class="btn_text_size01 colorA"><i class="icoCom_write mr1"></i>수정</button>
                </div>
                <ul class="medication_list">
                  <li class="list_tit">
                    <p class="title_03">복용약 </P>
                    <button type="button" class="btn_text_size02 colorA sm"><i class="icoCom_check mr1">시간</i>전체복용</button>
                  </li>
                  <li>
                    <p class="medi_name">이부프로펜 (진통제)</P>
                    <button type="button" class="btn_border sm">복용</button>
                  </li>
                  <li>
                    <p class="medi_name">아세트아미노펜 (해열)</P>
                    <button type="button" class="btn_border sm">복용</button>
                  </li>
                </ul>
                <div class="btnArea mt4 ">
                  <button type="button" class="btn_fill">저장</button>
                </div>
              </div>
              <div class="btnMore">
                <button type="button" :class=" viewList ? 'close' : ''" @click="listAll"><!-- 아래방향은 클래스 없음. 위로방향은 close 클래스 추가-->
                  <i class="icoArrow_purpleMore">더보기</i>
                </button>
              </div>
            </template>
          </section>
          <div v-if="isOpenModal">
            <component :is="modalGbn" v-bind:selectmodal="modalObj">

            </component>
          </div>
        </div>
        <!--//box_wrap-->
      </div>
      <!--//contents-->
</template>

<script>
import Modal from '@/components/modal/MoveModal.vue'
import HospitalDetailModal from '@/components/hospital/HospitalDetailSmallPopup'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {fetchUserVisitPlan, fetchUserMain, myHospitalList} from '../api'
import dayjs from 'dayjs'

export default {
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide,
    Modal: Modal,
    HospitalDetailModal: HospitalDetailModal
  },
  data () {
    return {
      isLoading: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false
      },
      usr_name: '',
      usr_telnum: '',
      modalTitle: '건강 앱 접근 허용',
      modalContents: '앱에서 이 기기의 건강앱에 접근하려고 합니다.',
      showModal: false,
      result_code: '',
      Linked_data: '',
      userVisitList: [],
      medicationList: [],
      alarmList: [],
      viewList: false,
      aveStepCnt: '',
      todayStepPer: '',
      clinicStep: '',
      weeklyDates: '',
      stepGraph: '',
      todayStepCnt: '',
      todayDistance: '',
      todayCalorie: '',
      distancGraph: null,
      kcalGraph: null,
      coachingDetail: [],
      hospitalChk: [],
      goodStepCnt: '',
      isOpenModal: false
    }
  },
  created () {
    this.usr_name = sessionStorage.getItem('usr_name')
    this.result_code = sessionStorage.getItem('result_code')
    this.showModal = !this.showModal
    // this.init()
    // MedicationTodayList().then(res => {
    //   console.log(res)
    //   if (res.data.data) {
    //     this.alarmList = res.data.data
    //   }
    // }).catch(error => {
    //   console.log(error)
    // })
    fetchUserMain().then(res => {
      if (res.data.resultCode === 'error') {
        goodStepChart([])
        AvgStepFnt(0)
        getChartList(null)
      } else {
        this.userVisitList = res.data.data.magementPlanResponses
        this.coachingDetail = res.data.data.clinicResponse
        this.aveStepCnt = res.data.data.weeklyAvgStepCount
        this.todayStepPer = percentFnt(res.data.data.clinicResponse.missionPercent)
        this.clinicStep = res.data.data.clinicResponse.clinicStepMission
        AvgStepFnt(res.data.data.clinicResponse.missionPercent)
        this.weeklyDates = res.data.data.weeklyDates
        getChartList(res.data.data.healthSteps)
        this.todayStepCnt = res.data.data.todayStepCount
        this.todayDistance = res.data.data.todayDistance
        this.todayCalorie = res.data.data.todayCalorie
        this.Linked_data = res.data.data.shDataSync
        this.goodStepCnt = res.data.data.todayStepInfo.goodStepCount
        goodStepChart(res.data.data.todayStepInfo)
      }
      this.isLoading = true
    }).catch(error => {
      console.log(error)
    })
    myHospitalList().then(res => {
      if (res.data.resultCode === '0000') {
        this.hospitalChk = res.data.data
      }
    }).catch(error => {
      console.log(error)
    })
  },
  filters: {
    commaFnt (val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  methods: {
    movePagefnt: function () {
      if (this.result_code === 'error') {
        this.$router.replace({name: 'Lognin'})
      } else {
        this.$router.replace({name: 'MedicationSetting'})
      }
    },
    listAll: function () {
      this.viewList = !this.viewList
    },
    pageUrl (keyVal) {
      this.$router.push({path: '/hospital/hospitalDetail', query: { dynamicTitle: '문의내용 상세보기', conClass: 'noBg question_detail', searchVal: keyVal }})
    },
    openModal (pCompo, intVal) {
      this.setModalCompo(pCompo, intVal)
      this.isOpenModal = !this.isOpenModal
    },
    setModalCompo (pCompo, intVal) {
      if (pCompo === 'detailPopup') {
        this.modalGbn = HospitalDetailModal
        this.modalObj = intVal
      }
    }
  },
  mounted () {
    const objectValue = {
      searchHospital: 1
    }
    fetchUserVisitPlan(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.userVisitList = res.data.data
        if (res.data.data.length === 1) {
          this.swiperOption.slidesPerView = 1
        } else {
          this.swiperOption.slidesPerView = 1.12
        }
        this.isLoading = true
      }
    }).catch(error => {
      console.log(error)
    })
  }
}

function goodStepChart (obj) {
  let steplist = obj.todaySetpCounts

  var dataBar = [{
    'time': '00시',
    'value': 0
  }, {
    'time': '01시',
    'value': null
  }, {
    'time': '02시',
    'value': null
  }, {
    'time': '03시',
    'value': null
  }, {
    'time': '04시',
    'value': null
  }, {
    'time': '05시',
    'value': null
  }, {
    'time': '06시',
    'value': null
  }, {
    'time': '07시',
    'value': null
  }, {
    'time': '08시',
    'value': null
  }, {
    'time': '09시',
    'value': null
  }, {
    'time': '10시',
    'value': null
  }, {
    'time': '11시',
    'value': null
  }, {
    'time': '12시',
    'value': null
  }, {
    'time': '13시',
    'value': null
  }, {
    'time': '14시',
    'value': null
  }, {
    'time': '15시',
    'value': null
  }, {
    'time': '16시',
    'value': null
  }, {
    'time': '17시',
    'value': null
  }, {
    'time': '18시',
    'value': null
  }, {
    'time': '19시',
    'value': null
  }, {
    'time': '20시',
    'value': null
  }, {
    'time': '21시',
    'value': null
  }, {
    'time': '22시',
    'value': null
  }, {
    'time': '23시',
    'value': null
  }]

  if (steplist !== undefined) {
    steplist.forEach(function (item, index) {
      let searchTarget = item.pd_standard_hour < 10 ? '0' + item.pd_standard_hour + '시' : item.pd_standard_hour + '시'
      const target = dataBar.find(e => e.time === searchTarget)
      target.value = item.pd_count
      target.color = item.goodStep === 'Y' ? '#6765E9' : '#60CFE3'
      // target.bullet = item.goodStep === 'Y' ? '../../src/assets/resources/images/common/rec.png' : '' // 보라색블릿
    })
  }

  // var chartBar =
  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.makeChart('goodWalk_bargraph', {
    'type': 'serial',
    'columnWidth': 0.5,
    'autoMarginOffset': 4,
    'marginRight': 0,
    'marginLeft': 0,
    'marginBottom': 0,
    'marginTop': 10,
    'chartCursor': {
      'zoomable': false
    },
    'valueAxes': [{
      'axisAlpha': 0,
      'gridAlpha': 0.7,
      'gridColor': '#E6E9F4',
      'axisColor': '#E6E9F4',
      'position': 'right',
      'color': '#9BA0BC',
      'fontSize': 10
    }],
    'categoryField': 'time',
    'categoryAxis': {
      'axisAlpha': 0,
      'gridAlpha': 0,
      'gridPosition': 'start',
      'tickPosition': 'start',
      'tickLength': 20,
      'gridColor': '#E6E9F4',
      'axisColor': '#E6E9F4',
      'labelsEnabled': false,
      'balloonEnabled': false
    },
    'graphs': [{
      'valueField': 'value',
      'balloonText': '[[category]]: <b>[[value]]</b>',
      'type': 'column',
      'lineAlpha': '0',
      'fillAlphas': '1',
      'fillColors': '#60CFE3',
      'colorField': 'color',
      'customBulletField': 'bullet',
      'bulletOffset': '6',
      'bulletSize': '6'
    }],
    'dataProvider': dataBar
  })
}

function getChartList (obj) {
  var dataLine = obj
  var weekAvgStep = []

  if (obj === null) {
    for (let i = 1; i < 8; ++i) {
      var datsSet = new Date()
      datsSet.setDate(datsSet.getDate() + (i - 7))
      weekAvgStep.push({
        date: dayjs(datsSet).format('MM/DD'),
        day: i,
        value: 0,
        today: i === 7 ? 'today' : ''
      })
    }
  } else {
    dataLine.forEach(function (item, index) {
      weekAvgStep.push({
        date: item.stepDate,
        day: item.stepWeek,
        value: item.stepCount,
        today: index === 6 ? 'today' : ''
      })
    })
  }
  // eslint-disable-next-line no-undef,no-unused-expressions
  var chartLine = AmCharts.makeChart('everWalk_bargraph',
    {
      'type': 'serial',
      'autoMarginOffset': 0,
      'marginTop': 70,
      'marginLeft': 0,
      'marginRight': 0,
      'addClassNames': true,
      'color': '#C1C7DE',
      'valueAxes': [{
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelsEnabled': false,
        'balloonEnabled': false
      }],
      'balloon': {
        'borderThickness': 0,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'type': 'smoothedLine',
        'balloon': {
          'drop': true, // 풍선모양
          'color': '#ffffff',
          'fillColor': '#6765E9',
          'fillAlpha': 1,
          'borderAlpha': 0
        },
        'bullet': 'round',
        'bulletBorderAlpha': 0,
        'useLineColorForBulletBorder': true,
        'lineColor': '#60CFE3',
        'valueField': 'value',
        'balloonText': '<span style=font-size:12px;>[[value]]</span>',
        'lineThickness': 2,
        'bulletColor': '#60CFE3',
        'bulletSize': 5,
        'bulletSizeField': 'bulletSize'
      }],
      'chartCursor': {
        'cursorColor': '#6765E9', // 커서 세로색상
        'categoryBalloonEnabled': 0,
        'zoomable': false
      },
      'categoryField': 'date',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 1,
        'gridColor': '#E6E9F4',
        'fontSize': 14,
        'boldLabels': true,
        'classNameField': 'today'
      },
      'dataProvider': weekAvgStep
    }
  )
  // today 요일 들어간 배열 순서로 스타일 먹이는 스크립트 (today_00=월 ~ today_06=일)
  let todayArr = chartLine.dataProvider.filter(function (dayname) { return dayname.today === 'today' })
  let todaynum = chartLine.dataProvider.findIndex(findToday)
  function findToday (element) {
    if (element.today === 'today') return true
  }
  todayArr[0].bulletSize = 10 // 블릿크기
  let todaybox = (document).getElementsByClassName('today_0')
  for (var i = 0; i < todaybox.length; i++) {
    todaybox.item(i).className += todaynum
  }
}

function AvgStepFnt (obj) {
  let percent = percentFnt(Math.round(obj))
  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.makeChart('suggest_gaugeGraph',
    {
      'type': 'gauge',
      'autoMarginOffset': 0,
      'chartCursor': {
        'zoomable': false
      },
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'radius': '80%',
        'startValue': 0,
        'endValue': 100,
        'startAngle': -140,
        'endAngle': 140,
        'unit': '%',
        'bands': [{
          'color': '#E6E9F4',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%'
        }, {
          // 보라색게이지
          'color': '#6765E9',
          'startValue': 0,
          'endValue': percent,
          'radius': '100%',
          'innerRadius': '85%'
        }]
      }]
    })
  // chartLine.creditsPosition = "top-right";//워터마크 위치
}

function percentFnt (val) {
  var percentVal = 0
  if (val > 100) {
    percentVal = 100
  } else {
    percentVal = val
  }
  return percentVal
}
</script>
