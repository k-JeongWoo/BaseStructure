<template>
  <div class="wrapAside" :class="propsdata"><!-- class="on" 추가시 열림 -->
    <div class="contAside">
      <button v-on:click="closeLeft" class="btn_border">닫기</button>
      <p class="user_name">
        <span class="name">홍길동</span> 님
        <span class="executives">(임직원)</span>
      </p>
      <div class="btnArea mt6">
        <a href="javascript:void(0);" @click="getMyCheckupList" class="btn_border">국민건강보험 정보 조회</a>
      </div>
      <ul class="asid_navigation mt8">
        <li>
          <a href="myInfo.html"><i class="ico_myinfo"></i>내 정보 관리</a>
        </li>
        <li>
          <a href="hospital_01.html"><i class="ico_hospitalList"></i>병원 목록 조회</a>
        </li>
        <li>
          <a href="about.html"><i class="ico_thisapp"></i>이 앱에 대하여</a>
        </li>
        <li>
          <a href="terms01.html"><i class="ico_terms"></i>약관보기</a>
        </li>
      </ul>
      <div class="asid_footer">
        <a href="login01.html" class="btn_logOut"><i class="ico_logOut"></i>로그아웃</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['propsdata'],
  methods: {
    closeLeft () {
      console.log('11')
      this.$emit('eventdata', '')
    },
    getMyCheckupList: function () {
      var res = axios.get(`/api/v1/api/checkup/myCheckupList`)
      res.then(response => {
        console.log(response)
        if (response.resultCode !== 9999) {
          this.$router.push('/screening/screeningDataLoad')
        } else {
          this.$router.push('/screening/screeningResult')
        }
      }).catch(function (error) { console.log(error) })
    }
  }
}
</script>

<style scoped>

</style>
