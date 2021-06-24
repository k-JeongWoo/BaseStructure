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
            <p class="typeA">
                <span class="bul"></span>이름 :
                <input type="text" v-model="usr_name"/>
            </p>
            <p class="typeA">
                <span class="bul"></span>생년월일 :
                <input type="text" v-model="usr_birth"/>
            </p>
            <p class="inputRadio typeA">
                <span class="bul"></span>성별 :
                <input type="radio" id="usr_gender_m" name="usr_gender" v-model="usr_gender" value="M"/> <label for="usr_gender_m"><span class="bul"></span>남자</label>
                <input type="radio" id="usr_gender_f" name="usr_gender" v-model="usr_gender" value="F"/> <label for="usr_gender_f"><span class="bul"></span>여자</label>
                <!--                <input type="text" v-model="usr_gender"/>-->
            </p>
            <p class="typeA">
                <span class="bul"></span>연락처 :
                <input type="text" v-model="usr_telnum"/>
            </p>
            <p class="typeA">
                <span class="bul"></span>E-mail :
                <input type="text" v-model="usr_email" readonly/>
            </p>
            <br/>
            <p class="typeA">
                <span class="bul"></span>주소(선택) --- 임시 추후 다음 주소 api 사용예정
            </p>
            <p class="typeA">
                <span class="bul"></span>주소 :
                <input type="text" v-model="usr_address" placeholder="주소"/>
                <input type="text" v-model="usr_raddress" placeholder="상세주소"/>
                <div ref="embed"></div>
                <button @click="showApi">주소API 호출</button>
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
      usr_sname: '',
      usr_birth: this.$route.params.usrbirth,
      // usr_gender: this.$route.params.usrgender === 'M' ? '남' : '여',
      usr_gender: 'M',
      usr_telnum: this.$route.params.usrtelnum,
      usr_email: '',
      usr_zipcode: '',
      usr_address: '',
      usr_address_detail: '',
      usr_provider: '',
      usr_url: ''
    }
  },
  methods: {
    regUsrInfo: function () {
      let obj = this
      /*
      if (this.usr_gender !== 'F' || this.usr_gender !== 'M') {
        alert('성별을 선택해 주세요.')
        return
      }
      */
      axios.post(`/api/v1/api/auth/signup`,
        {
          'memberAddress': this.usr_address,
          'memberRaddress': this.usr_raddress,
          'memberBirth': this.usr_birth,
          // 'memberGender': this.usr_gender === '남' ? 'M' : 'F',
          'memberGender': this.usr_gender,
          'memberHpno': this.usr_telnum,
          'memberName': this.usr_name,
          'socialImage': this.usr_url,
          'socialMail': this.usr_email,
          'socialName': this.usr_sname,
          'socialProvider': this.usr_provider,
          'memberAgree': sessionStorage.getItem('marketAgree')
        },
        {withCredentials: true}
      ).then(function (response) {
        if (response.data.status === 200) {
          sessionStorage.removeItem('marketAgree')
          obj.$router.push({
            name: 'Mainhome'
          })
        } else {
          alert(response.data.message)
        }
      })
    },
    showApi () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress // 도로명 주소 변수
          let extraRoadAddr = '' // 도로명 조합형 주소 변수

          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname
          }

          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName)
          }

          if (extraRoadAddr !== '') {
            extraRoadAddr = ' (' + extraRoadAddr + ')'
          }

          if (fullRoadAddr !== '') {
            fullRoadAddr += extraRoadAddr
          }

          this.usr_address = fullRoadAddr
        }
      }).embed(this.$refs.embed)
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
