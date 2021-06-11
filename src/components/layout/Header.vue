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

      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고!</h3>
        <h3 slot="body">종료하시겠습니까?!</h3>
        <button slot="moveBtn1" @click="confrimBtn">확인</button>
        <button slot="moveBtn2" @click="cancleBtn">취소</button>
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
    cancleBtn: function () {
      console.log('cancle')
    },
    historyBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
