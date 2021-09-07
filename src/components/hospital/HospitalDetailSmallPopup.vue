<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg hospital_visitDate">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">예상 내원일 상세정보</span>
          </h1>
          <a href="index02.html" class="btn_right">
            <i class="ico_close">닫기</i>
          </a>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <div class="visitDate_detail">
          <div class="detail_time">
            <p class="title_03">2021년 7월 6일 (화)</p>
          </div>
          <ul class="list_styleE">
            <li class="list_item">
              <div class="visitDetail_tit">
                <p class="title_14">
                  <i class="icoCom_time_gray"></i>
                  <span>오후 3:00</span>
                </p>
              </div>
            </li>
            <li class="list_item">
              <div class="visitDetail_tit">
                <p class="title_14">
                  <i class="icoCom_hos_gray"></i>
                  <span>씨젠클리닉</span>
                </p>
                <a href="hospital_02.html" class="btn_text_size01 colorA">
                  병원정보
                  <i class="icoArrow_purpleR">상세보기</i>
                </a>
              </div>
            </li>
            <li class="list_item">
              <div class="visitDetail_tit">
                <p class="title_14">
                  <i class="icoCom_memo_gray"></i>
                  <span>치료</span>
                </p>
              </div>
              <div class="textarea_cont">
                <p>
                  셀포톤 치료
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!--//visitDate_detail-->
      </div>
      <!--//contents-->
      <!-- footer //footer -->
    </div>
    <!--  //container  -->
    <!-- aside  --><!-- //aside  -->
  </div>
</template>

<script>
import {hospitalDetail} from '../../api'

export default {
  props: {
    selectmodal: Number
  },
  data () {
    return {
      hospitalDetail: []
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
  }
}
</script>

<style scoped>

</style>
