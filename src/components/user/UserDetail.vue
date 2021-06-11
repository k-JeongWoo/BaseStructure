<template>
  <!--  container  -->
  <div class="container agreement01">
    <!--contents-->
    <div class="contents">
      <div class="agreement_box">
        <h2 class="title_purple tac">
          회원 정보
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
              <label for="chckAgree04">
                <span class="bul"></span>주소(선택) --- 임시 추후 다음 주소 api 사용예정
              </label>
            </p>
            <p class="inputCheck typeA">
              <label for="chckAgree04">
                <span class="bul"></span>주소 :
                <input type="text" v-model="memberAddress" placeholder="주소"/>
                <input type="text" v-model="memberRaddress" placeholder="상세주소"/>
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
      socialMail: ''
    }
  },
  methods: {
    updUsrInfo: function () {
      axios.post(`/api/v1/api/user/userUpdate`,
        {
          memberAddress: this.memberAddress,
          memberRaddress: this.memberRaddress
        },
        {withCredentials: true}
      ).then(function (response) {
        // console.log(response)
        if (response.data.status === 200) {
          alert('수정이 완료되었습니다.')
        }
      })
    },
    regUsrInfo2 () {
      this.$router.push({
        name: 'Mainhome'
      })
    }
  },
  created () {
    let obj = this
    axios.get(`/api/v1/api/user/userDetail`,
      {},
      {withCredentials: true}
    ).then(function (response) {
      obj.memberName = response.data.data.memberName
      obj.memberBirth = response.data.data.memberBirth
      obj.memberGender = response.data.data.memberGender === 'M' ? '남' : '여'
      obj.memberHpno = response.data.data.memberHpno
      obj.socialMail = response.data.data.socialMail
      obj.socialImage = response.data.data.socialImage
      obj.memberAddress = response.data.data.memberAddress
      obj.memberRaddress = response.data.data.memberRaddress
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
</style>
