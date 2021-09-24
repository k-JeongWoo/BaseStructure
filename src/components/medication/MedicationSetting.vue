<template>
  <div class="fullPop_wrap">
    <!--  container  -->
    <div class="container noBg medication_02">
      <!-- header -->
      <header class="header">
        <div class="headerBox">
          <h1>
            <span class="tit">약 추가/알람설정</span>
          </h1>
          <button type="button" class="txt_btn btn_left" @click="registMedichine(Object.keys($props.selectmodal).length)">
            {{ Object.keys($props.selectmodal).length === 0 ? '완료' : '수정' }}
          </button>
          <button class="btn_right" @click="openModal('close')">
            <i class="ico_close">닫기</i>
          </button>
        </div>
      </header>
      <!-- //header -->
      <!--contents-->
      <div class="contents">
        <p class="infomation_box mb6">
          <i class="icoCom_i">i</i>
          <span class="cont">복용시간과 복용약 이름을 입력하세요.</span>
        </p>
        <section>
          <h2 class="title_01">알람</h2>
          <ul class="list_styleE mt4">
            <li class="list_item reserv_timeBox">
              <p class="tit">켜짐/꺼짐</p>
              <div class="switch">
                <input type="radio" class="switch-input" name="view" value="N" id="on" checked v-model="takeMedicineAlarm">
                <label for="on" class="switch-label switch-label-off">켜짐</label>
                <input type="radio" class="switch-input" name="view" value="Y" id="off" v-model="takeMedicineAlarm">
                <label for="off" class="switch-label switch-label-on">꺼짐</label>
                <span class="switch-selection"></span>
              </div>
            </li>
          </ul>
        </section>
        <section class="mt7">
          <h2 class="title_01">시간</h2>
          <ul class="list_styleE mt4">
            <li class="list_item reserv_timeBox">
              <p class="tit">오전/오후 설정</p>
              <div class="tab_btnBox">
                <input type="radio" name="time" value="A" id="am" v-model="mechineTimerGbn" @click="selectTimeFnt(takeMedicineTime)" checked >
                <label for="am" class="label_typeTab">오전</label>
                <input type="radio" name="time" value="P" id="pm" v-model="mechineTimerGbn" @click="selectTimeFnt(takeMedicineTime)">
                <label for="pm" class="label_typeTab">오후</label>
              </div>
            </li>
            <li class="list_item reserv_timeBox">
              <p class="tit">시간 설정</p>
              <div>
<!--                <select v-model="takeMedicineTime" name="timer" style="background: white;">-->
<!--                  <option disabled value="">선택</option>-->
<!--                  <option v-for="item in timePickerSetArr" :value="item" >{{ item }}</option>-->
<!--                </select>-->
                <div class="select typeA">
                  <div class="selectbox " :class="{on : toggleTimePicker}"><!-- on 클래스 추가시 .select_options display:block-->
                    <button type="button" class="select_title placeholder" v-on:click="toggleTimePicker = !toggleTimePicker"><!--옵션 선택 전 흐린회색 placeholder속성이 필요할경우 클래스 placeholder 끼워주시면 회색 텍스트-->
                      <span>{{ takeMedicineTime }}</span>
                    </button>
                    <ul class="select_options">
                      <li class="select_option" v-for="item in timePickerSetArr" :value="item" @click="selectTimeFnt(item)">
                        {{ item }}
                      </li>
                      <!--                        <li class="select_option">09:00</li> &lt;!&ndash; on 클래스 추가시 active&ndash;&gt;-->
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section class="mt7">
          <h2 class="title_01">복용약</h2>
          <div class="mt4">
            <div class="inputBox">
              <p class="input">
                <input type="text" name="" placeholder="약이름을 입력하세요." v-model="medichinName">
              </p>
              <button type="button" class="btn_border" @click="medichinSave(Object.keys($props.selectmodal).length)">저장</button>
            </div>
          </div>
          <ul class="mediReserv_list mt4" v-for="(item, index) in medicineDetailsList">
            <li class="list_item">
              <button type="button" class="btn">
                <i class="icoCom_del" @click="medichinRemove(index, item.itemKey)">삭제</i>
              </button>
              <p>{{ item.itemName }}</p>
            </li>
          </ul>
        </section>
        <div class="btnArea mt6" v-if="Object.keys($props.selectmodal).length !== 0">
          <button type="button" class="btn_border_red" @click="registMedichine('alarmRemove')">알람/약 삭제</button>
        </div>
      </div>
      <!--//contents-->
      <div v-if="isOpenModal">
        <component :is="modalGbn">
          <div class="modal-header" slot="header">
            <h3>{{ modalTitle }}</h3>
          </div>
          <p slot="body" v-html="subTitle"></p>
          <button slot="moveBtn1" @click="cancleModal" class="btn modal-default-button">확인</button>
          <button slot="moveBtn2" @click="modalClean" class="btn">취소</button>
        </component>
      </div>
    </div>
    <!--  //container  -->
  </div>
  <!-- //fullPop_wrap -->
</template>

<script>
import {MedicationAlarmRegist, MedicationAlarmModify} from '../../api'
import confirmPopup from '../modal/ConfirmModal'
import movePopup from '../modal/MoveModal'

export default {
  props: {
    selectmodal: {}
  },
  data () {
    return {
      takeMedicineAlarm: Object.keys(this.$props.selectmodal).length === 0 ? 'Y' : this.$props.selectmodal.takeMedicineAlarm,
      mechineTimerGbn: Object.keys(this.$props.selectmodal).length === 0 ? 'A' : this.$props.selectmodal.mechineTimerGbn,
      takeMedicineTime: Object.keys(this.$props.selectmodal).length === 0 ? '선택' : this.$props.selectmodal.takeMedicineAmPm,
      medicineDetailsList: [],
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: '',
      timePickerSetArr: [],
      modalOnOff: '',
      medichinName: '',
      medichinDetail: [],
      medicineAddList: [],
      modicineRemoveList: [],
      takeMedicineId: this.$props.selectmodal.takeMedicineId,
      allRemoveDetail: [],
      toggleTimePicker: false
    }
  },
  methods: {
    selectTimeFnt (timer) {
      this.toggleTimePicker = false
      this.takeMedicineTime = timer
    },
    registMedichine (value) {
      let updateGbn = 'regist'
      if (this.takeMedicineTime === '선택') {
        this.openModal('timeSelect')
      } else if (this.medicineDetailsList.length === 0) {
        this.openModal('medichinSelect')
      } else {
        if (value === 0) {
          // 등록
          let medichinRegist = []
          this.medicineDetailsList.forEach(item => {
            medichinRegist.push(item.itemName)
          })
          const objectValue = {
            medicineDetailsList: medichinRegist,
            takeMedicineAlarm: this.takeMedicineAlarm,
            takeMedicineTime: this.takeMedicineTime,
            timeAmPm: this.mechineTimerGbn
          }
          MedicationAlarmRegist(objectValue).then(res => {
            if (res.data.resultCode === '0000') {
              this.openModal(updateGbn)
            }
          }).catch(error => { console.log(error) })
        } else {
          updateGbn = 'update'
          if (value === 'alarmRemove') {
            updateGbn = 'delete'
            this.allRemoveDetail.forEach(item => {
              this.modicineRemoveList.push(item.itemKey)
            })
          }
          // 수정
          const objectValue = {
            medicineAddList: this.medicineAddList,
            modicineRemoveList: this.modicineRemoveList,
            takeMedicineAlarm: this.takeMedicineAlarm,
            takeMedicineId: this.takeMedicineId,
            takeMedicineTime: this.takeMedicineTime,
            timeAmPm: this.mechineTimerGbn
          }
          MedicationAlarmModify(objectValue).then(res => {
            if (res.data.resultCode === '0000') {
              this.openModal(updateGbn)
            }
          }).catch(error => {
            console.log(error)
          })
        }
      }
    },
    setTimePicker (timegbn) {
      this.timePickerSetArr.splice(0)
      if (timegbn === 'A') {
        this.takeMedicineTime = '선택'
        this.toggleTimePicker = false
        // this.amResetForm()
      } else {
        this.takeMedicineTime = '선택'
        this.toggleTimePicker = false
        // this.pmResetForm()
      }
      this.pmResetForm()
    },
    medichinSave (value) {
      if (this.medichinName === '') {
        this.modalTitle = '주의'
        this.modalContent = '약 이름을 입력해주세요'
        this.modalGbn = confirmPopup
        this.modalOnOff = 'one'
      } else {
        this.medicineDetailsList.push({itemName: this.medichinName, itemKey: 0})
        if (value !== 0) {
          // 수정할때 복약 data
          this.medicineAddList.push(this.medichinName)
        }
        this.medichinName = ''
      }
    },
    medichinRemove (idx, itemKey) {
      if (idx === 'remove') {
      } else {
        if (itemKey !== 0) {
          this.modicineRemoveList.push(itemKey)
        }
        this.medicineDetailsList.splice(idx, 1)
      }
    },
    setModalCompo (pCompo) {
      if (pCompo === 'medichinSelect') {
        this.modalTitle = '주의'
        this.modalContent = '약 이름을 입력해주세요'
        this.modalGbn = confirmPopup
        this.modalOnOff = 'one'
      } else if (pCompo === 'close') {
        this.modalOnOff = 'two'
        this.modalTitle = '주의'
        this.modalContent = '입력한 내용이 저장되지 않았습니다.\n 계속하시겠어요?'
        this.modalGbn = movePopup
      } else if (pCompo === 'timeSelect') {
        this.modalGbn = confirmPopup
        this.modalOnOff = 'one'
        this.modalTitle = '주의'
        this.modalContent = '알람 시간을 선택해주세요.'
      } else if (pCompo === 'update') {
        this.modalTitle = '확인'
        this.modalContent = '수정 되었습니다.'
        this.modalOnOff = 'two'
        this.modalGbn = confirmPopup
      } else if (pCompo === 'delete') {
        this.modalTitle = '확인'
        this.modalContent = '알람이 삭제 되었습니다.'
        this.modalOnOff = 'two'
        this.modalGbn = confirmPopup
      } else if (pCompo === 'regist') {
        this.modalTitle = '확인'
        this.modalContent = '등록 되었습니다.'
        this.modalOnOff = 'two'
        this.modalGbn = confirmPopup
      }
    },
    openModal (pCompo) {
      this.setModalCompo(pCompo)
      this.isOpenModal = !this.isOpenModal
    },
    cancleModal () {
      if (this.modalOnOff === 'one') {
        this.modalClean()
      } else {
        this.$router.go()
      }
    },
    modalClean () {
      this.modalTitle = ''
      this.modalContent = ''
      this.modalOnOff = ''
      this.isOpenModal = !this.isOpenModal
    },
    // amResetForm () {
    //   let timeSet = ''
    //   let timeCnt = 0
    //   for (timeCnt; timeCnt < 24; timeCnt++) {
    //     timeSet = (Math.floor(timeCnt / 2) < 10 ? '0' + Math.floor(timeCnt / 2) : Math.floor(timeCnt / 2)) + ':' + (timeCnt % 2 === 0 ? '00' : '30')
    //     this.timePickerSetArr.push(timeSet)
    //   }
    // },
    pmResetForm () {
      let timeSet = ''
      let timeCnt = 0
      for (timeCnt; timeCnt < 24; timeCnt++) {
        if (timeCnt < 2) {
          timeSet = (Math.floor(timeCnt / 2) < 10 ? '12' : Math.floor(timeCnt / 2)) + ':' + (timeCnt % 2 === 0 ? '00' : '30')
        } else {
          timeSet = (Math.floor(timeCnt / 2) < 10 ? '0' + Math.floor(timeCnt / 2) : Math.floor(timeCnt / 2)) + ':' + (timeCnt % 2 === 0 ? '00' : '30')
        }
        this.timePickerSetArr.push(timeSet)
      }
    }
  },
  mounted () {
    this.pmResetForm()
    if (Object.keys(this.$props.selectmodal).length !== 0) {
      this.medicineDetailsList = []
      this.medichinDetail = this.$props.selectmodal
      this.takeMedicineTime = this.$props.selectmodal.takeMedicineAmPm
      this.takeMedicineAlarm = this.$props.selectmodal.takeMedicineAlarm
      this.$props.selectmodal.takeMedicineHistoryDetails.forEach(item => {
        this.medicineDetailsList.push({itemName: item.takeMedicineDetailsName, itemKey: item.takeMedicineDetailId})
        this.allRemoveDetail.push({itemName: item.takeMedicineDetailsName, itemKey: item.takeMedicineDetailId})
        this.mechineTimerGbn = this.$props.selectmodal.timeAmPm === '오후' ? 'P' : 'A'
      })
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

</style>
