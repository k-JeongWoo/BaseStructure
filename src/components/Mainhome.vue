<template>
  <!--  container  -->
  <div class="container main">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <button @click="$i18n.locale='ko'">한국어</button>
          <button @click="$i18n.locale='en'">English</button>
          <h2 class="title_02">{{ $t('default.hello') }}안녕하세요, <router-link :to="{path: '/user/userdetail', query: {name: usr_name, arr_data: arr_data}}"><span class="colorA">{{ usr_name }}</span></router-link> 님!</h2>

          <!-- <h2 class="title_02">반갑습니다! </h2> -->
          <div class="mt4">
            <!--
          <p class="contTxt_06">진료 프로그램을 선택하고<br>
            주치의 선생님에게 더 자세한 진료를 받아보세요.</p>
          <div class="btnArea mt4">
            <button type="button" class="btn_fill">진료 프로그램 선택하기</button>
          </div>
        -->
            <div class="tit_wrap">
              <h2 class="title_05">선택 진료 프로그램 </h2>
              <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
            </div>
            <p class="program_list">
              <button type="button" class="program_item bgColor01">마음</button>
              <button type="button" class="program_item bgColor02">신경인지</button>
              <button type="button" class="program_item bgColor03">심혈관</button>
              <button type="button" class="program_item bgColor04">근골격</button>
              <button type="button" class="program_item bgColor05">대사</button>
              <button type="button" class="program_item bgColor06">면역</button>
              <button type="button" class="program_item bgColor07">피부 & 체형</button>
            </p>

          </div>
        </section>
      </div>
      <!---->
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05">나의 건강 신호등</h2>
          <div class="btnArea mt6">
            <router-link to="/screening/screeningInfo"><button type="button" class="btn_border">건강검진 결과 불러오기</button></router-link>
          </div>
          <div class="swiper-container metabolism_list mt6">
            <div class="swiper-wrapper">
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>대사
                  </h2>
                  <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
                </div>
                <div class="metabolism_cont">
                  <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이
                    들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
                </div>
                <p class="metabolism_state state01">
                  <!-- 클래스없음 :: 데이터 없음 /  state01 :: 좋음 / state02 :: 양호 / state03 :: 위험 -->
                  좋음
                </p>
              </div>
              <!---->
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>면역
                  </h2>
                  <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
                </div>
                <div class="metabolism_cont">
                  <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이
                    들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
                </div>
                <p class="metabolism_state state02">
                  <!-- 클래스없음 :: 데이터 없음 /  state01 :: 좋음 / state02 :: 양호 / state03 :: 위험 -->
                  양호
                </p>
              </div>
              <!---->
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>심혈관
                  </h2>
                  <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
                </div>
                <div class="metabolism_cont">
                  <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이
                    들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
                </div>
                <p class="metabolism_state state03">
                  <!-- 클래스없음 :: 데이터 없음 /  state01 :: 좋음 / state02 :: 양호 / state03 :: 위험 -->
                  위험
                </p>
              </div>
              <!---->
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>피부&체형
                  </h2>
                  <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
                </div>
                <div class="metabolism_cont">
                  <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이
                    들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
                </div>
                <p class="metabolism_state ">
                  <!-- 클래스없음 :: 데이터 없음 /  state01 :: 좋음 / state02 :: 양호 / state03 :: 위험 -->
                  데이터 없음
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
      </div>
      <!---->
      <div class="box_wrap">
        <div class="box_shadow01">
          <div class="tit_wrap">
            <router-link to="/screening/screeningResult"><h2 class="title_05">나의 건강 정보</h2></router-link>
            <a href="" class="btn_right"><router-link to="/screening/screeningResult"><i class="ico_more"></i></router-link>더보기</a>
          </div>
        </div>
      </div>
      <!---->
      <!---->
      <div class="box_wrap">
        <div class="box_shadow01">
          <div class="tit_wrap">
            <router-link to="/medicine/Medicine"><h2 class="title_05">진료 및 투약 정보</h2></router-link>
            <a href="" class="btn_right"><router-link to="/medicine/Medicine"><i class="ico_more"></i></router-link>더보기</a>
          </div>
        </div>
      </div>
      <!---->
      <div class="box_wrap">
        <div class="box_shadow01">
          <div class="tit_wrap">
            <h2 class="title_05">걸음수</h2>
            <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
            <p class="contTxt_06 colorC">
              <span>20:00</span>
            </p>
          </div>
          <div class="step_wrap">
            <div class="donut_wrap no_data">
              <!-- data 없는경우에 no_data-->
              <!---->
              <div class="donut_graph">
                <canvas id="chart" style="width: 83px; height:83px;" class="donut_chart"></canvas>
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
            <p>앱에서 이 기기의 건강앱에<br> 접근하려고 합니다.</p>
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

