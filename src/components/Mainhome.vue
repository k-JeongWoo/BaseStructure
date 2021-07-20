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
              <!---->
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>근골격
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
              <!---->
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>기타 주치의 소견
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
            </div>
            <!-- slider pagenation -->
            <div class="swiper-pagination"></div>
            <!-- //slider pagenation -->
          </div>
        </section>
      </div>
      <!---->
      <div class="box_wrap">
        <div class="box_shadow01">
          <h2 class="title_05">오늘의 복약 정보</h2>
          <div class="medication_info mt6">
            <ul class="medication_time">
              <li class="active">아침</li>
              <li>점심</li>
              <li>저녁</li>
            </ul>
            <div class="medication_detail">
              <div class="detail_cont active">
                <div class="medication_notice">
                  <p class="title_05"><span class="colorA">오전 8 : 30</span> 에 복약하세요!</p>
                  <button type="button" class="rabel_fill">알람설정</button>
                </div>
                <div class="medication_detailList">
                  <p class="select">
                    <select>
                      <option value="">위/식도 역류병</option>
                    </select>
                  </p>
                  <div class="contTxt_06 mt3">
                    <p class="colorC">타이레놀피엠정</p>
                  </div>
                </div>
                <div class="btnArea mt4">
                  <button type="button" class="btn_border">복약</button>
                </div>
              </div>
              <div class="detail_cont">내용2<br>내용2</div>
              <div class="detail_cont">내용3<br>내용3</div>
            </div>
          </div>
          <!-- <div class="btnArea mt4">
        <button type="button" class="btn_border">+ 복약 정보 추가하기</button>
      </div> -->
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
              <!---->
              <div class="step_txt">
                <p class="step">
                  <span class="graph_num">10,000</span>걸음
                </p>
                <p class="contTxt_06">현재까지 이번 달의 평균 걸음수가 지난 달보다 <span>늘</span>었습니다.</p>
              </div>
            </div>
            <ul class="graph_horizontal">
              <li>
                <!-- data 없는경우에 no_data-->
                <div class="graph_tit">
                  <p class="month">
                    <span>5</span>월
                  </p>
                  <p class="step">
                    <span class="graph_num">1,234</span>걸음/일
                  </p>
                </div>
                <div class="graph_bar">
                  <p class="graph_percent" style="width: 100%;"></p>
                </div>
              </li>
              <li class="no_data">
                <!-- data 없는경우에 no_data-->
                <div class="graph_tit">
                  <p class="month">
                    <span>4</span>월
                  </p>
                  <p class="step">
                    <span class="graph_num">0</span>걸음/일
                  </p>
                </div>
                <div class="graph_bar">
                  <p class="graph_percent" style="width: 0%;"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!---->
      <div class="box_wrap box_Flex">
        <div class="col_01">
          <div class="box_shadow01">
            <div class="tit_wrap">
              <h2 class="title_05">수면 시간</h2>
              <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
              <p class="contTxt_06 colorC">
                <span>20:00</span>
              </p>
            </div>
            <div class="mainMy_info">
              <!-- data 없는경우에 no_data-->
              <span class="num">12</span>시간&nbsp; <span class="num">59</span>분
            </div>
          </div>
          <div class="box_shadow01">
            <div class="tit_wrap">
              <h2 class="title_05">심박수</h2>
              <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
              <p class="contTxt_06 colorC">
                <span>20:00</span>
              </p>
            </div>
            <div class="mainMy_info no_data">
              <!-- data 없는경우에 no_data-->
              <span class="num">0</span>Bpm
            </div>
          </div>
        </div>
        <div class="col_01 row_2">
          <div class="box_shadow01">
            <div class="tit_wrap">
              <h2 class="title_05">혈압</h2>
              <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
              <p class="contTxt_06 colorC">
                <span>5</span>월 <span>15</span>일
              </p>
            </div>
            <div class="mainMy_info no_data">
              <!-- data 없는경우에 no_data-->
              <ul class="graph_vertical">
                <li>
                  <div class="graph_bar">
                    <p class="graph_percent" style="height: 100%;"></p>
                  </div>
                  <p class="graph_num">120</p>
                  <p>수축기</p>
                </li>
                <li>
                  <div class="graph_bar">
                    <p class="graph_percent" style="height: 0%;"></p>
                  </div>
                  <p class="graph_num">70</p>
                  <p>이완기</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <!--    modal-->
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
          {{ modalTitle }}
        </h3>
        <h3 slot="body" v-html="modalContents"></h3>
        <button slot="moveBtn2" class="modal-default-button">확인</button>
        <button slot="moveBtn1" @click="showModal = false">취소</button>
      </Modal>
    </div>
    <!--//contents-->
  </div>
  <!--  //container  -->

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/resources/css/common.css';
@import '../assets/resources/css/index.css';
</style>

