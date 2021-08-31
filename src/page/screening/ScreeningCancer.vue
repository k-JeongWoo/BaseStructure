<template>
  <!--  container  -->
  <div class="contents">
    <div class="h-well_cont">
      <div class="start_year mb6">
        <div class="select typeA">
          <div class="selectbox "><!-- on 클래스 추가시 .select_options display:block-->
            <button type="button" class="select_title">
              2021년
            </button>
            <ul class="select_options">
              <li class="select_option on">2021년</li><!-- on 클래스 추가시 active효과 -->
              <li class="select_option">2020년</li>
              <li class="select_option">2019년</li>
              <li class="select_option">2018년</li>
              <li class="select_option">2017년</li>
            </ul>
          </div>
        </div>
      </div>
      <!--//start_year-->
    </div>
    <!-- //h-well_cont -->
    <div class="h-well_result">
      <!-- 데이터 있는 경우 cancer_checkup-->
      <div class="cancer_checkup">
        <ul class="checkup_list">
          <li class="checkup_item">
            <a href="#" v-on:click="popUpPDF">
              <h2 class="title_05 mb1"><span>대장암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
<!--
          //checkup_item
          <li class="checkup_item">
            <a href="#">
              <h2 class="title_05 mb1"><span>위암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원 </p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
          //checkup_item
          <li class="checkup_item">
            <a href="#">
              <h2 class="title_05 mb1"><span>자궁경부암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
          //checkup_item
          <li class="checkup_item">
            <a href="#">
              <h2 class="title_05 mb1"><span>대장암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
          //checkup_item
          <li class="checkup_item">
            <a href="#">
              <h2 class="title_05 mb1"><span>위암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원 </p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
          //checkup_item
          <li class="checkup_item">
            <a href="#">
              <h2 class="title_05 mb1"><span>자궁경부암</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-05-24</p>
            </a>
          </li>
          //checkup_item-->
        </ul>
      </div>
      <!--//데이터 있는 경우 cancer_checkup-->

      <!-- 데이터 없는경우 noData클래스 추가
      <div class="cancer_checkup noData">
        <p class="title_06">
          조회할 수 있는 데이터가 없습니다.
        </p>
      </div>
      -->
    </div>
    <!-- //h-well_result -->
  </div>
  <!--  //container  -->
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    popUpPDF: function () {
      window.open('http://localhost:8080/screening/screeningDocumentPdf', '_blank')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
