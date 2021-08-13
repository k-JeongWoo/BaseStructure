<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="logo" v-if="$route.meta.titleGbn === 'IM'"> </span>
        <span class="tit" v-else>{{ $route.meta.titleTxt }} </span>
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
      <a href="#" class="btn_right" id="show-modal" @click="selectCloseBtn">
        <i class="ico_close"
           v-if="$route.meta.RGNBGbn === 'CL'"></i>
        <div class="notic_ico"
             v-if="$route.meta.RGNBGbn === 'AR'">
          <i class="ico_bell">알림</i>
          <p class="num"><span>+99</span></p>
        </div>
      </a>
      <!-- //header -->
    </div>

    <!--nav_wrap-->
    <div class="nav_wrap" v-if="$route.name.indexOf('DoctorMain') > -1 && userHospitalList.length > 0">
      <div class="slide_nav">
        <ul class="nav_list">
          <template v-for="item in userHospitalList">
            <li class="on" >
              <router-link :to="{ path: 'DoctorMain', query: { hospitalId: item.hospitalId !== null ? item.hospitalId : 1}}">{{ item.pdYadmNm }}</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!--//nav_wrap-->
    <div>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ headModalTitle }}</h3>
        <h3 slot="body">{{ headModalContent }}</h3>
        <button slot="moveBtn1" @click="confirmBtn" class="modal-default-button">확인</button>
        <button slot="moveBtn2" @click="modalClean()">취소</button>
      </Modal>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/modal/MoveModal'
import {fetchProgramRegist, hospitalList} from '../../api'

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
      hospitalId: ''
    }
  },
  components: {
    Modal: Modal
  },
  created () {
    console.log('create')
    this.init()
  },
  methods: {
    confirmBtn: function () {
      if (this.$route.path.indexOf('medical')) {
        // 관심프로그램 등록
        fetchProgramRegist(this.$props.propsdata)
          .then(res => {
            this.$router.push('/mainhome')
            this.showModal = !this.showModal
          }).catch(error => console.log(error))
      }
    },
    historyBack: function () {
      this.$router.go(-1)
    },
    selectCloseBtn: function () {
      if (this.$route.path.indexOf('medical') > -1) {
        this.headModalTitle = '선택 진료 프로그램 저장'
        this.headModalContent = '선택한 진료 프로그램이 저장됩니다.'
      } else if (this.$route.path.indexOf('hospitalRegist') > -1) {
        this.headModalTitle = '주의'
        this.headModalContent = '등록을 취소 하시겠습니까?'
      }
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
        this.$emit('stringdata', this.hospitalId)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>
