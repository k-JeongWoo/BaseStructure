<template lang="html">
  <div class="container program_01">
    <div class="contents">
      <h2 class="title_01 colorA">
        요즘 관심있는 <br>
        건강 분야는 무엇인가요?
      </h2>
      <p class="contTxt_05 colorA mt4">
        관심있는 진료 프로그램을 선택하면<br>
        더 자세한 진료를 받을 수 있어요.
      </p>
      <ul class="healthField_list mt6">
        <li class="field_item"
            v-for="(item, index) in medicalProgram"
            :key="item.careProgramId"
            v-if="medicalProgram.length > 0">
          <input type="checkbox"
                 :id="index"
                 :name="index"
                 v-model="mdCheckRowCnt"
                 :value="item.careProgramId">
          <label :for="index">
            <i class="ico_mind"></i>{{ item.careProgramName }}
          </label>
        </li>
        <li class="field_item" v-else>
          등록된 진료 프로그램이 없습니다.
        </li>
      </ul>
      <!--    modal-->
      <Modal v-if="showModal"
             @close="showModal = false">
        <h3 slot="header">
          {{ modalTitle }}
        </h3>
        <h3 slot="body" v-html="modalContents"></h3>
        <button slot="moveBtn1"
                @click="showModal = false"
                class="modal-default-button">확인
        </button>
      </Modal>
    </div>
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_border"
                @click="validationChk">다음
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/modal/ConfirmModal'
import {fetchProgramlList, fetchUserProgramList} from '../../api'

export default {
  data: function () {
    return {
      medicalProgram: [],
      userMedicalProgram: [],
      mdCheckRowCnt: [],
      showModal: false,
      modalTitle: '',
      modalContents: '진료프로그램을 선택해주세요.'
    }
  },
  methods: {
    validationChk: function () {
      // this.$router.push({name: 'MedicalConsulting', query: { careProgramIds: this.mdCheckRowCnt }})
      if (this.mdCheckRowCnt.length > 0) {
        this.$emit('eventdata', this.mdCheckRowCnt)
        this.$router.push({name: 'MedicalConsulting', query: { selectProgram: this.mdCheckRowCnt }})
      } else {
        this.showModal = !this.showModal
      }
    }
  },
  created () {
    // 관심 프로그램 목록
    fetchProgramlList()
      .then(response => { this.medicalProgram = response.data.data })
      .catch(error => { console.log(error) })
    // 사용자 관심프로그램
    fetchUserProgramList()
      .then(response => {
        response.data.data.forEach(item => {
          this.mdCheckRowCnt.push(item.attentionProgramId)
        })
        console.log(this.mdCheckRowCnt)
      })
      .catch(error => { console.log(error) })
  },
  components: {
    Modal: Modal
  }
}
</script>
