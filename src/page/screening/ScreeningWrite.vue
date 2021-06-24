<template>
  <!--  container  -->
  <div class="container main">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_02">검진결과 자동 입력</h2>

          <p class="contTxt_06">공인인증서가 있는 경우 국민건강보험공단에서 검진 결과를 자동으로 가져올 수 있습니다.</p>
          <div class="mt4">
            <button type="button" class="btn_fill">자동으로 가져오기</button>
          </div>
        </section>
        <br />
        <section class="box_shadow01">
          <h2 class="title_02">검진결과 직접 입력</h2>
          <h2 class="title_02">검진일</h2><input type="text" value="2021-06-22">
        </section>
      </div>
      <!---->
    </div>
    <!--//contents-->
  </div>
  <!--  //container  -->

</template>

<script>

export default {
  data () {
    return {
      usr_telnum: '',
      selectedDate: ''
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
