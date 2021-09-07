<template>
      <!--contents-->
      <div class="contents">
        <div class="diagnosis_checkup">
          <div class="diagnosis_list " v-if="visitList.length !== 0">
            <template v-for="item in visitList">
              <div class="diagnosis_item" :class="item.clinicType === '진료' ? 'type01' : item.clinicType === '검사' ? 'type02' : 'type03' "><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
                <a @click="goDetail(item)">
                  <h3 class="title_07 mb1">{{ item.clinicType }}</h3>
                  <p class="title_09">{{ item.regDate }}</p>
                </a>
              </div>
            </template>
          </div>
          <div style="text-align: center" v-else>
            <template>
              <div class="visit_history_wrap box_shadow01"><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
                <div class="visit_history_detail">
                  <H4>내원 이력이 없습니다.</H4>
                </div>
              </div>
            </template>
          </div>

          <!--더보기버튼-->
          <div class="btnMoreArea" v-if="visitList.length !== 0">
            <button type="button" >더보기<i class="icoArrow_purpleB"></i></button>
          </div>
          <!--//더보기버튼-->
        </div>
        <!--//general_checkup-->
        <modal v-if="showModal" v-bind:clinicdetail="clinicObj" v-on:popupdata="modalData">

        </modal>
      </div>
      <!--//contents-->
</template>

<script>
import {recentlyVisitList} from '../../api'
import planPopup from './RecentlyDetailPopup'

export default {
  data () {
    return {
      visitList: [],
      showModal: false,
      clinicObj: []
    }
  },
  mounted () {
    const objectValue = {
      hospitalId: this.$route.query.searchVal,
      pageNo: 1
    }
    recentlyVisitList(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.visitList = res.data.data.content
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    goDetail (obj) {
      this.clinicObj = obj
      this.showModal = !this.showModal
    },
    modalData: function (value) {
      this.showModal = value
    }
  },
  components: {
    modal: planPopup
  }
}
</script>

<style scoped>

</style>
