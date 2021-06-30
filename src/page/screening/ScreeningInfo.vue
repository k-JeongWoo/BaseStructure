<template>
  <!--  container  -->
  <div class="container curation_01">
    <!--contents-->
    <div class="contents">
        <div class="box_wrap">
          <section class="box_shadow01">
            <h2 class="title_02"><span class="colorA">{{ usr_name }}</span> 님!</h2>
            <p class="contTxt_06">마지막 건강검진일로부터 nn일이 지났습니다.</p>
            <!-- <h2 class="title_02">반갑습니다! </h2> -->
            <div class="mt4">
              <router-link to="/screening/screeningWrite" class="btn_fill">검진결과 등록하기(자동/직접입력)</router-link>
              <!--
            <div class="btnArea mt4">
              <button type="button" class="btn_fill">진료 프로그램 선택하기</button>
            </div>
          -->
              <br >
            </div>
          </section>
        </div>
      <!---->
      <div class="box_wrap">
        <section class="box_shadow01 pb8">
          <h2 class="title_05 mb6">등록된 검진결과</h2>
          <div class="btn_cuation">
            <button type="button" class="title_02 colorA">자동입력</button>
            <button type="button" class="title_02 color0">직접입력</button>
          </div>
          <ul class="list_styleA">
            <li class="list_item">
              <a href="">
                <div class="tit_wrap">
                  <h2 class="title_02 colorA">2021년 05일 13일
                    <span class="rabel_fill radius bgColorA">NEW</span>
                  </h2>
                  <span class="btn_right"><i class="ico_more"></i>더보기</span>
                </div>
                <div class="txt_list">
                  <p class="contTxt_06">
                    검진종류: <span>일반</span>
                  </p>
                  <p class="contTxt_06">
                    검진기관: <span>재단법인 한국의학연구소 강남의원</span>
                  </p>
                  <p class="contTxt_06">
                    결과판정: <span>정상A</span>
                  </p>
                </div>
              </a>
            </li>
            <!---->
            <li class="list_item">
              <a href="">
                <div class="tit_wrap">
                  <h2 class="title_02 colorA">2021년 05일 13일
                    <span class="rabel_fill radius bgColorA">NEW</span>
                  </h2>
                  <span class="btn_right"><i class="ico_more"></i>더보기</span>
                </div>
                <div class="txt_list">
                  <p class="contTxt_06">
                    검진종류: <span>일반</span>
                  </p>
                  <p class="contTxt_06">
                    검진기관: <span>재단법인 한국의학연구소 강남의원</span>
                  </p>
                  <p class="contTxt_06">
                    결과판정: <span>정상A</span>
                  </p>
                </div>
              </a>
            </li>
            <!---->
            <li class="list_item">
              <a href="">
                <div class="tit_wrap">
                  <h2 class="title_02 colorA">2021년 05일 13일
                    <span class="rabel_fill radius bgColorA">NEW</span>
                  </h2>
                  <span class="btn_right"><i class="ico_more"></i>더보기</span>
                </div>
                <div class="txt_list">
                  <p class="contTxt_06">
                    검진종류: <span>일반</span>
                  </p>
                  <p class="contTxt_06">
                    검진기관: <span>재단법인 한국의학연구소 강남의원</span>
                  </p>
                  <p class="contTxt_06">
                    결과판정: <span>정상A</span>
                  </p>
                </div>
              </a>
            </li>
            <!---->
          </ul>
        </section>
      </div>
      <!---->


    </div>
    <!--//contents-->
  </div>
  <!--  //container  -->
  <!-- aside  --><!-- //aside  -->
</template>

<script>
export default {
  data () {
    return {
      usr_name: '',
      usr_telnum: ''
    }
  },
  created () {
    this.usr_name = sessionStorage.getItem('usr_name')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
