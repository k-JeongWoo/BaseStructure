<template>
  <!--contents-->
  <div class="contents">
    <ul class="infoInput_list mb7 mt4">
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">이름</p>
        <p class="input disabled"><!--수정불가 :: disabled style과 터치가 안되도록 css속성넣음. -->
          <input type="text" :value="memberName">
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">생년월일</p>
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" :value="memberBirth">
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">성별</p>
        <p class="radioBox">
							<span class="inputRadio typeA disabled"><!--수정불가 :: disabled-->
								<input type="radio" :value="memberGender" value="M" id="gender00" checked="" class="typeC">
								<label for="gender00">
									<span class="bul"></span>남
								</label>
							</span>
          <span class="inputRadio typeA disabled ml4"><!--수정불가 :: disabled-->
								<input type="radio" v-model="memberGender" value="F" id="gender01">
								<label for="gender01">
									<span class="bul"></span>여
								</label>
							</span>
        </p>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input_tit">휴대폰</p>
        <div class="inputBox centerFlex mb3">
          <p class="input disabled"><!--수정불가 :: disabled-->
            <input type="text" :value="memberHpno">
          </p>
<!--          <button type="button" class="btn_border sm ">수정</button>-->
        </div>
      </li>
      <li class="inputBox centerFlex mb7">
        <p class="input_tit">E-mail</p>
        <p class="input disabled">
          <input type="text" v-model="socialMail">
        </p>
      </li>
    </ul>
    <ul class="infoInput_list">
      <li class="inputBox mb3">
        <p class="input_tit">주소 (선택)</p>
      </li>
      <li>
        <div ref="embed" style="margin-bottom: 8px"></div>
      </li>
      <li class="inputBox centerFlex mb3 address">
        <p class="input disabled"><!--수정불가 :: disabled-->
          <input type="text" v-model="memberZipcode" placeholder="우편번호">
        </p>
        <button type="button" class="btn_border sm " @click="showApi">검색</button>
      </li>
      <li class="inputBox centerFlex mb3">
        <p class="input disabled">
          <input type="text" v-model="memberAddress" placeholder="주소">
        </p>
      </li>
      <li class="inputBox centerFlex ">
        <p class="input">
          <input type="text" v-model="memberRaddress" placeholder="상세주소를 입력하세요.">
        </p>
      </li>
    </ul>
    <div class="btnArea mt4">
      <a href="javascript:void(0);" class="btn_border" v-on:click="updUsrInfo()">저장</a>
    </div>

    <!--executives_certifi-->
<!--    <div class="executives_certifi">-->
<!--      <h3 class="title_05 mb3">임직원 인증</h3>-->
<!--      <div class="inputBox mb4">-->
<!--        <div class="inputBox" v-if="seegeneMailAgreeDate === ''">-->
<!--          <p class="input width03">-->
<!--            <input type="text" v-model="memberSeegenMail">-->
<!--          </p>-->
<!--          <p class="input_txt">@seegene.com</p>-->
<!--        </div>-->
<!--        <div class="inputBox" v-else>-->
<!--          <p class="input_txt">{{ seegeneMail }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="btnArea" v-if="seegeneMailAgreeDate === ''">-->
<!--        <button class="btn_border" @click="pageUrl('cetification')">인증하기</button>-->
<!--      </div>-->
<!--    </div>-->
    <!-- <div class="executives_certifi">
       <h3 class="title_05 mb3">임직원 인증</h3>
       <div class="inputBox mb4">
        <p class="input_txt">seegene@seegene.com</p>
      </div>
     </div> -->
    <!--//executives_certifi-->

    <div class="btnArea mt4">
      <button class="btn_border " @click="openModal('userDel')">회원탈퇴</button><!-- disabled 클래스 추가시 비활성화 (흐린보라색)-->
    </div>
    <div v-if="isOpenModal">
      <component :is="modalGbn">
        <div class="modal-header" slot="header">
          <h3>{{ modalTitle }}</h3>
        </div>
        <p slot="body" v-html="subTitle"></p>
        <button slot="moveBtn1" class="btn" @click="closeModal">취소</button>
        <button slot="moveBtn2"
                class="btn modal-default-button" @click="pageUrl">
          {{ this.modalOnOff === 'one' ? '탈퇴' : '확인'}}</button>
      </component>
    </div>
  </div>
  <!--//contents-->
</template>

<script>
import {fetchUserDelete, fetchEmployeeCertification, fetchUserUpdate, fetchUserDetail} from '../../api'
import confirm from '@/components/modal/MoveModal'
import contentModal from '@/components/modal/ContentModal'
import * as appService from '../../api/iosMessage'

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
      memberZipcode: '',
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: '',
      modalOnOff: '',
      memberSeegenMail: '',
      seegeneMail: '',
      seegeneMailAgreeDate: ''
    }
  },
  methods: {
    updUsrInfo: function () {
      let objectValue = {
        memberAddress: this.memberAddress,
        memberAddressDetail: this.memberRaddress,
        memberMarketingAgree: this.marketAgree === true ? 'Y' : 'N',
        memberZipcode: this.memberZipcode
      }
      fetchUserUpdate(objectValue).then(res => {
        if (res.data.status === 200) {
          alert('수정이 완료되었습니다.')
        }
      }).catch(error => { console.log(error) })
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

          this.memberZipcode = data.zonecode
          this.memberAddress = fullRoadAddr
          this.memberRaddress = ''
        }
      }).embed(this.$refs.embed)
    },
    pageUrl (pageGbn) {
      if (pageGbn === 'cetification') {
        // 임직원 인증
        this.openModal('spinner')
        let Objectvalue = {
          memberSeegenMail: this.memberSeegenMail + '@seegene.com'
        }
        fetchEmployeeCertification(Objectvalue).then(res => {
          if (res.data.resultCode === '0000') {
            // setTimeout(() => {
            //   console.log(2)
            //   this.closeModal()
            // }, 3000)
            this.closeModal()
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        // 사용자 탈퇴
        fetchUserDelete().then(res => {
          if (res.data.resultCode === '0000') {
            iosRegister()
            this.$router.push({name: 'mainHome'})
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    openModal (pCompo, intVal) {
      this.setModalCompo(pCompo, intVal)
      this.isOpenModal = !this.isOpenModal
    },
    setModalCompo (pCompo, obj) {
      if (pCompo === 'userDel') {
        this.modalGbn = confirm
        this.modalOnOff = 'one'
        this.modalTitle = '주의'
        this.modalContent = 'cellimedi에서 탈퇴하시겠습니까?\n탈퇴 시 저장하신 정보는 삭제되며\n더 이상 서비스 이용이 불가합니다.'
      } else if (pCompo === 'spinner') {
        this.modalOnOff = ''
        this.modalGbn = contentModal
      }
    },
    closeModal () {
      this.isOpenModal = !this.isOpenModal
      this.modalOnOff = ''
      this.modalTitle = ''
      this.modalContent = ''
    }
  },
  created () {
    let obj = this
    fetchUserDetail().then(response => {
      this.memberName = response.data.data.memberName
      this.memberBirth = response.data.data.memberBirth
      this.memberGender = response.data.data.memberGender
      this.memberHpno = response.data.data.memberHpno
      this.socialMail = response.data.data.socialMail
      this.socialImage = response.data.data.socialImage
      this.memberAddress = response.data.data.memberAddress
      this.memberRaddress = response.data.data.memberAddressDetail
      this.memberZipcode = response.data.data.memberZipcode
      this.seegeneMail = response.data.data.seegeneMail
      if (response.data.data.seegeneMail !== '' && response.data.data.seegeneMail !== null) {
        let emailString = response.data.data.seegeneMail
        let emailSplit = emailString.split('@')
        this.memberSeegenMail = emailSplit[0]
      }
      this.seegeneMailAgreeDate = response.data.data.seegeneMailAgreeDate
      if (response.data.data.marketAgree === 'Y') {
        obj.marketAgree = true
      } else {
        obj.marketAgree = false
      }
    }).catch(error => { console.log(error) })
  },
  computed: {
    subTitle () {
      return this.modalContent.split('\n').join('<br />')
    }
  }
}

function iosRegister () {
  var message = {
    'action': 'delete'
  }
  appService.iosinfoClean(message)
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
