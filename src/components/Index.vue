<template>	<!--  container  -->
  <div class="container login01">
    <!-- header -->
    <header class="header noBg">
      <div class="headerBox">
        <a href="#" class="btn_right">
          <i class="ico_close"></i>
        </a>
      </div>
    </header>
    <!-- //header -->
    <!--contents-->
    <div class="contents">
      <div class="snsLogin_box tac">
        <h2 class="title_purple">
          당신의 건강돌봄, <br>
          <span>(브랜드네임미정_test)</span>로 시작해보세요.
        </h2>
        <div class="sns_btn">
          <a href="" class="btn_border_snsLog sm"><i class="ico_snsApple"></i>애플로 시작하기</a>
          <a href="http://test.neodreams.co.kr:8080/oauth2/authorization/google" class="btn_border_snsLog sm"><i class="ico_snsGoogle"></i>구글로 시작하기</a>
          <a href="http://test.neodreams.co.kr:8080/oauth2/authorization/kakao" class="btn_border_snsLog sm"><i class="ico_snsKakao"></i>카카오로 시작하기</a>
          <a href="http://test.neodreams.co.kr:8080/oauth2/authorization/facebook" class="btn_border_snsLog sm"><i class="ico_snsfacebook"></i>페이스북으로 시작하기</a>
          <a href="http://test.neodreams.co.kr:8080/oauth2/authorization/naver" class="btn_border_snsLog sm"><i class="ico_snsNaver"></i>네이버로 시작하기</a>
          <router-link to="/mainhome" class="btn_border_snsLog sm">메인으로</router-link>

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
    </div>
    <!--//contents-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      usr_name: '',
      usr_telnum: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/resources/css/common.css';
@import '../assets/resources/css/contents.css';
</style>
