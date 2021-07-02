<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="tit" v-show="$route.path.indexOf('/medicalprogram') > -1">진료 프로그램 선택</span>
        <span class="tit" v-show="$route.path.indexOf('/medicalConsulting') > -1 ||
                                  $route.path.indexOf('/medicalInquire') > -1">진료문의</span>
        <span class="tit" v-show="$route.path.indexOf('/auth/') > -1">정보 입력</span>
        <span class="logo" v-show="$route.path.indexOf('/screeningInfo') > -1">viocross </span>
      </h1>
      <button type="button" class="btn_left" >
        <i class="ico_bugger" v-if="$route.path.indexOf('/main/') > -1">메뉴</i>
        <i class="" v-else-if="$route.path.indexOf('/first/') > -1"></i>
        <i class="ico_back" v-else @click="historyBack"></i>
      </button>
      <a href="#" class="btn_right" id="show-modal" @click="urlCheck">
        <i class="ico_close" v-if="$route.path.indexOf('/medical/') > -1 "></i>
        <div class="notic_ico" v-if="$route.path.indexOf('screeningInfo') > -1">
          <i class="ico_bell">알림</i>
          <p class="num"><span>+99</span></p>
        </div>
      </a>
      <!-- //header -->
    </div>
    <div>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ headModalTitle }}</h3>
        <h3 slot="body">{{ headModalContent }}</h3>
        <button slot="moveBtn1" @click="confrimBtn" class="modal-default-button">확인</button>
        <button slot="moveBtn2" @click="showModal = false">취소</button>
      </Modal>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/modal/MoveModal'

export default {
  data: function () {
    return {
      showModal: false,
      showBtn: true,
      headModalTitle: '',
      headModalContent: '',
      prevRoute: null
    }
  },
  components: {
    Modal: Modal
  },
  methods: {
    confrimBtn: function () {
      console.log('btn')
    },
    historyBack: function () {
      this.$router.go(-1)
    },
    urlCheck: function () {
      if (this.currentUrl.indexOf('medical')) {
        this.headModalTitle = '선택 진료 프로그램 저장'
        this.headModalContent = '선택한 진료 프로그램이 저장됩니다.'
      }
      this.showModal = !this.showModal
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>

<style>
</style>
