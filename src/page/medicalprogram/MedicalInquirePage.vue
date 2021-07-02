<template>
  <!--  container  -->
  <div class="container program_03">
    <!--contents-->
    <div class="contents">
      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05">인적사항</h2>
          <h2 class="title_02 mt6"><span class="colorA">김씨젠</span></h2>
          <p class="title_09 mt3">
            <span>45</span>세 (<span>남</span>) <span>010-1234-1234</span>
          </p>
          <div class="mt6">
            <div class="tit_wrap">
              <h2 class="title_05">선택 진료 프로그램 </h2>
              <button class="btn_right" @click="programListInfo"><i class="ico_more"></i>더보기</button>
            </div>
            <p class="program_list">
              <button type="button" class="program_item"
                      v-for="(item,index) in selectProgram"
                      :key="index"
                      :class="'bgColor0'+item.careProgramId"
                      :value="item.careProgramId">{{ item.careProgramName }}
              </button>
            </p>
          </div>
        </section>
      </div>
      <!---->

      <div class="box_wrap">
        <section class="box_shadow01 pb8">
          <h2 class="title_05 mb6">선택 병원</h2>
          <ul class="hospital_list">
            <li v-for="item in hospitalInfo"
                :key="item.hospitalId">
              <input type="checkbox" :id="'hospital_open0'+item.hospitalId" class="opener">
              <div class="hospital_item">
                <div class="hospital_tit">
                  <p class="inputRadio typeA">
                    <input type="radio"
                           name="hospi"
                           :id="'hospi'+item.hospitalId"
                           :v-model="selectHospital"
                           checked="checked"
                           :value="item.hospitalId">
                    <label :for="'hospi'+item.hospitalId" class="title_05">
                      <span class="bul"></span> {{ item.pdYadmNm }}
                    </label>
                    <label :for="'hospital_open0'+item.hospitalId" class="acco_arrow">
                      <i class="ico_arrowT"></i>
                    </label>
                  </p>
                </div>
                <div class="hospital_detail">
                  <ul class="medical_subject">
                    <li class="rabel_fill radius bgColor06 color0">외래진료</li>
                    <li class="rabel_fill radius bgColor06 color0">종합 건강검진</li>
                    <li class="rabel_fill radius bgColor06 color0">가정의학과</li>
                  </ul>
                  <p class="title_11  colorB">*씨젠클리닉은 (주)씨젠 임직원 및 임직원 가족에 한해 진료가 제공됩니다.</p>
                  <div class="hospital_info ">
                    <section>
                      <h3 class="title_05 mb3">진료시간</h3>
                      <ul>
                        <li class="title_09">
                          <p class="tit">평일</p>
                          <p>
                            <span>{{ item.hospitalWeekdayHours }}</span>
                          </p>
                        </li>
                        <li class="title_09">
                          <p class="tit colorD">토요일</p>
                          <p>
                            <span>{{ item.hospitalWeekendHours }}</span>
                          </p>
                        </li>
                        <li class="title_09">
                          <p class="colorB">일요일, 공휴일 휴진</p>
                        </li>
                      </ul>
                    </section>
                    <section>
                      <h3 class="title_05 mb3">위치정보</h3>
                      <p class="title_09">{{ item.pdAddr }}</p>
                    </section>
                  </div>
                </div>
              </div>
            </li>
            <!---->
          </ul>
        </section>
      </div>
      <!---->

      <div class="box_wrap">
        <section class="box_shadow01">
          <h2 class="title_05">씨젠 임직원 e-mail 주소 <span class="colorB">(필수)</span></h2>
          <p class="title_11 mt3 colorB">*씨젠클리닉은 (주)씨젠 임직원 및 임직원 가족에 한해 진료가 제공됩니다.</p>
          <div class="inputBox mt3">
            <p class="input"><input type="email" name="" placeholder="이메일 입력" v-model="emplyEmail"></p>
            <p class="txt contTxt_03 colorD">@seegene.com</p>
          </div>
        </section>
      </div>
      <!---->

      <div class="box_wrap">
        <section class="box_shadow01">
          <div class="tit_wrap">
            <h2 class="title_05">제목</h2>
            <p class="txt_right title_11 ">(250 byte 이내)</p>
          </div>
          <div class="inputBox mt3" style="margin-bottom: 15px">
            <p class="input"><input type="text" placeholder="제목 입력" v-model="mdclInqrsTitle"></p>
          </div>
          <div class="tit_wrap">
            <h2 class="title_05">문의내용 </h2>
            <p class="txt_right title_11 ">(1,000 byte 이내)</p>
          </div>
          <div class="textarea mt4">
            <textarea  placeholder="문의내용 입력" v-model="mdclInqrsDesc"></textarea>
          </div>
        </section>
      </div>
    </div>
    <!--//contents-->
    <!-- footer -->
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_border" v-on:click="validationChk">진료 문의하기</button>
      </div>
    </div>
    <!-- //footer -->

    <!--    modal-->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        {{ modalTitle }}
      </h3>
      <h3 slot="body" v-html="modalContents"></h3>
      <button slot="moveBtn1" @click="showModal = false" class="modal-default-button">확인</button>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal/ConfirmModal'
import axios from 'axios'
import 'url-search-params-polyfill'

export default {
  data: function () {
    return {
      userInfo: [],
      hospitalInfo: [0, 2],
      selectProgram: JSON.parse(this.$route.query.selectProgram),
      careProgramIds: [],
      selectHospital: this.$route.query.selectHospital,
      emplyEmail: '',
      mdclInqrsDesc: '',
      mdclInqrsTitle: '',
      showModal: false,
      modalTitle: '',
      modalContents: ''
    }
  },
  methods: {
    programListInfo: function () {
      this.$router.push('/main/MedicalInquireContents')
    },
    validationChk: function () {
      let dataObj = this
      this.selectProgram.forEach(function (item) {
        dataObj.careProgramIds.push(item.careProgramId)
      })
      if (this.emplyEmail !== '' && this.mdclInqrsDesc !== '' && this.mdclInqrsTitle !== '') {
        const params = {
          'careProgramIds': this.careProgramIds,
          'hospitalId': this.selectHospital,
          'medicalInquiryDesc': this.mdclInqrsDesc,
          'medicalInquiryTitle': this.mdclInqrsTitle,
          'medicalInquirySeegeneMail': this.emplyEmail.concat('@seegene.com')
        }
        console.log(params)
        axios.post('/api/v1/api/medicalInquery/medicalInqueryWrite', params)
          .then(function (response) {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.modalTitle = '문의글 등록 완료'
        this.modalContents = '나의 문의내역은 <p class="modal-textColor">마이페이지>온라인상담>나의문의</p> 내역 관리 에서 확인 가능합니다.'
      } else {
        if (!this.emplyEmail) {
          this.modalContents = '씨젠 임직원 e-mail주소를 입력해주세요.'
        } else if (!this.mdclInqrsDesc) {
          this.modalContents = '문의내용을 입력해주세요.'
        } else if (!this.mdclInqrsTitle) {
          this.modalContents = '제목을 입력해주세요.'
        }
      }
      this.showModal = !this.showModal
    }
  },
  created () {
    let objdata = this
    axios.get('/api/v1/api/hospital/hospitalList', {
      params: {
        hospitalId: this.selectHospital
      }
    }).then(function (response) {
      // 선택 병원정보 조회
      objdata.hospitalInfo = response.data.data.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
</style>
