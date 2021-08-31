<template>
  <div class="wrapAside" :class="propsdata" v-on:click="closeLeft"><!-- class="on" 추가시 열림 -->
    <div class="contAside">
      <p class="user_name">
        <span class="name">{{ usr_name }}</span> 님
        <span class="executives">(임직원)</span>
      </p>
      <div class="btnArea mt6">
        <a href="javascript:void(0);" @click="getMyCheckupList" class="btn_border">국민건강보험 정보 조회</a>
      </div>
      <ul class="asid_navigation mt8">
        <li>
          <router-link :to="{ name: 'UserDetail', params: { dynamicTitle: '내 정보 정보', conClass: 'noBg myInfo' }}"><i class="ico_myinfo"></i>내 정보 관리</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'HospitalList', params: { dynamicTitle: '병원 목록 조회' }}"><i class="ico_hospitalList"></i>병원 목록 조회</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AppInformation', params: { dynamicTitle: 'cellimedi 정보', conClass: 'noBg about' }}"><i class="ico_thisapp"></i>이 앱에 대하여</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AppPrivacyAgree', params: { dynamicTitle: '약관 및 개인정보 처리 방침', conClass: 'noBg terms01' }}"><i class="ico_terms"></i>약관보기</router-link>
        </li>
      </ul>
      <div class="asid_footer">
        <button class="btn_logOut" @click="pageUrl"><i class="ico_logOut"></i>로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      usr_name: sessionStorage.getItem('usr_name')
    }
  },
  props: ['propsdata'],
  methods: {
    closeLeft () {
      this.$emit('eventdata', '')
    },
    getMyCheckupList: function () {
      var res = axios.get(`/api/v1/api/checkup/myCheckupList`)
      res.then(response => {
        if (response.resultCode === 9999) {
          this.$router.push('/screening/screeningDataLoad')
        } else {
          this.$router.push('/screening/screeningResult')
        }
      }).catch(function (error) { console.log(error) })
    },
    pageUrl () {
      axios.post(`/api/v1/api/user/loginout`).then(res => {
        if (res.data.resultCode === 'error' && this.$route.name.indexOf('Mainhome') > -1) {
          this.$router.go()
        } else {
          this.$router.push('/mainhome')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
