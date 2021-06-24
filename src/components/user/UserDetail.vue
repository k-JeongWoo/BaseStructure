<template>
  <!--  container  -->
  <div class="container agreement01">
    <!--contents-->
    <div class="contents">
      <div class="agreement_box">
        <h2 class="title_purple tac">
          회원 정보
          <br /><br />
          {{$route.query.name}}

        </h2>
        <div class="cntAgree">
          <div class="agree_list">
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <img src="" v-model="socialImage">
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>이름 :
                <input type="text" v-model="memberName" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>생년월일 :
                <input type="text" v-model="memberBirth" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>성별 :
                <input type="text" v-model="memberGender" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>연락처 :
                <input type="text" v-model="memberHpno" readonly/>
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>E-mail :
                <input type="text" v-model="socialMail" readonly/>
              </label>
            </p>
            <br/>
            <p class="inputCheck typeA">
                <span class="bul"></span>주소(선택) --- 임시 추후 다음 주소 api 사용예정
            </p>
            <p class="inputCheck typeA">
                <span class="bul"></span>주소 :
                <input type="text" v-model="memberAddress" placeholder="주소"/>
                <input type="text" v-model="memberRaddress" placeholder="상세주소"/>
                <div ref="embed"></div>
                <button @click="showApi">주소API 호출</button>
            </p>
            <p class="inputCheck typeA">
              <input type="checkbox" name="chckAgree" id="chckAgree" v-model="marketAgree">
              <label for="chckAgree">
                <span class="bul"></span>마케팅정보 수신 동의 (선택)
              </label>
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
        <a href="javascript:void(0);" v-on:click="updUsrInfo()" class="btn_fill ">수정</a>
        <router-link to="/mainhome" class="btn_fill ">취소</router-link>
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
      memberAddress: '',
      memberBirth: 0,
      memberGender: '',
      memberHpno: '',
      memberId: 0,
      memberName: '',
      memberRaddress: '',
      socialImage: '',
      socialMail: '',
      marketAgree: false
    }
  },
  methods: {
    updUsrInfo: function () {
      axios.post(`/api/v1/api/user/userUpdate`,
        {
          memberAddress: this.memberAddress,
          memberRaddress: this.memberRaddress,
          memberAgree: this.marketAgree === true ? 'Y' : 'N'
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

          this.memberAddress = fullRoadAddr
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
      obj.memberGender = response.data.data.memberGender === 'M' ? '남' : '여'
      obj.memberHpno = response.data.data.memberHpno
      obj.socialMail = response.data.data.socialMail
      obj.socialImage = response.data.data.socialImage
      obj.memberAddress = response.data.data.memberAddress
      obj.memberRaddress = response.data.data.memberRaddress
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
