<template>
  <!--  container  -->
  <div class="container agreement01">
    <!--contents-->
    <div class="contents typeB">
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="goSignUpForm()" class="btn_fill ">휴대전화인증 완료 다음으로</a>
      </div>
    </div>
    <!--//contents-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      usr_name: '테스터',
      usr_sname: '',
      usr_birth: 900101,
      usr_gender: 'M',
      usr_telnum: '01012345678',
      usr_email: '',
      usr_provider: '',
      usr_url: ''
    }
  },
  methods: {
    goSignUpForm: function () {
      this.$router.push({
        name: 'SignUpForm',
        params: {
          usrname: this.usr_name,
          usrsname: this.usr_sname,
          usrbirth: this.usr_birth,
          usrgender: this.usr_gender,
          usrtelnum: this.usr_telnum,
          usremail: this.usr_email,
          usrprovider: this.usr_provider,
          usrurl: this.usr_url
        }
      })
    }
  },
  created () {
    let dataObj = this
    axios.get(`/api/v1/api/auth/tokenUserInfo`, {},
      {withCredentials: true}
    ).then(function (response) {
      console.log(response)
      dataObj.usr_sname = response.data.data.name
      dataObj.usr_email = response.data.data.email
      dataObj.usr_provider = response.data.data.provider
      dataObj.usr_url = response.data.data.picture
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
