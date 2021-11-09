<template>
  <!-- wrap -->
  <div class="wrap">
      <!--contents-->
      <div class="contents">
        <div class="notice_wrap">
          <div class="notice_permit">
            <p class="title_05">알림받기</p>
            <div class="switch small" :class="cssToggle" >
              <input type="radio" class="switch-input" name="view" value="N" id="on" v-model="alarmOnOff" @click="alarmFnt()">
              <label for="on" class="switch-label switch-label-off">켜짐</label>
              <input type="radio" class="switch-input" name="view" value="Y" id="off" v-model="alarmOnOff" @click="alarmFnt()">
              <label for="off" class="switch-label switch-label-on">꺼짐</label>
              <span class="switch-selection"></span>
            </div>
          </div>
          <ul class="list_styleD" v-for="item in noticeList">
            <li class="list_item" :class="item.alarmReadFlag === 'N' ? 'on' : ''"> <!-- class="on" 붙은경우 타이틀앞 블릿-->
              <a @click="pageUrl(item.alarmType, item.alarmParams)">
                <div class="titBox">
                  <p class="title_14">{{ item.alarmTitle }}</p>
                  <p class="contTxt_14 colorH">{{ item.alarmSendDate }}</p>
                </div>
                <div class="contBox">
                  <p class="contTxt_06 colorH">{{ item.alarmBody }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    <div v-if="isOpenModal">
      <component :is="modalGbn" v-bind:selectmodal="modalObj" v-bind:hospitalkey="propsdata">
        <div class="modal-header" slot="header">
          <h3>{{ modalTitle }}</h3>
        </div>
        <p slot="body" v-html="modalContent"></p>
        <button slot="moveBtn1" @click="modalData" class="btn modal-default-button">확인</button>
      </component>
    </div>
    </div>
  <!-- //wrap -->
</template>

<script>
import {fetchAlarmUpdate, fetchNoticeList} from '../../api/index'
import inquirePopup from '../hospital/InquireDetailPopup'
import confirm from '../modal/ConfirmModal'

export default {
  props: ['propsdata'],
  data () {
    return {
      noticeList: [],
      modalGbn: '',
      isOpenModal: false,
      modalObj: Number,
      modalTitle: '',
      modalContent: '',
      alarmOnOff: '',
      cssToggle: '',
      doubleClickDefence: true
    }
  },
  created: function () {
    fetchNoticeList().then(res => {
      if (res.data.resultCode === '0000') {
        this.noticeList = res.data.data.alarmLists
        this.alarmOnOff = res.data.data.pushStatus
        this.cssToggle = res.data.data.pushStatus === 'Y' ? 'onTarget' : 'offTarget'
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    pageUrl (pageGbn, key) {
      if (pageGbn === 'ANSW') {
        this.openModal(pageGbn, parseInt(key))
      }
    },
    setModalCompo (pCompo, intVal) {
      if (pCompo === 'ANSW') {
        this.modalGbn = inquirePopup
        this.modalObj = intVal
      } else if (pCompo === 'alarm') {
        this.modalGbn = confirm
      }
    },
    openModal (pCompo, intVal) {
      this.setModalCompo(pCompo, intVal)
      this.isOpenModal = !this.isOpenModal
    },
    modalData () {
      this.isOpenModal = !this.isOpenModal
      this.modalGbn = ''
      this.modalTitle = ''
      this.modalContent = ''
    },
    async alarmFnt () {
      if (this.doubleClickDefence) {
        this.doubleClickDefence = !this.doubleClickDefence
        if (this.alarmOnOff === 'Y') {
          this.cssToggle = 'offTarget'
          this.alarmOnOff = 'N'
        } else {
          this.cssToggle = 'onTarget'
          this.alarmOnOff = 'Y'
        }
        await fetchAlarmUpdate().then(res => {
          if (res.data.resultCode === '0000') {
            this.doubleClickDefence = !this.doubleClickDefence
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>
<style>
.onTarget {
  background: #60CFE3
}
.offTarget {
  background: #B4B8D0
}
</style>
