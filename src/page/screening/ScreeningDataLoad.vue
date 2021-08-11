<template>
  <!--contents-->
  <div class="contents">
    <div class="h-well_box">
      <div class="btnArea mt4">
        <iframe id="app_init_frame" style="display:none"></iframe>
        <a href="neohealth://import_healthexam" target="app_init_frame" class="btn_fill">국민건강보험 데이터 불러오기</a>
      </div>
      <p class="contTxt_06 colorH">
        국민건강보험 데이터를 연동하셔야<br>
        건강검진 결과와 진료 및 투약 정보를<br>
        열람할 수 있습니다.{{$data}}
      </p>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
