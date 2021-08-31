<template>
  <!--  container  -->
  <div class="contents">
    <div class="h-well_result">
      <div class="diagPres_checkup">
        <ul class="checkup_list">
          <li class="checkup_item" :class="item.medicalForm === '처방조제' ? 'type01' : 'type02'"
              v-on:click="$refs['checkupItem' + index][0].classList.toggle('on')"
              :ref="'checkupItem' + index"
              v-for="(item,index) in pharmacyList"
              :key="index">
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">{{item.medicalForm === '처방조제' ? '처방조제' : '일반외래'}}</span>{{ item.medicalForm }}</h2>
              <p class="contTxt_06 mb3">{{ item.medicalPlace }}</p>
              <p class="contTxt_06 colorH">{{ item.clinicStartDate }}</p>
            </div>
            <div class="diagPres_cont mt4" v-if="item.medicalForm !== '처방조제'">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>{{ item.medicalCareCnt }}</span></p>
                <p class="contTxt_06">처방횟수: <span>{{ item.treatCnt }}</span></p>
                <p class="contTxt_06">투약요양횟수: <span>{{ item.visitCnt }}</span></p>
              </div>
            </div>
            <div class="diagPres_cont mt4" v-if="item.medicalForm === '처방조제'">
              <div class="diagPres_txt">
                <div v-for= "detail in item.medicineDetailList">
                  <p class="title_07">{{ detail.medicineName }}</p>
                  <p class="contTxt_06">효능: {{ detail.medicineEffect }}</p>
                  <p class="contTxt_06">투약일수: {{ detail.medicineTreatCnt }}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="btnArea mt4">
          <button type="button" class="btn_text_size02 colorA pb8">더보기<i class="icoArrow_purpleB ml1"></i></button>
        </div>

      </div>
    </div>
    <!-- //h-well_result -->
  </div>
  <!--  //container  -->
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import {fetchMedicineList} from '../../api'

export default {
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      medicineList: [],
      pharmacyList: []
    }
  },
  created () {
    fetchMedicineList()
      .then(res => {
        console.log(res)
        this.medicineList = res.data.data.request
        this.pharmacyList = res.data.data.response
      }).catch(error => {
        console.log(error)
      })
  },
  methods: {
    toggleView: function (idx) {
      this.$refs['checkupItem' + idx][0].classList.toggle('on')
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
