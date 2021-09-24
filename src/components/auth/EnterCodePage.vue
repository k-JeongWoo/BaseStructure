<template>
  <div class="codepage">
    <h2>코드입력</h2>
    <input class="btn_border" v-model="enterCode" placeholder="cellimedi00">
    <button class="btn_border" @click="pageUrl">입장</button>
    <div v-if="isOpenModal">
      <component :is="modalGbn">
        <div class="modal-header" slot="header">
          <h3>{{ modalTitle }}</h3>
        </div>
        <p slot="body" v-html="subTitle"></p>
        <button slot="moveBtn1" @click="modalClose" class="btn modal-default-button">확인</button>
      </component>
    </div>
  </div>
</template>

<script>
import confirm from '@/components/modal/ConfirmModal'

export default {
  data () {
    return {
      enterCode: '',
      isOpenModal: false,
      modalGbn: '',
      modalContent: '',
      modalTitle: ''
    }
  },
  methods: {
    pageUrl () {
      if (this.enterCode === 'cellimedi00') {
        this.$router.replace({name: 'Lognin'})
      } else {
        this.modalGbn = confirm
        this.modalTitle = '확인'
        this.modalContent = '코드가 올바르지 않습니다 \n다시 한번 확인해주세요.'
        this.isOpenModal = !this.isOpenModal
      }
    },
    modalClose: function () {
      this.isOpenModal = !this.isOpenModal
      this.modalTitle = ''
      this.modalContent = ''
      this.modalGbn = ''
    }
  },
  computed: {
    subTitle () {
      return this.modalContent.split('\n').join('<br />')
    }
  }
}
</script>

<style scoped>
.codepage {
  text-align: center;
  margin-top: 100px;
}
.codepage h2 {
  margin: revert;
  text-decoration: underline;
}
.codepage input {
  border-color: #D7DBEC;
}
</style>
