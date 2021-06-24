<template>
  <!--  container  -->
  <div class="container agreement01">
    <!--contents-->
    <div class="contents typeB">
      <div class="btnArea">
        <a href="javascript:void(0);" v-on:click="goSignUpForm()" class="btn_fill ">인증 완료 다음으로</a>
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
      usr_sname: '',
      usr_birth: '',
      usr_gender: '',
      usr_telnum: '',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
