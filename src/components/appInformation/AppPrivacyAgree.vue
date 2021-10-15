<template>
    <!--contents-->
    <div class="contents">
      <section class="mb7">
        <h3 class="title_02 mb3">약관 </h3>
        <ul class="terms_list">
          <li class="item" @click="pageDetail('AppPrivacyService')">
            <button >서비스 이용약관</button>
          </li>
          <li class="item" @click="pageDetail('AppPrivacyPerson')">
            <button >개인정보 취급방침</button>
          </li>
          <li class="item" @click="pageDetail('AppPrivacySensitive')">
            <button >개인정보 제 3자 제공 동의</button>
          </li>
        </ul>
      </section>
      <section>
        <h3 class="title_02 mb3">선택항목 </h3>
        <ul class="terms_list">
          <li class="item" @click="pageDetail('AppMarketing')">
            <button >마케팅 정보 수신 및 이용 동의</button>
          </li>
        </ul>
      </section>

    </div>
    <!--//contents-->
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
