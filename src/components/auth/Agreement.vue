<template>	<!--  container  -->
  <div class="container noBg agreement01">
    <div class="contents">
      <div class="agreement_box">
        <h2 class="title_02 tac">
          회원가입 약관 동의
        </h2>
        <div class="cntAgree">
          <p class="inputCheck typeA chckAll">
            <input type="checkbox" name="chckAll" id="chckAll01" v-model="chckAll">
            <label for="chckAll01">
              <span class="bul"></span>전체 항목에 동의합니다.
            </label>
          </p>
          <div class="agree_list">
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree01" v-model="chckAgree" value="1">
              <label for="chckAgree01">
                <span class="bul"></span>서비스 이용약관  <span class="colorD">(필수)</span>
              </label>
              <button class="btn_text_size03 txt_r" @click="pageUrl('AppPrivacyService')">전체보기</button>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree02" v-model="chckAgree" value="2">
              <label for="chckAgree02">
                <span class="bul"></span>개인정보 취급방침 <span class="colorD">(필수)</span>
              </label>
              <button class="btn_text_size03 txt_r" @click="pageUrl('AppPrivacyPerson')">전체보기</button>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree03" v-model="chckAgree" value="3">
              <label for="chckAgree03">
                <span class="bul"></span>개인정보 제 3자 제공 동의 <span class="colorD">(필수)</span>
              </label>
              <button class="btn_text_size03 txt_r" @click="pageUrl('AppPrivacySensitive')">전체보기</button>
            </p>
          </div>
          <div class="agree_list">
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree05">
              <label for="chckAgree05">
                <span class="bul"></span>마케팅 정보 수신 및 이용 동의 <span class="colorJ">(선택)</span>
              </label>
              <button class="btn_text_size03 txt_r" @click="pageUrl('AppMarketing')">전체보기</button>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree05" id="chckAgree05_01">
              <label for="chckAgree05_01">
                <span class="bul"></span>앱 서비스 알림 수신 동의
              </label>
            </p>
<!--              <p class="inputCheck typeA">-->
<!--                <input type="checkbox" name="chckAgree05" id="chckAgree05_02">-->
<!--                <label for="chckAgree05_02">-->
<!--                  <span class="bul"></span>SMS-->
<!--                </label>-->
<!--              </p>-->
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree05" id="chckAgree05_03">
              <label for="chckAgree05_03">
                <span class="bul"></span>이메일 수신 동의
              </label>
            </p>
          </div>
        </div>
      </div>
      <!--//agreement_box-->
    </div>
    <!-- footer -->
    <footer class="footer typeB">
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="goSignProcess()" class="btn_fill ">확인</a>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      chckAgree: [],
      chckAgreeM: false,
      checkval: ''
    }
  },
  methods: {
    goSignProcess: function () {
      // 마케팅 수신동의 처리
      let marketChk = this.chckAgree.find(element => element === '3') === '3' ? 'Y' : 'N'
      sessionStorage.setItem('marketAgree', marketChk)

      let defArr = ['1', '2', '3']
      let defCnt = this.chckAgree.filter(x => defArr.includes(x)).length

      if (defCnt === 3) {
        // this.$router.push({
        //   name: 'NiceBlank',
        //   query: {
        //     redirect_Uri: this.$route.query.redirect_Uri
        //   }
        // })
        this.$router.push({name: 'SignUpForm', query: {redirect_Uri: this.$route.query.redirect_Uri}})
      } else {
        alert('필수항목을 선택해 주세요.')
      }
    },
    pageUrl (value) {
      // const config = {
      //   pageNameUrl: value
      // }
      this.$router.push({name: value})
    }
  },
  computed: {
    chckAll: {
      get: function () {
        if (this.chckAgree.length === 3) {
          return true
        } else {
          return false
        }
      },
      set: function (value) {
        if (value === true) {
          // console.log('전체 선택')
          this.chckAgree = ['1', '2', '3', '4']
        } else {
          // console.log('전체 해제')
          this.chckAgree = []
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
