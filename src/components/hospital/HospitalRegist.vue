<template>
      <!--contents-->
      <div class="contents">
        <div class="attendPhy_box">
          <p class="title_05 colorA">Cellimedi 협동병원</p>
          <h2 class="title_01">주치의 병원을 등록하세요!</h2>
          <p class="contTxt_06 mt4">Cellimedi 서비스를 제공하고 있는 병원들입니다.
            관심병원을 등록하고 주치의 서비스를 받아보세요.</p>
        </div>
        <!-- // attendPhy_box 주치의병원등록 -->
        <ul class="hospital_list typeCheck">
          <li class="item" v-for="item in totalHospitalList">
            <!--체크박스-->
            <p class="inputCheck typeA">
              <input type="checkbox" :id="'hospital_0'+item.hospitalId" v-model="checkVal" :value="item.hospitalId">
              <label :for="'hospital_0'+item.hospitalId" @click="hospitalCheck">
                <span class="bul"></span>
              </label>
            </p>
            <!--//체크박스-->
            <a @click="pageUrl(item.hospitalId, item.pdYadmNm)">
              <div class="hospital_thumb">
                <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
              </div>
              <div>
                <h3 class="title_05">{{ item.pdYadmNm }}</h3>
                <p class="title_10 mb1">{{ item.pdAddr }}</p>
              </div>
            </a>
          </li>
          <!-- //item -->
        </ul>
        <!-- footer -->
        <footer class="footer typeB">
          <div class="btnArea">
            <button class="btn_fill"
                    :class="checkVal.length === 0 ? 'disabled' : ''"
                    @click="userHospitalRegist">등록하기</button>
          </div>
        </footer>
        <!-- //footer -->
        <!--    modal-->
        <Modal v-if="showModal" @close="showModal = false">
          <div class="modal-header" slot="header">
            <h3>{{ modalTitle }}</h3>
          </div>
          <p slot="body" v-html="subTitle"></p>
          <button slot="moveBtn1" @click="modalClean"  class="btn">취소</button>
          <button slot="moveBtn2" @click="pageUrl" class="btn modal-default-button">진행</button>
        </Modal>
      </div>
      <!--//contents-->
</template>

<script>
import {hospitalCheck, hospitalList, hospitalRegist} from '../../api'
import Modal from '@/components/modal/MoveModal'

export default {
  data () {
    return {
      checkVal: [],
      showModal: false,
      modalTitle: '',
      modalContents: '',
      seegeneHospital: '',
      totalHospitalList: [],
      asyncComplete: false,
      registGbn: false
    }
  },
  created () {
    hospitalList().then(res => {
      this.totalHospitalList = res.data.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    async hospitalCheck (value) {
      if (!this.asyncComplete) {
        this.callback()
        let objectValue = {
          hospitalId: 1
        }
        hospitalCheck(objectValue).then(res => {
          if (res.data.data.seegeneHospital !== 'Y') {
            this.checkVal.splice(value)
            this.modalTitle = '주의'
            this.modalContents = '씨젠부속의원은 ㈜씨젠 임직원 및\n가족만 이용 가능합니다.\n임직원 인증을 진행하시겠습니까?'
            this.showModal = !this.showModal
          }
        }).catch(error => {
          console.log(error)
        })
        this.asyncComplete = false
      } else {
        // 부속병원 체크도중 클릭시 popUP, ( 체크하는 시간이 오래걸릴경우 예외처리 )
        this.checkVal.splice(value)
        this.modalTitle = '잠시만 기다려주세요'
        this.modalContents = '부속병원 확인중입니다.'
        this.showModal = !this.showModal
      }
    },
    modalClean () {
      this.modalTitle = ''
      this.modalContents = ''
      this.showModal = !this.showModal
    },
    pageUrl (key, value) {
      if (key !== '') {
        this.$router.push({name: 'HospitalDetail', params: { hospitalId: key, dynamicTitle: value }})
      } else {
        alert('준비중 입니다.')
        this.modalClean()
      }
      // this.$router.push({name: 'AppPersonAgree', query: { hospitalId: this.checkVal }})
    },
    callback () {
      this.asyncComplete = !this.asyncComplete
    },
    async userHospitalRegist () {
      const objectValue = {
        hospitalIds: this.checkVal
      }
      await hospitalRegist(objectValue).then(res => {
        this.$router.push({name: 'DoctorMain', params: this.checkVal[0]})
        console.log(res.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    Modal: Modal
  },
  computed: {
    subTitle () {
      return this.modalContents.split('\n').join('<br />')
    }
  }
}
</script>

<style scoped>

</style>
