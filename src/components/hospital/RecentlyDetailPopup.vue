<template>
  <!-- fullPop_wrap  wrap 밖으로 위치하여 display:block / none으로 풀팝업 이용가능. 풀팝업으로 이용하지않을 경우 class="wrap" 으로 변경부탁드립니다.-->
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg visit_history02">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">진료 {{ clinicdetail.clinicType }}</span>
          </h1>
          <button class="btn_right" @click="popupControll">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents ">
        <div class="visit_history_detail" :class="clinicdetail.clinicType === '진료' ? 'type01' : clinicdetail.clinicType === '검사' ? 'type02' : 'type03'"><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
          <div class="suggestion_doctor">
            <div class="doctor_info">
              <div class="doctor_img">
                <img src="../../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
              </div>
              <ul>
                <li class="sugges_date">{{ clinicdetail.regDate }}</li>
                <li class="sugges_doc">{{ clinicdetail.emplyName }} </li>
              </ul>
            </div>
          </div>
          <!--//suggestion_doctor-->
          <div class="doctor_comment">
            <h3 class="title_07">진료기록</h3>
            <div class="cont">
              <p>{{ clinicdetail.clinicRecord }}</p>
            </div>
            <h3 class="title_07">주의사항</h3>
            <div class="cont">
              <p>{{ clinicdetail.clinicCaution }}</p>
            </div>
          </div>
          <!--//doctor_comment-->
        </div>
      </div>
      <!--//contents-->
      <!-- footer //footer -->
    </div>
    <!--  //container  -->
  </div>
  <!-- //fullPop_wrap -->
</template>
<script>
export default {
  props: {
    clinicdetail: Object
  },
  methods: {
    popupControll () {
      this.$emit('popupdata', false)
    }
  }
}
</script>

<style scoped>

</style>
