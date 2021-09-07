<template>
  <!-- fullPop_wrap  wrap 밖으로 위치하여 display:block / none으로 풀팝업 이용가능. 풀팝업으로 이용하지않을 경우 class="wrap" 으로 변경부탁드립니다.-->
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg terms03">
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">마케팅 이용 동의</span>
          </h1>
          <button @click="closePage" class="btn_right">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!--contents-->
      <div class="contents">
        <div class="consent_terms">
          <p class="contTxt_06">
            ㈜씨젠에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(Ceillimedi 앱 알림 또는 문자), 이메일 등으로 받아보실 수 있습니다. <br>
            선택적으로 수집하는 개인정보는 개인정보의 수집 및 이용목적에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다. 정보통신망법 규정에 따라 선택적으로 수집하는 개인정보 항목, 개인정보 수집 및 이용목적, 개인정보의 보유 및 이용 기간을 안내해 드립니다.
          </p>
          <table>
            <thead>
            <tr>
              <th>항목</th>
              <th>이용목적</th>
              <th>보유 및 이용기간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <p>
                  성명, 휴대폰 번호, 생년월일, 이메일, 성별
                </p>
              </td>
              <td>
                <p>
                  이벤트 행사 관련 정보 안내 및 마케팅 활동,
                  인구 통계적 특성과 회원의 관심, 기호, 성향 등의 추정을 통한 맞춤형 콘텐츠 추천
                </p>
              </td>
              <td>
                <p>회원탈퇴 또는 동의철회 시 지체없이 파기</p>
              </td>
            </tr>
            </tbody>
          </table>
          <p class="contTxt_06">
            위 동의를 거부할 권리가 있으며, 동의를 거부하실 경우 위 목적의 서비스 이용이 제한될 수 있습니다.
          </p>
        </div>

      </div>
      <!--//contents-->
      <!-- footer -->
      <footer class="footer typeB">
        <div class="btnArea">
          <a href="" class="btn_fill disabled">동의하기</a><!-- disabled 클래스 추가시 비활성화 -->
        </div>
      </footer>
      <!-- //footer -->
    </div>
    <!--  //container  -->
  </div>
  <!-- //fullPop_wrap -->
</template>

<script>
export default {
  methods: {
    closePage: function () {
      this.$router.replace('AppPrivacyAgree')
    }
  }
}
</script>
