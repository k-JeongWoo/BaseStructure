<template>
  <!--contents-->
  <div class="contents">
    <div class="navShow_page" >
      <div class="box_wrap">
        <div class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">최근 내원 이력</p>
            <h2 class="title_01">진료/검사/치료 이력</h2>
            <a href="" class="btn_right">
              <i class="icoArrow_blackMore">더보기</i>
            </a>
          </div>
          <div class="visit_history_wrap box_shadow01">
            <div class="visit_history_detail type01"><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
              <h2 class="title_03">진료</h2>
              <div class="suggestion_doctor">
                <div class="doctor_info">
                  <div class="doctor_img">
                    <img src="../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
                  </div>
                  <ul>
                    <li class="sugges_date">2021년 6월 12일</li>
                    <li class="sugges_doc">김종석 원장님</li>
                  </ul>
                </div>
              </div>
              <!--//suggestion_doctor-->
              <div class="doctor_comment">
                <h3 class="title_07">진료기록</h3>
                <div class="cont">
                  <p>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! </p>
                </div>
                <h3 class="title_07">주의사항</h3>
                <div class="cont">
                  <p>씨젠클리닉 김종석입니다. 체형관리를 위해서는 조금 더 많이 걸으셔야 합니다. 최소 하루 10,000보를 걷기를 권해드립니다. 화이팅입니다! </p>
                </div>
              </div>
              <!--//doctor_comment-->
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
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_01 sm"></i><span>마음</span><!-- icoProgram_01 : 마음 / icoProgram_02 : 신경인지 / icoProgram_03 : 심혈관 / icoProgram_04 : 근골격 / icoProgram_05 : 대사 / icoProgram_06 : 면역 / icoProgram_07 : 피부&체형 /icoProgram_08 : 기타  -->
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_02 sm"></i><span>신경인지</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_03 sm"></i><span>심혈관</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_04 sm"></i><span>근골격</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_05 sm"></i><span>대사</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_06 sm"></i><span>면역</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_07 sm"></i><span>피부 &amp; 체형</span>
              </a>
            </li>
            <li class="list_item">
              <a href="" class="btn_health_state">
                <i class="icoProgram_08 sm"></i><span>기타</span>
              </a>
            </li>
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
            <a href="next_visitDate.html" class="btn_right">
              <i class="icoArrow_blackMore">더보기</i>
            </a>
          </div>
          <p class="infomation_box mb4">
            <i class="icoCom_i">i</i>
            <span class="tit">예상 내원일</span>
            <span class="cont">진료시 안내한 내원일로 결정된 예약일이 아니므로 별도 전화예약이 필요합니다. </span>
          </p>
          <div class="btnArea mb4">
            <a href="tel:82+03212345678" class="btn_fill">전화 예약하기</a>
          </div>
          <ul class="reservation_list">
            <li class="item">
              <div class="reservation_info">
                <div class="reser_dDay ">D-<span>2</span></div><!--class="blue" 추가시 디데이 배경색상변경-->
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
                    <i class="icoCom_memo_purple">예약메모</i>
                    <span>종합건강검진</span>
                  </li>
                </ul>
              </div>
            </li>
            <!--//item-->
            <li class="item">
              <div class="reservation_info">
                <div class="reser_dDay blue">D-<span>22</span></div><!--class="blue" 추가시 디데이 배경색상변경-->
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
                    <i class="icoCom_memo_purple">예약메모</i>
                    <span>종합건강검진</span>
                  </li>
                </ul>
              </div>
            </li>
            <!--//item-->
            <li class="item">
              <div class="reservation_info">
                <div class="reser_dDay blue">D-<span>999</span></div><!--class="blue" 추가시 디데이 배경색상변경-->
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
                    <i class="icoCom_memo_purple">예약메모</i>
                    <span>종합건강검진</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">155.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                <h3 class="title_07 mb1">체지방률</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
            <a href="recent_question.html" class="btn_right">
              <i class="icoArrow_blackMore">더보기</i>
            </a>
          </div>
          <div class="btnArea">
            <a href="question_pop.html" class="btn_fill">문의하기</a>
          </div>
          <div class="question_list">
            <div class="question_item">
              <div class="itme_tit">
                <p class="title_07">2021년 7월 1일</p>
                <p class="rabel_fill radius wait"><!-- wait 클래스 추가시 빨간색 // 없는경우 파란색 -->
                  답변대기중
                </p>
              </div>
              <div class="item_cont">
                <p class="title_10">궁금한 것이 있어요궁금한 것이 있어요.궁금한 것이 있어요.궁금한 것이 있어요.궁금한 것이 있어요.궁금한 것이 있어요.. 방문하고 싶은데 궁금한 것이 있어요. 방문하고 싶은데 궁금한 것이 있어요. 방문하고 싶은데 원장님</p>
              </div>
            </div>
            <!--//item-->
            <div class="question_item">
              <div class="itme_tit">
                <p class="title_07">2021년 7월 1일</p>
                <p class="rabel_fill radius">
                  답변완료
                </p>
              </div>
              <div class="item_cont">
                <p class="title_10">궁금한 것이 있어요. 방문하고 싶은데 궁금한 것이 있어요. 방문하고 싶은데 궁금한 것이 있어요. 방문하고 싶은데 원장님...</p>
              </div>
            </div>
            <!--//item-->
          </div>
          <!--//question_list-->
        </section>
      </div>
      <!--//box_wrap-->

      <div class="box_wrap">
        <section class="box_p32">
          <div class="tit_wrap mb4">
            <p class="title_05 colorA">병원안내</p>
            <h2 class="title_01">씨젠클리닉</h2>
            <a href="hospital_02.html" class="btn_right">
              <i class="icoArrow_blackMore">더보기</i>
            </a>
          </div>
          <h2 class="title_02"><span class="mr2">수요일</span> <span>9:00 ~ 18:00</span></h2>
          <p class="title_09 mt3">
            서울 송파구 오금로 91 태원빌딩 12층
          </p>
          <ul class="medical_subject mt3">
            <li class="rabel_fill radius bgColor06 color0">외래진료</li>
            <li class="rabel_fill radius bgColor06 color0">종합 건강검진</li>
            <li class="rabel_fill radius bgColor06 color0">가정의학과</li>
          </ul>
        </section>
      </div>
      <!--//box_wrap-->

    </div>
  </div>
  <!--//contents-->
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
