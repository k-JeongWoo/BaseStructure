<template>
  <!--contents-->
  <div class="contents">
    <div class="visitDate_detail" v-for="item in userVisitList">
      <div class="detail_time">
        <p class="title_03">{{ item.visitDate }}</p>
      </div>
      <ul class="list_styleE">
        <li class="list_item">
          <div class="visitDetail_tit">
            <p class="title_14">
              <i class="icoCom_time_gray"></i>
              <span>{{ item.visitTime }}</span>
            </p>
          </div>
        </li>
        <li class="list_item">
          <div class="visitDetail_tit">
            <p class="title_14">
              <i class="icoCom_hos_gray"></i>
              <span>{{ item.hospitalName }}</span>
            </p>
            <button class="btn_text_size01 colorA" @click="pageUrl">
              병원정보
              <i class="icoArrow_purpleR">상세보기</i>
            </button>
          </div>
        </li>
        <li class="list_item">
          <div class="visitDetail_tit">
            <p class="title_14">
              <i class="icoCom_memo_gray"></i>
              <span>치료</span>
            </p>
          </div>
          <div class="textarea_cont">
            <p>
              {{ item.magementPlanType }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!--//visitDate_detail-->
  </div>
  <!--//contents-->
</template>

<script>
import {fetchUserVisitPlan} from '../../api'

export default {
  data () {
    return {
      userVisitList: []
    }
  },
  created () {
    const objectValue = {
      searchHospital: 1
    }
    fetchUserVisitPlan(objectValue)
      .then(res => {
        this.userVisitList = res.data.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    pageUrl () {
      alert('준비중 입니다')
    }
  }
}
</script>

<style scoped>

</style>
