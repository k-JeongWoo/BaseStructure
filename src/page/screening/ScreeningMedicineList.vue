<template>
  <!--  container  -->
  <div class="contents">
    <ul class="tab_box typeA mb6">
      <li>
        <router-link :to="{ path: '/screening/screeningResult'}" class="btn_tab">
          일반검진
        </router-link>
      </li>
      <li>
        <router-link :to="{ path: '/screening/screeningCancer'}" class="btn_tab">
          암검진
        </router-link>
      <li>
        <router-link :to="{ path: '/screening/screeningMedicineList'}" class="btn_tab on">
          진료/처방
        </router-link>
      </li>
    </ul>

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
<!--
          <li class="checkup_item type01 ">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">처방조제</span>천명약국</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item type02">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">일반외래</span>대전대학교 서울한방병원</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item type01">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">처방조제</span>천명약국</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item on type02">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">일반외래</span>대전대학교 서울한방병원</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item on type01">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">처방조제</span>월드타워약국</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="title_07">베포엠정 10mg (BepoM Tab, 10mg)</p>
                <p class="contTxt_06">효능: 소화성궤양용제</p>
                <p class="contTxt_06">투약일수: 7</p>
                <p class="title_07">인데놀정 40mg (Indenol Tab, 40mg)</p>
                <p class="contTxt_06">효능: 부정맥용제</p>
                <p class="contTxt_06">투약일수: 7</p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item type01">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">처방조제</span>천명약국</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>
          &lt;!&ndash;//checkup_item&ndash;&gt;
          <li class="checkup_item type02">&lt;!&ndash; class="on" 추가시 diagPres_cont 보여짐 // type01 : 처방조제 type02 : 일반외래 &ndash;&gt;
            <div class="diagPres_tit">
              <h2 class="title_05 mb3"><span class="diagPres_type">일반외래</span>대전대학교 서울한방병원</h2>
              <p class="contTxt_06 mb3">재단법인 한국의학연구소 강남의원</p>
              <p class="contTxt_06 colorH">2021-04-03</p>
            </div>
            <div class="diagPres_cont mt4">
              <div class="diagPres_txt">
                <p class="contTxt_06">방문입원일수: <span>1</span></p>
                <p class="contTxt_06">처방횟수: <span>1</span></p>
                <p class="contTxt_06">투약요양횟수: <span>3</span></p>
              </div>
            </div>
          </li>-->
          <!--//checkup_item-->
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
    var params = {
      startDate: '20200805',
      endDate: '20210805'
    }
    fetchMedicineList(params)
      .then(res => {
        this.medicineList = res.data.data.request
        this.pharmacyList = res.data.data.response
        console.log(res.data.data.request)
        console.log(res.data.data.response)
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
