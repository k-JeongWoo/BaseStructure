<template>	<!--  container  -->

  <!--  container  -->
  <div class="container agreement01">
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
            <input type="checkbox" name="chckAll" id="chckAll01" v-model="chckAll" @click="checkedAll($event.target.checked)">
            <label for="chckAll01">
              <span class="bul"></span>전체 항목에 동의합니다.
            </label>
          </p>
          <div class="agree_list">
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree01" v-model="chckAgree01">
              <label for="chckAgree01">
                <span class="bul"></span>통합서비스 이용약관 동의 (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree02" v-model="chckAgree02">
              <label for="chckAgree02">
                <span class="bul"></span>민감정보 수진 및 이용 동의 (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree03" v-model="chckAgree03">
              <label for="chckAgree03">
                <span class="bul"></span>개인정보 수집 이용 동의  (필수)
              </label>
              <a href="" class="btn_text_size03 txt_r">전체보기</a>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree04" v-model="chckAgree04">
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
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="goSignProcess()" class="btn_fill ">완료</a>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      chckAgree01: false,
      chckAgree02: false,
      chckAgree03: false,
      chckAgree04: false,
      chckAll: false,
      checkval: ''
    }
  },
  methods: {
    goSignProcess: function () {
      this.$router.push({
        name: 'NiceBlank'
      })
    },
    checkedAll (checked) {
      if (checked === true) {
        this.chckAgree01 = true
        this.chckAgree02 = true
        this.chckAgree03 = true
        this.chckAgree04 = true
      } else {
        this.chckAgree01 = false
        this.chckAgree02 = false
        this.chckAgree03 = false
        this.chckAgree04 = false
      }
      this.chckAll = checked
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
