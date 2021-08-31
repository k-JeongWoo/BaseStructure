<template>
      <!--contents-->
      <div class="contents">
        <div class="diagnosis_checkup">
          <div class="diagnosis_list ">
            <template v-for="(item,index) in visitList">
              <div class="diagnosis_item" :class="item.clinicType === '진료' ? 'type01' : item.clinicType === '검사' ? 'type02' : 'type03' "><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
                <a @click="goDetail(item)">
                  <h3 class="title_07 mb1">{{ item.clinicType }}</h3>
                  <p class="title_09">{{ item.regDate }}</p>
                </a>
              </div>
            </template>
          </div>
          <!--더보기버튼-->
          <div class="btnMoreArea">
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
  created () {
    const objectValue = {
      hospitalId: this.$route.params.searchVal,
      pageNo: 1
    }
    recentlyVisitList(objectValue).then(res => {
      this.visitList = res.data.data.content
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
