<template>
  <!--contents-->
  <div class="contents">
    <template v-if="userVisitList.length !== 0">
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
              <button class="btn_text_size01 colorA" @click="pageUrl(item.hospitalId)">
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
    </template>
    <div style="text-align: center" v-else>
      <template>
        <div class="visit_history_wrap box_shadow01"><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
          <div class="visit_history_detail">
            <H4>내원 내원일 정보가 없습니다.</H4>
          </div>
        </div>
      </template>
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
  mounted () {
    const objectValue = {
      searchHospital: this.$route.query.searchVal
    }
    fetchUserVisitPlan(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.userVisitList = res.data.data
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    pageUrl (searchVal) {
      this.$router.push({path: '/hospital/hospitalDetail', query: { dynamicTitle: '문의내용 상세보기', conClass: 'noBg question_detail', searchVal: searchVal }})
    }
  }
}
</script>

<style scoped>

</style>
