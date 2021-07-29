<template>
  <div>
    <!--  container  -->
    <div class="container main">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="logo">viocross</span>
          </h1>
          <button type="button" class="btn_left">
            <i class="ico_bugger">메뉴</i>
          </button>
          <a href="#" class="btn_right">
            <div class="notic_ico">
              <i class="ico_bell">알림</i>
              <p class="num"><span>+99</span></p>
            </div>
          </a>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">

        <!--  안쓰는건가?
        <div class="box_wrap">
          <section class="box_p32">
            <p class="title_05 colorA">안내</p>
            <h2 class="title_02">환영합니다!</h2>
            <div class="">
              <div class="pairing_gray">
                <i class="icoCom_pairing">연동</i>
              </div>
              <p class="contTxt_05 tac">디바이스 건강 데이터를 연동해서<br>
                viocross를 시작해보세요!</p>
              <div class="btnArea mt4">
                <button type="button" class="btn_fill">데이터 연동</button>
              </div>
            </div>
          </section>
        </div>
        -->

        <div class="box_wrap bgNone">
          <section class="box_p32 bgColorB">
            <p class="title_05 colorA">서비스 이용 안내</p>
            <h2 class="title_02">환영합니다!</h2>
            <p class="contTxt_06 mt4">로그인을 통해 건강 데이터를 연동해보세요.<br>
              나의 활동을 모니터링하고 병원에서 의사에게
              직접 라이프 코칭을 받아 보실 수 있습니다.</p>
            <div class="wellcome_img">
              <img src="../assets/resources/images/common/img_wellcome.png" alt="코칭이미지">
            </div>
            <div class="btnArea mt4">
              <button type="button" class="btn_fill">로그인</button>
            </div>
          </section>
          <!--//box_p32-->
          <section class="box_p32 bgColorB">
            <p class="title_05 colorA">데이터 연동 안내</p>
            <h2 class="title_02">건강 데이터를 연동하세요!</h2>
            <p class="contTxt_06 mt4">나의 활동을 모니터링하고 병원에서 의사에게
              직접 라이프 코칭을 받아 보실 수 있습니다.</p>
            <div class="pairingBox">
              <p class="iconBox">
                <i class="icon_iosHealth">연동</i>
                <span>건강</span>
                <!--삼성헬스
								<i class="icon_samsungHealth">연동</i>
								<span>삼성헬스</span>
								-->
              </p>
              <p class="pairing_white">
                <i class="icoCom_pairing">연동</i>
              </p>
              <p class="iconBox">
                <i class="icon_viocross">연동</i>
                <span>셀리메디</span>
              </p>
            </div>
            <!-- <div class="pairingBox">
              <p class="iconBox">
                <i class="icon_samsungHealth">연동</i>
                <span>건강</span>
              </p>
              <p class="pairing_white">
                <i class="icoCom_pairing">연동</i>
              </p>
              <p class="iconBox">
                <i class="icon_viocross">연동</i>
                <span>셀리메디</span>
              </p>
            </div> -->
            <div class="btnArea mt4">
              <button type="button" class="btn_fill">데이터 연동</button>
            </div>
          </section>
          <!--//box_p32-->
          <div class="box_p16 bgColorB">
            <div class="swiper-container reserSlide">
              <ul class="swiper-wrapper reservation_list">
                <li class="swiper-slide item">
                  <div class="tit">
                    <p>내일 가야 할 병원</p>
                  </div>
                  <div class="reservation_info">
                    <div class="reser_dDay red">D-<span>1</span></div>
                    <ul class="ico_listStyle01">
                      <li class="list_item">
                        <i class="icoCom_day_purple">예약일</i>
                        <span>2021년 7월 6일 (화)</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_time_purple">예약시간</i>
                        <span>오후 3:00</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_hos_purple">예약병원</i>
                        <span>씨젠클리닉</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_memo_purple">예약메모</i>
                        <span>종합건강검진</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--//item-->
                <li class="swiper-slide item">
                  <div class="tit">
                    <p>내일 가야 할 병원</p>
                  </div>
                  <div class="reservation_info">
                    <div class="reser_dDay">D-<span>2</span></div>
                    <ul class="ico_listStyle01">
                      <li class="list_item">
                        <i class="icoCom_day_purple">예약일</i>
                        <span>2021년 7월 6일 (화)</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_time_purple">예약시간</i>
                        <span>오후 3:00</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_hos_purple">예약병원</i>
                        <span>씨젠클리닉</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_memo_purple">예약메모</i>
                        <span>종합건강검진</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--//item-->
                <li class="swiper-slide item">
                  <div class="tit">
                    <p>내일 가야 할 병원</p>
                  </div>
                  <div class="reservation_info">
                    <div class="reser_dDay">D-<span>2</span></div>
                    <ul class="ico_listStyle01">
                      <li class="list_item">
                        <i class="icoCom_day_purple">예약일</i>
                        <span>2021년 7월 6일 (화)</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_time_purple">예약시간</i>
                        <span>오후 3:00</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_hos_purple">예약병원</i>
                        <span>씨젠클리닉</span>
                      </li>
                      <li class="list_item">
                        <i class="icoCom_memo_purple">예약메모</i>
                        <span>종합건강검진</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <!--//item-->
              </ul>
            </div>
          </div>
          <!--//box_p16-->
        </div>
        <!--//box_wrap-->
        <!--//box_wrap-->
        <div class="box_wrap">
          <section class="box_p32">
            <p class="title_05 colorA">활동 요약</p>
            <h2 class="title_01">오늘의 걷기</h2>
            <div class="todayWalking mt4">
              <div class="walkBul tac">
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
                  <p class="num">10,000</p>
                  <p class="title_10 colorC">걸음</p>
                </li>
                <li>
                  <i class="icoToday_02">km</i>
                  <p class="num">1.4</p>
                  <p class="title_10 colorC">km</p>
                </li>
                <li>
                  <i class="icoToday_03">KCAL</i>
                  <p class="num">1,000</p>
                  <p class="title_10 colorC">KCAL</p>
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
          <section class="box_p32">
            <p class="title_05 colorA">활동 요약</p>
            <h2 class="title_01">오늘의 걷기</h2>
            <div class="todayWalking mt4">
              <ul>
                <li>
                  <i class="icoToday_01">걸음</i>
                  <p class="num">0</p>
                  <p class="title_10 colorC">걸음</p>
                </li>
                <li>
                  <i class="icoToday_02">km</i>
                  <p class="num">0</p>
                  <p class="title_10 colorC">km</p>
                </li>
                <li>
                  <i class="icoToday_03">KCAL</i>
                  <p class="num">0</p>
                  <p class="title_10 colorC">KCAL</p>
                </li>
              </ul>
              <p class="todayWalking_txt">
                <i class="icoCom_i">i</i>
                <span class="tit">좋은 걸음</span>
                <span class="cont">1분당 100 걸음으로 연속 10분 이상 걷는 것!</span>
              </p>
              <div class="btnArea mt6">
                <button type="button" class="btn_fill">데이터 연동</button>
              </div>
            </div>
          </section>
          <!--//box_p32-->
          <section class="box_p32">
            <h3 class="title_01">오늘의 좋은 걸음</h3>
            <div class="good_walk mt4">
              <p class="good_walkTxt type00"><!--좋지않음 type00 // 보통 type01 // 좋음 type02-->
                아직 좋은 걸음으로 걷지 않으셨어요.<br>
                도전해보세요! 1분당 100 걸음 걷기!
              </p>
              <p class="data_infoTxt mt4">
                총<span class="num">0</span>회/일
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
                평균<span class="num">100,000</span>걸음/일
              </p>
              <p class="data_infoTxt">(2021년 6월 19일~25일)</p>
              <div class="line_graph mt3">
                <!--그래프-->
                <div id="everWalk_bargraph"></div>
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
        <div class="box_wrap">
          <section class="box_p32 bgColorB">
            <p class="title_05 colorA">복약 관리 안내</p>
            <h2 class="title_02">약 먹는 시간을 알려드려요!</h2>
            <p class="contTxt_06 mt4">약 먹는 시간을 자꾸 잊어버리시나요?<br>
              복약 알람 기록기능을 사용해보세요.</p>
          </section>
          <!--//box_p32-->
          <section class="box_p32">
            <p class="title_05 colorA">내가 먹는 약</p>
            <h2 class="title_01">복약 알람 및 기록</h2>
            <div class="btnArea mt4 mb7">
              <button type="button" class="btn_fill">+ 알림/약 추가</button>
            </div>
            <div class="btnArea mt4 mb7">
              <a href="/medicine/medicationSetting" class="btn_fill">
                알림/약 추가
              </a>
              <a href="/medicine/medicationHistory" class="btn_border">
                히스토리
              </a>
            </div>
            <div class="medication_box ">
              <div class="medication_notice">
                <p class="title_01">
                  <i class="icoCom_time">시간</i>
                  <span class="mr1">오후</span>
                  <span>12:30</span>
                </p>
                <button type="button" class="btn_border icoBtn"><i class="icoCom_write">작성</i></button>
              </div>
              <div class="btnArea mt4">
                <button type="button" class="btn_border">모두 복용</button>
              </div>
              <ul class="medication_list">
                <li>
                  <p class="medi_name">당뇨약당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill_color02 sm">복용완료</button>
                </li>
              </ul>
            </div>
            <!---->
            <div class="medication_box ">
              <div class="medication_notice" >
                <p class="title_01">
                  <i class="icoCom_time">시간</i>
                  <span class="mr1">오후</span>
                  <span>12:30</span>
                </p>
                <button type="button" class="btn_border icoBtn"><i class="icoCom_write">작성</i></button>
              </div>
              <div class="btnArea mt4">
                <button type="button" class="btn_border">모두 복용</button>
              </div>
              <ul class="medication_list">
                <li>
                  <p class="medi_name">당뇨약당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill_color02 sm">복용완료</button>
                </li>
              </ul>
            </div>
            <!---->
            <div class="medication_box ">
              <div class="medication_notice">
                <p class="title_01">
                  <i class="icoCom_time">시간</i>
                  <span class="mr1">오후</span>
                  <span>12:30</span>
                </p>
                <button type="button" class="btn_border icoBtn"><i class="icoCom_write">작성</i></button>
              </div>
              <div class="btnArea mt4">
                <button type="button" class="btn_border">모두 복용</button>
              </div>
              <ul class="medication_list">
                <li>
                  <p class="medi_name">당뇨약당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill sm">복용</button>
                </li>
                <li>
                  <p class="medi_name">당뇨약</P>
                  <button type="button" class="btn_fill_color02 sm">복용완료</button>
                </li>
              </ul>
            </div>
            <!---->
          </section>
        </div>
        <!--//box_wrap-->
        <div class="box_wrap">
          <section class="box_p32">
            <p class="title_05 colorA">주치의 생활코칭</p>
            <h2 class="title_01">주치의 제안 하루 걸음수</h2>
            <div class="suggestion_box mt4">
              <p class="today_txt">
                오늘 목표의 <span class="colorA">60%</span> 를 걸었습니다.
              </p>
              <p class="goal_walk">
                <i class="icoCom_goal">목표</i>
                목표걸음수 <span class="colorA">99,999</span>
              </p>
              <div class="gauge_graph mb7">
                <!--그래프-->
                <div id="suggest_gaugeGraph"></div>
                <!--//그래프-->
                <div class="step_info">
                  <p class="step_num">99,999</p>
                  <p class="step_txt">걸음/일</p>
                </div>
              </div>
              <div class="suggestion_doctor">
                <div class="doctor_info">
                  <div class="doctor_img">
                    <img src="../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
                  </div>
                  <ul>
                    <li class="sugges_date">2021년 6월 12일</li>
                    <li class="sugges_doc">김종석 원장님</li>
                    <li class="sugges_hos">씨젠클리닉</li>
                  </ul>
                </div>
                <div class="doctor_comment">
                  씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다!
                </div>
              </div>
            </div>
          </section>
        </div>
        <!--//box_wrap-->
        <div class="box_wrap">
          <section class="box_p32 pb0">
            <p class="title_05 colorA">병원가는날</p>
            <h2 class="title_01">예약내역</h2>
            <ul class="reservation_list mt4">
              <li class="item">
                <div class="reservation_info">
                  <div class="reser_dDay">D-<span>2</span></div>
                  <ul class="ico_listStyle01">
                    <li class="list_item">
                      <i class="icoCom_day_purple">예약일</i>
                      <span>2021년 7월 6일 (화)</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_time_purple">예약시간</i>
                      <span>오후 3:00</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_hos_purple">예약병원</i>
                      <span>씨젠클리닉</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_memo_purple">예약메모</i>
                      <span>종합건강검진</span>
                    </li>
                  </ul>
                </div>
              </li>
              <!--//item-->
              <li class="item">
                <div class="reservation_info">
                  <div class="reser_dDay">D-<span>2</span></div>
                  <ul class="ico_listStyle01">
                    <li class="list_item">
                      <i class="icoCom_day_purple">예약일</i>
                      <span>2021년 7월 6일 (화)</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_time_purple">예약시간</i>
                      <span>오후 3:00</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_hos_purple">예약병원</i>
                      <span>씨젠클리닉</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_memo_purple">예약메모</i>
                      <span>종합건강검진</span>
                    </li>
                  </ul>
                </div>
              </li>
              <!--//item-->
              <li class="item">
                <div class="reservation_info">
                  <div class="reser_dDay">D-<span>999</span></div>
                  <ul class="ico_listStyle01">
                    <li class="list_item">
                      <i class="icoCom_day_purple">예약일</i>
                      <span>2021년 7월 6일 (화)</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_time_purple">예약시간</i>
                      <span>오후 3:00</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_hos_purple">예약병원</i>
                      <span>씨젠클리닉</span>
                    </li>
                    <li class="list_item">
                      <i class="icoCom_memo_purple">예약메모</i>
                      <span>종합건강검진</span>
                    </li>
                  </ul>
                </div>
              </li>
              <!--//item-->
            </ul>
            <div class="btnArea">
              <button type="button" class="btn_text_size02 colorA p16_0">모두보기</button>
              <!-- <button type="button" class="btn_fill">취소</button> -->
            </div>
          </section>
        </div>
        <!--//box_wrap-->
      </div>
      <!--//contents-->
      <!-- footer -->
      <div class="footer">
        <ul>
          <li class="on">
            <a href="#">
              <i class="ico_home"></i>
              <span>홈</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ico_doc"></i>
              <span>주치의</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- //footer -->
    </div>
    <!--  //container  -->

    <!-- aside  -->
    <div class="wrapAside">
      <div class="contAside">

      </div>
    </div>
    <!-- //aside  -->

    <!-- ##### Popup -->
    <div class="modal-mask" style="display: none;">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>건강 앱 접근 허용</h3>
          </div>
          <div class="modal-body">
            <p>앱에서 이 기기의 건강앱에<br> 접근하려고 합니다1.</p>
          </div>
          <div class="modal-footer">
            <button type="button">취소</button>
            <button type="button" class="modal-default-button">확인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/modal/MoveModal.vue'

export default {
  data () {
    return {
      usr_name: '',
      usr_telnum: '',
      arr_data: [1, 2, 3],
      modalTitle: '건강 앱 접근 허용',
      modalContents: '앱에서 이 기기의 건강앱에 접근하려고 합니다.',
      showModal: false
    }
  },
  created () {
    this.usr_name = sessionStorage.getItem('usr_name')
    this.showModal = !this.showModal
  },
  components: {
    Modal: Modal
  }
}
</script>

