<template>
  <!--  container  -->
  <div class="container noBg info_input_01">
    <!--contents-->
    <div class="contents">
      <ul class="infoInput_list mb7">
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">이름<span class="required">*</span></p>
          <p class="input "><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
            <input type="text" v-model="usr_name" name="" value="홍길동" >
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">생년월일<span class="required">*</span></p>
          <p class="input "><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_birth" name="" value="19921111" >
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">성별<span class="required">*</span></p>
          <p class="radioBox">
							<span class="inputRadio typeA "><!--수정불가 :: disabled-->
								<input type="radio" name="gender" id="gender00" v-model="usr_gender" value="M" >
								<label for="gender00">
									<span class="bul"></span>남
								</label>
							</span>
            <span class="inputRadio typeA  ml4"><!--수정불가 :: disabled-->
								<input type="radio" name="gender" id="gender01" v-model="usr_gender" value="F" >
								<label for="gender01">
									<span class="bul"></span>여
								</label>
							</span>
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input_tit">휴대폰<span class="required">*</span></p>
          <p class="input "><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_telnum" name="" value="010-1234-5678" >
          </p>
        </li>
        <li class="inputBox centerFlex mb7">
          <p class="input_tit">E-mail<span class="required">*</span></p>
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_email" name="" value="aaaaaaaa@seegene.com" disabled>
          </p>
        </li>
      </ul>
      <ul class="infoInput_list">
        <li class="inputBox mb3">
          <p class="input_tit">주소 (선택)</p>
        </li>

        <li class="inputBox centerFlex mb3 address">
          <p class="input "><!--수정불가 :: disabled-->
            <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" disabled>
          </p>
          <button type="button" @click="showApi" class="btn_border sm ">검 색</button>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input">
            <input type="text" v-model="usr_address" name="" placeholder="상세주소">
          </p>
        </li>
        <li class="inputBox centerFlex mb3">
          <p class="input">
            <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소">
          </p>
        </li>
        <div ref="embed"></div>
      </ul>
    </div>
    <!--//contents-->
    <!-- footer -->
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_fill"
                @click="regUsrInfo">가입완료
        </button>
      </div>
    </div>
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
      usr_url: '',
      redirect_Uri: this.$route.query.redirect_Uri === undefined ? '/' : decodeURI(this.$route.query.redirect_Uri)
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
          'memberAddressDetail': this.usr_address_detail,
          'memberZipcode': this.usr_zipcode,
          'memberBirth': this.usr_birth,
          // 'memberGender': this.usr_gender === '남' ? 'M' : 'F',
          'memberGender': this.usr_gender,
          'memberHpno': this.usr_telnum,
          'memberName': this.usr_name,
          'socialImage': this.usr_url,
          'socialMail': this.usr_email,
          'socialName': this.usr_sname,
          'socialProvider': this.usr_provider,
          'memberMarketingAgree': sessionStorage.getItem('marketAgree')
        },
        {withCredentials: true}
      ).then(function (response) {
        if (response.data.status === 200) {
          sessionStorage.removeItem('marketAgree')
          obj.$router.push({
            path: obj.redirect_Uri
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

          this.usr_zipcode = data.zonecode // 5자리 새우편번호 사용
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
