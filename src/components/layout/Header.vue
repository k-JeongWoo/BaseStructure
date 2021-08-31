<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="logo" v-if="$route.meta.titleGbn === 'IM'"> </span>
        <span class="tit" v-else>{{ $route.meta.titleTxt }}</span>
      </h1>
      <button type="button" class="btn_left" >
        <i class="ico_bugger"
           @click="openGNB"
           v-if="$route.meta.LGNBGbn === 'HA'">
          메뉴
        </i>
        <i class="ico_back" v-else-if="$route.meta.LGNBGbn === 'BA'" @click="historyBack"></i>
        <i class="" v-else></i>
      </button>
      <a class="btn_right" id="show-modal" @click="selectCloseBtn">
        <i class="ico_close"
           v-if="$route.meta.RGNBGbn === 'CL'"></i>
        <div class="notic_ico"
             v-if="$route.meta.RGNBGbn === 'AR'">
          <i class="ico_bell">알림</i>
<!--          <p class="num"><span>+99</span></p>-->
        </div>
      </a>
      <!-- //header -->
    </div>
    <ul class="tab_box typeA"
        v-if="$route.path.indexOf('screeningResult') > -1 ||
        $route.path.indexOf('screeningCancer') > -1 ||
        $route.path.indexOf('screeningMedicineList') > -1">
      <li>
        <router-link :to="{ name: 'ScreeningResult', params: { dynamicTitle: '국민건강보험 정보 관리', conClass: 'noBg healthIn_info01' }}" class="btn_tab" :class="$route.path.indexOf('screeningResult') > -1 ? 'on' : ''" replace>
          일반검진
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ScreeningCancer', params: { dynamicTitle: '국민건강보험 정보 관리', conClass: 'noBg healthIn_info02' }}" class="btn_tab" :class="$route.path.indexOf('screeningCancer') > -1 ? 'on' : ''" replace>
          암검진
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ScreeningMedicineList', params: { dynamicTitle: '국민건강보험 정보 관리', conClass: 'noBg healthIn_info03' }}" class="btn_tab" :class="$route.path.indexOf('screeningMedicineList') > -1 ? 'on' : ''" replace>
          진료/처방
        </router-link>
      </li>
    </ul>
    <!--nav_wrap-->
    <div class="nav_wrap" v-if="$route.name.indexOf('DoctorMain') > -1">
      <div class="slide_nav">
        <ul class="nav_list">
          <template v-for="item in userHospitalList">
            <router-link :to="{ name: 'DoctorMain'+item.index }"
                         @click.native="hospitalPageMove(item.hospitalId !== null ? item.hospitalId : 1)">
              <li :class="$route.params.hospitalId === item.hospitalId ? 'on' : ''"><a>{{ item.pdYadmNm }}</a></li>
            </router-link>
          </template>
        </ul>
      </div>
    </div>

    <div class="nav_wrap" v-if="$route.name.indexOf('HealthStatus') > -1">
      <div class="slide_nav">
        <ul class="nav_list">
          <template v-for="(item,index) in healthyList">
            <router-link :to="{ name: 'HealthStatus'+item.index}"
                         @click.native="healthSatusFnt(item.careProgramId, propsdata, item.careProgramName)">
              <li :class="$route.params.careProgramId === item.careProgramId ? 'on' : ''"><a>{{ item.careProgramName }}</a></li>
            </router-link>
          </template>
        </ul>
      </div>
    </div>
    <!--//nav_wrap-->
    <div>
      <Modal v-if="showModal" @close="showModal = false">
        <div class="modal-header" slot="header">
          <h3>{{ headModalTitle }}</h3>
        </div>
        <p slot="body" v-html="headModalContent"></p>
        <button slot="moveBtn1" @click="confirmBtn" class="btn modal-default-button">확인</button>
        <button slot="moveBtn2" class="btn" @click="modalClean">취소</button>
      </Modal>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/modal/MoveModal'
import {hospitalHealthyList, hospitalList} from '../../api'

export default {
  props: ['propsdata'],
  data: function () {
    return {
      showModal: false,
      showBtn: true,
      headModalTitle: '',
      headModalContent: '',
      prevRoute: null,
      userHospitalList: [],
      userHealthyList: [],
      healthyList: [],
      hospitalId: ''
    }
  },
  components: {
    Modal: Modal
  },
  created () {
    this.init()
  },
  methods: {
    confirmBtn: function () {
      if (this.$route.path.indexOf('hospitalRegist')) {
        this.$router.replace({name: 'Mainhome'})
      }
      this.showModal = !this.showModal
    },
    historyBack: function () {
      this.$router.go(-1)
    },
    selectCloseBtn: function () {
      // if (this.$route.path.indexOf('medical') > -1) {
      //   this.headModalTitle = '선택 진료 프로그램 저장'
      //   this.headModalContent = '선택한 진료 프로그램이 저장됩니다.'
      // } else if (this.$route.path.indexOf('hospitalRegist') > -1) {
      //   this.headModalTitle = '주의'
      //   this.headModalContent = '등록을 취소 하시겠습니까?'
      // }
      this.headModalTitle = '알림'
      this.headModalContent = '준비중 입니다'
      this.showModal = !this.showModal
    },
    modalClean () {
      this.headModalTitle = ''
      this.headModalContent = ''
      this.showModal = !this.showModal
    },
    openGNB () {
      this.$emit('eventdata', 'on')
    },
    async init () {
      await hospitalList().then(res => {
        this.userHospitalList = res.data.data
        this.hospitalId = res.data.data[0].hospitalId
        this.$emit('eventdata', this.hospitalId)
      }).catch(error => {
        console.log(error)
      })
      const objectValue = {
        hospitalId: this.propsdata
      }
      await hospitalHealthyList(objectValue).then(res => {
        this.healthyList = res.data.data.careProgramResponses
      }).catch(error => {
        console.log(error)
      })
    },
    hospitalPageMove (moveID) {
      this.$router.push({name: 'DoctorMain', params: { hospitalId: moveID }})
    },
    healthSatusFnt (programkey, hospitalkey, programName) {
      if (this.agreeChk === 'N') {
        this.modalTitle = '주의'
        this.modalContent = '제3자 정보제공동의 후 서비스 이용이 가능합니다.'
        this.openModal('agree', '')
      } else {
        this.$router.push({name: 'HealthStatus', params: { dynamicTitle: programName, conClass: 'health_status', careProgramId: programkey, hospitalId: hospitalkey }})
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>
