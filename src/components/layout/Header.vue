<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="tit">진료 프로그램 선택</span>
      </h1>
      <button type="button" class="btn_left" @click="historyBack">
        <i class="ico_back"></i>
      </button>
      <a href="#" class="btn_right" id="show-modal" @click="showModal = true">
        <i class="ico_close"></i>
      </a>
      <!-- //header -->
    </div>
    <div>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">선택 진료 프로그램 저장</h3>
        <h3 slot="body">선택한 진료 프로그램이 저장됩니다.</h3>
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
      showBtn: true
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
    }
  }
}
</script>

<style>
</style>
