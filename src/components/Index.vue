<template>
    <!--  container  -->
    <div class="contents">
      <div class="snsLogin_box tac">
        <h2 class="logo_title">
          당신의 건강돌봄, <br>
          <span>Cellimedi</span> 로 시작해보세요.
        </h2>
        <div class="sns_btn">
<!--          <a href="" class="btn_border_snsLog sm"><i class="icoSns_apple"></i>애플로 시작하기</a>-->
          <a :href="'http://sgn-stg.neodreams.co.kr:8080/oauth2/authorization/google?redirect_Uri=' + redirecturi" class="btn_border_snsLog sm"><i class="icoSns_google"></i>구글로 시작하기</a>
          <a :href="'http://sgn-stg.neodreams.co.kr:8080/oauth2/authorization/kakao?redirect_Uri=' + redirecturi" class="btn_border_snsLog sm"><i class="icoSns_kakao"></i>카카오로 시작하기</a>
<!--          <a :href="'http://sgn-stg.neodreams.co.kr:8080/oauth2/authorization/facebook?redirect_Uri=' + redirecturi" class="btn_border_snsLog sm"><i class="icoSns_facebook"></i>페이스북으로 시작하기</a>-->
          <a :href="'http://sgn-stg.neodreams.co.kr:8080/oauth2/authorization/naver?redirect_Uri=' + redirecturi" class="btn_border_snsLog sm"><i class="icoSns_naver"></i>네이버로 시작하기</a>

<!--          <router-link to="/medical/first/medicalprogram" class="btn_border_snsLog sm"><i class="">Medical</i></router-link>
          <router-link to="/fntTestPage" class="btn_border_snsLog sm"><i class="">기능테스트</i></router-link>-->
<!--
          <router-link to="/mainhome" class="btn_border_snsLog sm">메인으로</router-link>
          <router-link to="/main/medicalprogram" class="btn_border_snsLog sm"><i class="">Medical</i></router-link>
          <router-link to="/agreement" class="btn_border_snsLog sm">route를 통한 가입동의로</router-link>
-->

          <!--
            class만 맞춰주시면 a태그도 button도 p도 원하시는대로 쓰셔도 됩니다
          <button type="button" class="btn_border_snsLog sm"><i class="ico_apple"></i>애플로 시작하기</button>
          <button type="button" class="btn_border_snsLog sm"><i class="ico_google"></i>구글로 시작하기</button>
          <button type="button" class="btn_border_snsLog sm"><i class="ico_kakao"></i>카카오로 시작하기</button>
          <button type="button" class="btn_border_snsLog sm"><i class="ico_facebook"></i>페이스북으로 시작하기</button>
          <button type="button" class="btn_border_snsLog sm"><i class="ico_naver"></i>네이버로 시작하기</button>
          -->
        </div>
      </div>
      <p class="powered">Powered by <img src="../assets/resources/images/common/logo_seegene.png" alt="seegene"></p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      usr_name: '',
      usr_telnum: '',
      redirecturi: this.$route.query.redirecturi === undefined ? '%2F' : this.$route.query.redirecturi
    }
  }
}
</script>
