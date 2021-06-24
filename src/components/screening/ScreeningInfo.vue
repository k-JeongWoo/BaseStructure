<template>
  <!--  container  -->
  <div class="container main">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_02"><span class="colorA">{{ usr_name }}</span> 님!</h2>

          <p class="contTxt_06">마지막 건강검진일로부터 nn일이 지났습니다.</p>
          <!-- <h2 class="title_02">반갑습니다! </h2> -->
          <div class="mt4">
            <router-link to="/screeningWrite" class="btn_fill">검진결과 등록하기(자동/직접입력)</router-link>
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
    </div>
    <!--//contents-->
  </div>
  <!--  //container  -->

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
