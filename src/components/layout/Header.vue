<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="logo" v-if="$route.meta.titleGbn === 'IM'"> </span>
        <span class="tit" v-else-if="$route.path.indexOf('healthStatus') > -1 ">{{ $route.query.dynamicTitle }}</span>
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
      <a class="btn_right" id="show-modal" @click="selectCloseBtn($route.meta.RGNBGbn)">
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
            <router-link :to="{ path: '/doctorMain', query: { hospitalId: item.hospitalId}}">
              <li :class="$route.query.hospitalId === item.hospitalId.toString() ? 'on' : ''"><a>{{ item.pdYadmNm }}</a></li>
            </router-link>
          </template>
        </ul>
      </div>
    </div>

    <div class="nav_wrap" v-if="$route.name === 'HealthStatus'">
      <div class="slide_nav">
        <ul class="nav_list">
          <template v-for="item in healthyList">
            <router-link :to="{ path: '/hospital/healthStatus', query: { dynamicTitle: item.careProgramName, conClass: 'health_status', careProgramId: item.careProgramId, hospitalId: $route.query.hospitalId }}" replace>
              <li :class="{on: $route.query.careProgramId === item.careProgramId.toString()}">
                <a>{{ item.careProgramName }}</a></li>
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
        <button slot="moveBtn1"
                @click="confirmBtn($route.path)" class="btn modal-default-button">확인</button>
        <button slot="moveBtn2" class="btn" @click="modalClean">취소</button>
      </Modal>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/modal/MoveModal'
import {hospitalHealthyList, myHospitalList} from '../../api'

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
      hospitalId: '',
      careProgramId: this.$route.query.careProgramId
    }
  },
  components: {
    Modal: Modal
  },
  mounted () {
    this.init()
  },
  methods: {
    confirmBtn (currentUrl) {
      if (currentUrl.indexOf('screening/') > -1 ||
        currentUrl.indexOf('hospitalRegist') > -1) {
        this.historyBack()
        this.showModal = !this.showModal
      } else if (currentUrl.indexOf('login') > -1) {
        this.$router.push({name: 'mainHome'})
      } else {
        this.modalClean()
      }

      // if (this.$route.path.indexOf('hospitalRegist') > -1) {
      //   this.$router.replace({name: 'mainhome'})
      // } else {
      //   this.modalClean()
      // }
    },
    modalClean () {
      this.headModalTitle = ''
      this.headModalContent = ''
      this.showModal = !this.showModal
    },
    historyBack: function () {
      if (this.$route.path.indexOf('userdetail') > -1) {
        this.$router.push({name: 'mainHome'})
      } else {
        this.$router.go(-1)
      }
    },
    selectCloseBtn: function (valueGbn) {
      if (valueGbn === 'AR') {
        // this.headModalTitle = '알림'
        // this.headModalContent = '준비중 입니다'
        // this.showModal = !this.showModal
        this.$router.push({name: 'NoticeList'})
      } else if (valueGbn === 'CL') {
        if (this.$route.path.indexOf('screening') > -1) {
          this.$router.go(-1)
        } else {
          this.headModalTitle = '알림'
          this.headModalContent = '현재 페이지를 닫으시겠습니까?'
          this.showModal = !this.showModal
        }
      }
    },
    openGNB () {
      this.$emit('eventdata', 'on')
    },
    async init () {
      if (this.$route.name === 'DoctorMain') {
        await myHospitalList().then(res => {
          if (res.data.resultCode === '0000') {
            this.userHospitalList = res.data.data
            this.hospitalId = res.data.data[0].hospitalId
            this.$emit('eventdata', this.hospitalId)
          }
        }).catch(error => {
          console.log(error)
        })
      }
      if (this.$route.name === 'HealthStatus') {
        const objectValue = {
          hospitalId: this.$route.query.hospitalId
        }
        await hospitalHealthyList(objectValue).then(res => {
          console.log(res.data.data)
          if (res.data.resultCode === '0000') {
            this.healthyList = res.data.data.careProgramResponses
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    hospitalPageMove (moveID) {
      this.$router.push({name: 'DoctorMain', params: { hospitalId: moveID }})
    }
    // healthSatusFnt (programkey, hospitalkey, programName) {
    //   if (this.agreeChk === 'N') {
    //     this.modalTitle = '주의'
    //     this.modalContent = '제3자 정보제공 동의 후 서비스 이용이 가능합니다.'
    //     this.openModal('agree', '')
    //   } else {
    //     console.log(programkey)
    //     console.log(hospitalkey)
    //     // this.$router.push({path: '/hospital/healthStatus', query: { dynamicTitle: programName, conClass: 'health_status', careProgramId: programkey, hospitalId: hospitalkey }})
    //   }
    // }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>
