<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg terms02">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">개인정보 제 3자 제공 동의</span>
          </h1>
          <button @click="closePage" class="btn_right">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <div class="consent_terms">
          <p class="contTxt_06">
            ㈜씨젠은(이하 “씨젠”이라 함)은 수집된 개인정보를 이용자의 동의가 있는 경우에 한하여 아래와 같이 제3자에 제공하고 할 수 있습니다. 회원의 사전 동의 없이는 범위를 초과하여 이용하거나 회원의 개인정보를 외부에 공개하지 않습니다.<br>
            다만, 다음의 경우에는 회원의 개인정보를 제3자에게 제공(공유를 포함)할 수 있습니다.
          </p>
          <ul class="indent_list disc">
            <li>법률규정이 있거나 법령상 의무준수를 위해 불가피한 경우</li>
            <li>수사기관이 수사목적을 위해 관계법령이 정한 절차를 거쳐 요구하는 경우</li>
            <li>통계작성 및 학술연구 등의 목적을 위해 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우</li>
          </ul>
          <p class="title_07 typo_r">&lt;개인정보의 제 3자 제공 항목&gt;</p>
          <table>
            <colgroup>
              <col style="width: 50px;">
              <col >
              <col >
              <col >
            </colgroup>
            <thead>
            <tr>
              <th>제공 받는 자</th>
              <th>항목</th>
              <th>이용목적</th>
              <th>보유 및 이용기간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>병/의원 회원</th>
              <td>
                <p>
                  -회원정보<br>
                  (이름, 생년월일, 성별, 연락처 등)
                </p>
                <p>
                  -국민건강보험연동정보<br>
                  (검진결과, 처방내역 등)

                </p>
                <p>
                  -건강데이터<br>
                  (걷기, 수면, 영양… )
                </p>
              </td>
              <td>
                <p>
                  주치의 서비스 제공,
                  상담 서비스 제공
                </p>
              </td>
              <td>
                <p>서비스 탈퇴 등 개인정보 수집/이용 목적 달성 시점까지 </p>
              </td>
            </tr>
            </tbody>
          </table>

          <p class="title_07 typo_r">&lt;개인정보 처리의 위탁&gt;</p>

          <p class="contTxt_06">
            1. 씨젠은 서비스 향상을 위해서 회원의 개인정보를 외부 전문업체에 위탁하여 처리할 수 있습니다. 개인정보의 처리를 위해 위탁하는 경우에는 미리 그 사실을 회원에게 공지하여 회원의 동의를 받겠습니다.
          </p>
          <p class="contTxt_06">
            2. 회원의 개인정보의 위탁 처리하는 경우에는 위탁계약(위탁업무 수행 목적 외 개인정보 처리금지, 개인정보의 기술적 관리적 보호조치, 위탁업무의 목적 및 범위, 재위탁 제한, 개인정보에 대한 접근 제한 등 안정성 확보 조치, 수탁자가 준수하여야 할 의무를 위반한 경우의 손해배상 등)을 통하여 서비스 제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 사고시의 책임부담 등을 명확히 규정하고 계약내용을 서면 또는 전자적으로 보관 하겠습니다.
          </p>

          <table>
            <thead>
            <tr>
              <th>수탁업체</th>
              <th>위탁항목</th>
              <th>이용목적</th>
              <th>보유 및 이용기간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <p>
                  나이스평가정보
                </p>
              </td>
              <td>
                <p>
                  -회원정보<br>
                  (이름, 생년월일, 성별, 연락처 등)
                </p>
              </td>
              <td>
                <p>
                  본인명의 인증
                </p>
              </td>
              <td rowspan="2">
                <p>서비스 탈퇴 등 개인정보 수집/이용 목적 달성 시점까지  </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  ㈜쿠콘
                </p>
              </td>
              <td>
                <p>
                  -회원정보<br>
                  (주민번호, 금융인증서 정보)
                </p>
              </td>
              <td>
                <p>
                  국민건강보험공단 정보 연동
                </p>
              </td>
            </tr>
            </tbody>
          </table>
          <p class="contTxt_06 mt6">
            ※ 귀하께서는 귀하의 개인정보를 제 3자에게 제공하는 것에 대한 동의를 거부하실 수 있습니다. 다만 동의를 거부하실 경우 “Cellimedi 서비스”를 이용하실 수 없습니다.
          </p>

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
  methods: {
    closePage: function () {
      this.$router.replace('AppPrivacyAgree')
    }
  }
}
</script>

<style scoped>

</style>
