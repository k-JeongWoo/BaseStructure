<template>
  <!--contents-->
  <div class="contents">
    <ul class="infoInput_list mb7">
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">이름<span class="required">*</span></p>
        <p class="input "><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
          <input type="text" v-model="usr_name" name="" placeholder="이름을 입력하세요." >
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">생년월일<span class="required">*</span></p>
        <p class="input "><!--수정불가 :: disabled-->
          <input type="text" v-model="usr_birth" name="" placeholder="생년월일 8자 (예:19990101)" maxlength="8">
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
          <input type="text" v-model="usr_telnum" name="" placeholder="(-)없이 입력하세요."  maxlength="11">
        </p>
      </li>
      <li class="inputBox centerFlex mb7">
        <p class="input_tit">E-mail<span class="required">*</span></p>
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" v-model="usr_email" name="">
        </p>
      </li>
    </ul>
    <ul class="infoInput_list">
      <li class="inputBox mb3">
        <p class="input_tit">주소 (선택)</p>
      </li>
      <li>
        <div ref="embed" class="mb3"></div>
      </li>
      <li class="inputBox centerFlex mb3 address">
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" v-model="usr_zipcode" name="" placeholder="우편번호" >
        </p>
        <button type="button" @click="showApi" class="btn_border sm ">검 색</button>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input disabled">
          <input type="text" v-model="usr_address" name="" placeholder="주소" >
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input">
          <input type="text" v-model="usr_address_detail" name="" placeholder="상세주소를 입력하세요.">
        </p>
      </li>
    </ul>
    <!-- footer -->
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_fill"
                @click="regUsrInfo">가입
        </button>
      </div>
    </div>
    <!-- //footer -->
    <div v-if="isOpenModal">
      <component :is="modalGbn">
        <div class="modal-header" slot="header">
          <h3>{{ modalTitle }}</h3>
        </div>
        <p slot="body" v-html="modalContent"></p>
        <button slot="moveBtn2" @click.once="registSave" class="btn modal-default-button">확인</button>
        <button slot="moveBtn1" @click="isOpenModal = !isOpenModal" class="btn">취소</button>
      </component>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import dayjs from 'dayjs'
import moveModal from '../modal/MoveModal'
import * as appService from '../../api/iosMessage'
import {fetchUserAddInfoRegist, fetchUserBasicInfo} from '../../api'

export default {
  data () {
    return {
      usr_name: '',
      usr_sname: '',
      usr_birth: '',
      // usr_gender: this.$route.params.usrgender === 'M' ? '남' : '여',
      usr_gender: 'M',
      usr_telnum: '',
      usr_email: '',
      usr_zipcode: '',
      usr_address: '',
      usr_address_detail: '',
      usr_provider: '',
      usr_url: '',
      redirect_Uri: this.$route.query.redirect_Uri === undefined ? '/' : decodeURI(this.$route.query.redirect_Uri),
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: ''
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
      if (obj.usr_name === '' || obj.usr_name === undefined) {
        alert('이름을 입력해주세요.')
      } else if (obj.usr_birth === undefined) {
        alert('생년월일을 입력해주세요.')
      } else if (obj.usr_telnum === undefined) {
        alert('연락처를 입력해주세요.')
      } else if (obj.usr_birth < 19200101 || obj.usr_birth > dayjs(new Date()).format('YYYYMMDD')) {
        alert('생년월일을 다시 입력해주세요.')
      } else if (phoneFomatter(obj.usr_telnum) === 'error') {
        alert('연락처를 다시 입력해주세요.')
      } else {
        this.setModalCompo('regist')
      }
    },
    setModalCompo (pCompo) {
      if (pCompo === 'regist') {
        this.modalGbn = moveModal
        this.modalTitle = '알림'
        this.modalContent = '입력한 정보로 가입하시겠습니까?'
        this.isOpenModal = !this.isOpenModal
      }
    },
    registSave () {
      let objectValue = {
        'memberAddress': this.usr_address,
        'memberAddressDetail': this.usr_address_detail,
        'memberZipcode': this.usr_zipcode,
        'memberBirth': this.usr_birth,
        'memberGender': this.usr_gender,
        'memberHpno': this.usr_telnum,
        'memberName': this.usr_name,
        'socialImage': this.usr_url,
        'socialMail': this.usr_email,
        'socialName': this.usr_sname,
        'socialProvider': this.usr_provider,
        'memberMarketingAgree': sessionStorage.getItem('marketAgree')
      }
      fetchUserAddInfoRegist(objectValue).then(response => {
        if (response.data.status === 200) {
          iosRegister()
          sessionStorage.removeItem('marketAgree')
          this.$router.push({path: '/'})
        } else {
          alert(response.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    showApi () {
      let width = window.screen.width * 0.8
      let height = window.screen.height * 0.8
      new window.daum.Postcode({
        width: width,
        height: height,
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
    fetchUserBasicInfo().then(response => {
      if (response.data.resultCode === '0000') {
        this.usr_sname = response.data.data.name
        this.usr_email = response.data.data.email
        this.usr_provider = response.data.data.provider
        this.usr_url = response.data.data.picture
      } else {
        alert(response.data.resultMsg)
      }
    }).catch(error => { console.log(error) })
  },
  watch: {
    usr_telnum: function () {
      this.usr_telnum = this.usr_telnum.replace(/[^0-9]/g, '') // 정규식 사용
    },
    usr_birth: function () {
      this.usr_birth = this.usr_birth.replace(/[^0-9]/g, '') // 정규식 사용
    }
  }
}

function iosRegister () {
  var message = {
    'action': 'register'
  }
  appService.iosinfoClean(message)
}

function phoneFomatter (num) {
  var formatNum = ''
  if (num.length === 11) {
    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
  } else if (num.length === 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2')
  } else {
    if (num.indexOf('02') === 0) {
      formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
    } else {
      formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    }
  }

  var phoneRule = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/
  if (!phoneRule.test(formatNum)) {
    formatNum = 'error'
  }
  return formatNum
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/resources/css/common.css';
@import '../../assets/resources/css/contents.css';
.input input::placeholder {color: #808080!important;}
.input.disabled {color: #808080; -webkit-text-fill-color: rgba(128, 128, 128, 1.0); opacity:1;}
.inputRadio.typeA.disabled input[type="radio"] + label{color: #808080!important;}
</style>
