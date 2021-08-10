<template>
  <div class="container noBg terms01">
    <!--contents-->
    <div class="contents">
      <section class="mb7">
        <h3 class="title_02 mb3">알람 </h3>
        <ul class="terms_list">
          <li class="item">
            <button @click="pageDetail('AppPrivacyService')">서비스 이용약관</button>
          </li>
          <li class="item">
            <router-link to="">개인정보 취급방침</router-link>
          </li>
          <li class="item">
            <router-link to="">민감정보 취급방침</router-link>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="title_02 mb3">선택항목 </h3>
        <ul class="terms_list">
          <li class="item">
            <button @click="pageDetail('AppMarketing')">마케팅 정보 수신 및 이용 동의</button>
          </li>
        </ul>
      </section>

    </div>
    <!--//contents-->
    <!-- footer  //footer -->
  </div>
  <!--  //container  -->
</template>

<script>
export default {
  methods: {
    pageDetail: function (value) {
      const config = {
        pageNameUrl: value
      }
      this.$router.replace(`${config.pageNameUrl}`)
    }
  }
}
</script>
