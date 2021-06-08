<template>
  <!-- header -->
  <header class="header">
    <div class="headerBox">
      <h1>
        <span class="tit">Title</span>
      </h1>
      <a href="#" class="btn_right">
        <div class="notic_ico">
          <button id="show-modal" v-on:click="showModal = true">x</button>
        </div>
      </a>
      <!-- //header -->

      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고!</h3>
        <h3 slot="body">종료하시겠습니까?!</h3>
      </Modal>
    </div>
  </header>
</template>

<script>
import Modal from '@/components/modal/modalView'

export default {
  data: function () {
    return {
      showModal: false
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
</style>
