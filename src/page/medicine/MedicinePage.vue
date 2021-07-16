<template>
  <div class="container program_02">
    <div class="contents">
      <div class="box_wrap">
        <div class="box_wrap">
          <section class="box_shadow01 pb8">
            <h2 class="title_05 mb6">{{ medicineList.startDate }} ~ {{ medicineList.endDate }}</h2>
            <ul v-if="pharmacyList.length > 0">
              <li class="hospital_list"
                  v-for="(item,index) in pharmacyList"
                  :key="index">
                <input type="checkbox" :id="'open_'+index" class="opener">
                <div class="hospital_item">
                  <div class="hospital_tit">
                    <p class="inputRadio typeA">
                      {{ item.medicalForm }}
                      <label :for="index" class="title_05">
                        <span class="bul"></span>
                      </label>
                      <label :for="'open_'+index" class="acco_arrow">
                        <i class="ico_arrowT"></i>
                      </label>
                    </p>
                    <p>
                      {{ item.clinicStartDate }}
                    </p>
                    <p>
                      {{ item.medicalPlace }}
                    </p>
                  </div>
                  <div class="hospital_detail">
                    <div class="hospital_info " v-if="item.medicalForm == '처방조제'">
                      <h3>진료 처방일자 : {{ item.clinicStartDate }}</h3>
                      <div v-for="detail in item.medicineDetailList">
                        <h3 class="title_05 mb3">배포엠정 : {{ detail.medicineName }}</h3>
                        <h3 class="title_05 mb3">효능 : {{ detail.medicineEffect }}</h3>
                        <h3 class="title_05 mb3">투약일수 : {{ detail.medicineTreatCnt }}</h3>
                      </div>
                    </div>
                    <div v-else>
                      <section>
                        <h3 class="title_05 mb3">방문입원일수 : {{ item.medicalCareCnt }}</h3>
                        <h3 class="title_05 mb3">처방횟수 : {{ item.treatCnt }}</h3>
                        <h3 class="title_05 mb3">투약요양횟수 : {{ item.visitCnt }}</h3>
                      </section>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul v-else>
              <li>
                <span>
                검색된 병원이 없습니다.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
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
        this.medicineList = res.data.data.request
        this.pharmacyList = res.data.data.response
        console.log(res.data.data.request)
        console.log(res.data.data.response)
      }).catch(error => {
        console.log(error)
      })
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

