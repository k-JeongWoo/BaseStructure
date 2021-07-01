<template>	<!--  container  -->

  <!--  container  -->
  <div class="container agreement01">
    <!-- 본인인증 서비스 팝업을 호출 form -->
    <form name="form_chk" method="post">
      <input type="hidden" name="m" v-model="m">						<!-- 필수 데이타로, 누락하시면 안됩니다. -->
      <input type="hidden" name="EncodeData" v-model="sEncData">		<!-- 위에서 업체정보를 암호화 한 데이타입니다. -->
    </form>
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
      <div class="agreement_box">
        <h2 class="title_purple tac">
          서비스 이용약관 동의
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
                <span class="bul"></span>통합서비스 이용약관 동의 (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree02" v-model="chckAgree" value="2">
              <label for="chckAgree02">
                <span class="bul"></span>민감정보 수진 및 이용 동의 (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree03" v-model="chckAgree" value="3">
              <label for="chckAgree03">
                <span class="bul"></span>개인정보 수집 이용 동의  (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree04" v-model="chckAgree" value="4">
              <label for="chckAgree04">
                <span class="bul"></span>마케팅정보 수신 동의 (선택)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
          </div>

        </div>
      </div>
    </div>
    <!--//contents-->
    <!-- footer -->
    <footer class="footer typeB">
<!--      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="nicePopUp()" class="btn_fill ">휴대폰인증</a>
      </div> <br />-->
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="goSignProcess()" class="btn_fill ">완료</a>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      chckAgree: [],
      chckAgreeM: false,
      checkval: '',
      sEncData: '',
      m: 'checkplusService'
    }
  },
  methods: {
    nicePopUp: function () {
      document.form_chk.action = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb'
      document.form_chk.target = 'popupChk'
      document.form_chk.submit()
    },
    goSignProcess: function () {
      // 마케팅 수신동의 처리
      let marketChk = this.chckAgree.find(element => element === '4') === '4' ? 'Y' : 'N'
      sessionStorage.setItem('marketAgree', marketChk)

      let defArr = ['1', '2', '3']
      let defCnt = this.chckAgree.filter(x => defArr.includes(x)).length

      if (defCnt === 3) {
        this.$router.push({
          name: 'NiceBlank',
          query: {
            redirect_Uri: this.$route.query.redirect_Uri
          }
        })
      } else {
        alert('필수항목을 선택해 주세요.')
      }
    }
  },
  computed: {
    chckAll: {
      get: function () {
        if (this.chckAgree.length === 4) {
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
  },
  created () {
    let dataObj = this
    axios.get(`/api/v1/api/niceModule/niceInfo`, {},
      {withCredentials: true}
    ).then(function (response) {
      dataObj.sEncData = response.data.data.sEncData
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
