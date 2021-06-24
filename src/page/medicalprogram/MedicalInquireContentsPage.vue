<template>
  <!--  container  -->
  <div class="container prog_list">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05">나의 관심 진료 프로그램</h2>
          <div class="swiper-container metabolism_list mt6">
            <div class="swiper-wrapper">
              <swiper class="swiper" :options="swiperOption">
                <div class="swiper-slide metabolism_box">
                  <div class="tit_wrap">
                    <h2 class="title_02">
                      <i class="ico_metabolism01"></i>대사
                    </h2>
                    <a href="" class="btn_right"><i class="ico_more"></i>더보기</a>
                  </div>
                  <div class="metabolism_cont">
                    <p class="contTxt_06 mt4">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.</p>
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
              </swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from '@/components/modal/ConfirmModal'

export default {
  name: 'swiper-example-loop',
  title: 'Loop mode / Infinite loop',
  components: {
    Swiper,
    SwiperSlide,
    Modal: Modal
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      showModal: false
    }
  }
}
</script>

<style scoped>

</style>
