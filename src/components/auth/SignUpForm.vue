<template>
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
          회원 정보 입력
        </h2>
        <div class="cntAgree">
          <div class="agree_list">
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>이름 :
                <input type="text" v-model="usr_name" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>생년월일 :
                <input type="text" v-model="usr_birth" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>성별 :
                <input type="text" v-model="usr_gender" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>연락처 :
                <input type="text" v-model="usr_telnum" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>E-mail :
                <input type="text" v-model="usr_email" readonly/>
              </label>
            </p>
            <br/>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>주소(선택) --- 임시 추후 다음 주소 api 사용예정
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>주소 :
                <input type="text" v-model="usr_address" placeholder="주소"/>
                <input type="text" v-model="usr_raddress" placeholder="상세주소"/>
              </label>
            </p>
          </div>

        </div>
      </div>
    </div>
    <!--//contents-->
    <!-- footer -->
    <footer class="footer typeB">
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="regUsrInfo()" class="btn_fill ">가입 완료</a>
        <a href="javascript:void(0);" v-on:click="regUsrInfo2()" class="btn_fill ">가입완료후</a>
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
      usr_name: this.$route.params.usrname,
      usr_sname: this.$route.params.usrsname,
      usr_birth: this.$route.params.usrbirth,
      usr_gender: this.$route.params.usrgender === 'M' ? '남' : '여',
      usr_telnum: this.$route.params.usrtelnum,
      usr_email: this.$route.params.usremail,
      usr_address: '',
      usr_raddress: '',
      usr_provider: this.$route.params.usrprovider,
      usr_url: this.$route.params.usrurl
    }
  },
  methods: {
    regUsrInfo: function () {
      axios.post(`/api/v1/api/auth/signup`,
        {
          'memberAddress': this.usr_address,
          'memberBirth': this.usr_birth,
          'memberGender': this.usr_gender === '남' ? 'M' : 'F',
          'memberHpno': this.usr_telnum,
          'memberName': this.usr_name,
          'socialImage': this.usr_url,
          'socialMail': this.usr_email,
          'socialName': this.usr_sname,
          'socialProvider': this.usr_provider
        },
        {withCredentials: true}
      ).then(function (response) {
        console.log(response)
      })
    },
    regUsrInfo2 () {
      this.$router.push({
        name: 'Mainhome'
      })
    }
  },
  created () {
    console.log(this.$route.params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
