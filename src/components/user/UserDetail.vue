<template>
  <!--contents-->
  <div class="contents">
    <ul class="infoInput_list mb7 mt4">
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">이름<span class="required">*</span></p>
        <p class="input disabled"><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
          <input type="text"v-model="memberName" disabled>
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">생년월일<span class="required">*</span></p>
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" v-model="memberBirth" disabled>
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">성별<span class="required">*</span></p>
        <p class="radioBox">
							<span class="inputRadio typeA disabled"><!--수정불가 :: disabled-->
								<input type="radio" v-model="memberGender" value="M" id="gender00" checked="" disabled>
								<label for="gender00">
									<span class="bul"></span>남
								</label>
							</span>
          <span class="inputRadio typeA disabled ml4"><!--수정불가 :: disabled-->
								<input type="radio" v-model="memberGender" value="F" id="gender01" disabled>
								<label for="gender01">
									<span class="bul"></span>여
								</label>
							</span>
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">휴대폰<span class="required">*</span></p>
        <div class="inputBox centerFlex mb3">
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" v-model="memberHpno" disabled>
          </p>
          <button type="button" class="btn_border sm ">수정</button>
        </div>
      </li>
      <li class="inputBox centerFlex mb7">
        <p class="input_tit">E-mail<span class="required">*</span></p>
        <p class="input">
          <input type="text" v-model="socialMail" >
        </p>
      </li>
    </ul>
    <ul class="infoInput_list">
      <li class="inputBox mb3">
        <p class="input_tit">주소 (선택)</p>
      </li>
      <li>
        <div ref="embed"></div>
      </li>
      <li class="inputBox centerFlex mb3 address">
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" v-model="memberZipcode" placeholder="우편번호" disabled>
        </p>
        <button type="button" class="btn_border sm " @click="showApi">검색</button>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input">
          <input type="text" v-model="memberAddress" placeholder="상세주소">
        </p>
      </li>
      <li class="inputBox centerFlex ">
        <p class="input">
          <input type="text" v-model="memberRaddress" placeholder="상세주소">
        </p>
      </li>
    </ul>
    <div class="btnArea mt4">
      <a href="javascript:void(0);" class="btn_border" v-on:click="updUsrInfo()">저장</a>
    </div>

    <!--executives_certifi-->
    <div class="executives_certifi">
      <h3 class="title_05 mb3">임직원 인증</h3>
      <div class="inputBox mb4">
        <div class="inputBox">
          <p class="input width03 disabled">
            <input type="text" name="" value="아이디" disabled>
          </p>
          <p class="input_txt">@seegene.com</p>
        </div>
      </div>
      <div class="btnArea">
        <a href="" class="btn_border">인증하기</a>
      </div>
    </div>
    <!-- <div class="executives_certifi">
       <h3 class="title_05 mb3">임직원 인증</h3>
       <div class="inputBox mb4">
        <p class="input_txt">seegene@seegene.com</p>
      </div>
     </div> -->
    <!--//executives_certifi-->

    <div class="btnArea">
      <a href="" class="btn_border ">회원탈퇴</a><!-- disabled 클래스 추가시 비활성화 (흐린보라색)-->
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      memberAddress: '',
      memberBirth: 0,
      memberGender: '',
      memberHpno: '',
      memberId: 0,
      memberName: '',
      memberRaddress: '',
      socialImage: '',
      socialMail: '',
      marketAgree: false,
      memberZipcode: ''
    }
  },
  methods: {
    updUsrInfo: function () {
      console.log(this.memberZipcode)
      axios.post(`/api/v1/api/user/userUpdate`,
        {
          memberAddress: this.memberAddress,
          memberAddressDetail: this.memberRaddress,
          memberMarketingAgree: this.marketAgree === true ? 'Y' : 'N',
          memberZipcode: this.memberZipcode
        },
        {withCredentials: true}
      ).then(function (response) {
        console.log(response)
        if (response.data.status === 200) {
          alert('수정이 완료되었습니다.')
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

          this.memberZipcode = data.zonecode
          this.memberAddress = fullRoadAddr
          this.memberRaddress = ''
        }
      }).embed(this.$refs.embed)
    }
  },
  created () {
    let obj = this
    axios.get(`/api/v1/api/user/userDetail`,
      {},
      {withCredentials: true}
    ).then(function (response) {
      // console.log(response)
      obj.memberName = response.data.data.memberName
      obj.memberBirth = response.data.data.memberBirth
      obj.memberGender = response.data.data.memberGender
      obj.memberHpno = response.data.data.memberHpno
      obj.socialMail = response.data.data.socialMail
      obj.socialImage = response.data.data.socialImage
      obj.memberAddress = response.data.data.memberAddress
      obj.memberRaddress = response.data.data.memberAddressDetail
      obj.memberZipcode = response.data.data.memberZipcode
      let mAchk = response.data.data.marketAgree
      if (mAchk === 'Y') {
        obj.marketAgree = true
      } else {
        obj.marketAgree = false
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
