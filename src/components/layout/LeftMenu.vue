<template>
  <div class="wrapAside" :class="propsdata" v-on:click="closeLeft"><!-- class="on" 추가시 열림 -->
    <div class="contAside">
      <p class="user_name">
        <span class="name">{{ usr_name }}</span> 님
        <span class="executives"></span>
      </p>
      <div class="btnArea mt6" v-if="result_code !== 'error'">
        <a href="javascript:void(0);" @click="getMyCheckupList" class="btn_border" style="font-size: 14px !important;">국민건강보험 정보 조회</a>
      </div>
      <ul class="asid_navigation mt8">
        <li v-if="result_code !== 'error'">
          <a @click="pageUrl('/user/userdetail')"><i class="ico_myinfo"></i>내 정보 관리</a>
<!--          <router-link :to="{ path: '/user/userdetail', query: { dynamicTitle: '내 정보 정보', conClass: 'noBg myInfo' }}"><i class="ico_myinfo"></i>내 정보 관리</router-link>-->
        </li>
        <li v-if="result_code !== 'error'">
          <a @click="pageUrl('/hospital/hospitalList')"><i class="ico_hospitalList"></i>병원 목록 조회</a>
<!--          <router-link :to="{ path: '/hospital/hospitalList', query: { dynamicTitle: '병원 목록 조회' }}"><i class="ico_hospitalList"></i>병원 목록 조회</router-link>-->
        </li>
        <li>
<!--          <button @click="pageUrl('/about/appInformation')"><i class="ico_myinfo"></i>이 앱에 대하여</button>-->
          <router-link :to="{ path: '/about/appInformation', query: { dynamicTitle: 'cellimedi 정보', conClass: 'noBg about' }}"><i class="ico_thisapp"></i>이 앱에 대하여</router-link>
        </li>
        <li>
<!--          <button @click="pageUrl('/about/appPrivacyAgree')"><i class="ico_myinfo"></i>약관보기</button>-->
          <router-link :to="{ path: '/about/appPrivacyAgree', query: { dynamicTitle: '약관 및 개인정보 처리 방침', conClass: 'noBg terms01' }}"><i class="ico_terms"></i>약관보기</router-link>
        </li>
      </ul>
      <div class="asid_footer" v-if="result_code !== 'error'">
<!--        <router-link to="/" @click.native="logoutFnt"></router-link>-->
        <button class="btn_logOut" @click="logoutFnt"><i class="ico_logOut"></i>로그아웃 </button>
      </div>
    </div>
  </div>
</template>

<script>
import {fetchMedicineList, fetchMyCheckupList, fetchUserLogout} from '../../api'
import * as appService from '../../api/iosMessage'

export default {
  data () {
    return {
      usr_name: sessionStorage.getItem('usr_name'),
      result_code: sessionStorage.getItem('result_code')
    }
  },
  props: ['propsdata'],
  methods: {
    closeLeft () {
      this.$emit('eventdata', this.$route.query.hospitalId)
    },
    getMyCheckupList: function () {
      if (this.result_code === 'error') {
        alert('로그인 후 이용 가능합니다.')
      } else {
        fetchMyCheckupList().then(response => {
          if (response.data.status === 9999) {
            fetchMedicineList().then(res => {
              if (res.data.data.response.length === 0) {
                this.$router.push('/screening/screeningDataLoad')
              } else {
                this.$router.push('/screening/screeningResult')
              }
            }).catch(error => { console.log(error) })
            // this.$router.push('/screening/screeningDataLoad')
          } else {
            this.$router.push('/screening/screeningResult')
          }
        }).catch(function (error) { console.log(error) })
      }
    },
    pageUrl (pageGbn) {
      if (this.result_code === 'error') {
        alert('로그인 후 이용 가능합니다.')
      } else {
        if (pageGbn === '/user/userdetail') {
          this.$router.push({path: pageGbn, query: { dynamicTitle: '내 정보 관리', conClass: 'noBg myInfo' }})
        } else if (pageGbn === '/hospital/hospitalList') {
          this.$router.push({path: pageGbn, query: { dynamicTitle: '병원 목록 조회' }})
        } else if (pageGbn === 'AppInformation') {
          this.$router.push({path: pageGbn, query: { dynamicTitle: 'cellimedi 앱 정보', conClass: 'noBg about' }})
        } else if (pageGbn === 'AppPrivacyAgree') {
          this.$router.push({path: pageGbn, query: { dynamicTitle: '약관 및 개인정보 처리 방침', conClass: 'noBg terms01' }})
        }
      }
    },
    logoutFnt () {
      fetchUserLogout().then(res => {
        iosRegister()
        if (res.data.resultCode !== 'error' && this.$route.name.indexOf('mainHome') > -1) {
          this.$router.go()
        } else {
          sessionStorage.clear()
          this.$router.push({name: 'mainHome'}).catch(() => {})
          // this.$router.push({path: '/'})
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}

function iosRegister () {
  var message = {
    'action': 'logout'
  }
  appService.iosinfoClean3(message)
}
</script>

<style scoped>

</style>
