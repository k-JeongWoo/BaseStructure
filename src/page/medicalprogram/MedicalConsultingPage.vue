<template>
  <div class="container program_02">
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05">나의 관심 진료 프로그램</h2>
          <div class="swiper-container metabolism_list mt6">
            <div class="swiper-wrapper">
              <div class="swiper-slide metabolism_box">
                <div class="tit_wrap">
                  <h2 class="title_02">
                    <i class="ico_metabolism01"></i>대사
                  </h2>
                  <button class="btn_right" @click="programContext"><i class="ico_more"></i>더보기</button>
                </div>
                <div class="metabolism_cont">
                  <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이
                    들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
                </div>
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
              </div>
            </div>
            <!-- slider pagenation -->
            <div class="swiper-pagination"></div>
            <!-- //slider pagenation -->
          </div>
        </section>

        <div class="box_wrap">
          <section class="box_shadow01 pb8">
            <h2 class="title_05 mb6">진료가능 병원</h2>
            <ul>
              <li class="hospital_list"
                  v-for="(item,index) in hospitalList" v-bind:key="index">
                <div class="hospital_item">
                  <div class="hospital_tit">
                    <p class="inputRadio typeA">
                      <input type="radio" class="opener"
                             name="hospi"
                             :id="index"
                             :value="index" v-model="radioValue">
                      <label :for="index" class="title_05">
                        <span class="bul"></span> 버튼{{ index}} {{ item.hsptlName }}
                      </label>
                      <label for="hospital_open01" class="acco_arrow">
                        <i class="ico_arrowT"></i>
                      </label>
                    </p>
                  </div>
                  <div class="hospital_detail">
                    <ul class="medical_subject">
                      <li class="rabel_fill radius bgColor06 color0">외래진료</li>
                      <li class="rabel_fill radius bgColor06 color0">종합 건강검진</li>
                      <li class="rabel_fill radius bgColor06 color0">가정의학과</li>
                    </ul>
                    <p class="title_11  colorB">*씨젠클리닉은 (주)씨젠 임직원 및 임직원 가족에 한해 진료가 제공됩니다.</p>
                    <div class="hospital_info ">
                      <section>
                        <h3 class="title_05 mb3">진료시간</h3>
                        <ul>
                          <li class="title_09">
                            <p class="tit">평일</p>
                            <p>
                              <span>09:00 ~ 18:00</span>
                              <span>(점심: 13:00 ~ 14:00)</span>
                            </p>
                          </li>
                          <li class="title_09">
                            <p class="tit colorD">토요일</p>
                            <p>
                              <span>09:00 ~ 14:00</span>
                              <span>(점심시간 없음)</span>
                            </p>
                          </li>
                          <li class="title_09">
                            <p class="colorB">일요일, 공휴일 휴진</p>
                          </li>
                        </ul>
                      </section>
                      <section>
                        <h3 class="title_05 mb3">위치정보</h3>
                        <p class="title_09">서울특별시 강남구 도산대로 442</p>
                      </section>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <p class="contTxt_07 colorC tac mt4">제휴병원은 지속적으로 업데이트 될 예정입니다. </p>
      </div>
      <div class="footer typeB">
        <div class="btnArea">
          <button class="btn_border" :class="radioValue" value="button" @click="nextPage">진료 문의하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      hospitalList: ['1', '2', '3'],
      radioValue: 'disabled'
    }
  },
  created () {
    var dataList = this
    axios.get('')
      .then(function (response) {
        dataList.hospitalList = response.data.data
      })
      .catch(function (response) {
      })
  },
  methods: {
    nextPage: function () {
      alert('abc')
    },
    programContext: function () {
      alert('qwe')
    }
  }
}
</script>

<style scoped>

</style>
