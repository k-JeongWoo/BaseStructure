<template lang="html">
  <div>
    <ul>
      <li v-for="item in mdprogram"
          v-on:click="customRow(item.carePrgmId)"
          :class="item.carePrgmId === mdselectedRow ? 'custom-highlight-row' : ''">{{ item.carePrgrmName }}</li>
    </ul>
    <div class="nextbtn">
      <button v-on:click="validationChk">다음</button>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        <li class="closeBtn fas fa-times" v-if="showModal" @click="showModal = false">경고!   x</li>
      </h3>
      <h3 slot="body">진료프로그램을 선택해주세요.</h3>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/modal/modalView'

export default {
  data: function () {
    return {
      mdprogram: [],
      mdselectedRow: null,
      showModal: false
    }
  },
  methods: {
    customRow: function (idx) {
      this.mdselectedRow = idx
    },
    validationChk: function () {
      if (this.mdselectedRow == null) {
        this.showModal = !this.showModal
      } else {
        var router = this.$router
        router.push('/main/medicalCouncle')
      }
    }
  },
  created () {
    var datalist = this
    axios.get('/api/v1/api/carePrgm/carePrgList')
      .then(function (response) {
        datalist.mdprogram = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  components: {
    Modal: Modal
  }
}
</script>

<style lang="css" scoped>
.custom-highlight-row {
  background-color: pink
}
.nextbtn {
  margin-top: 30px;
}
</style>
