<template>
    <!--contents-->
    <div class="contents">
      <div class="attendPhy_box">
        <p class="title_05 colorA">Cellimedi 협동병원</p>
        <h2 class="title_01">주치의 병원을 등록하세요!</h2>
        <p class="contTxt_06 mt4">Cellimedi 서비스를 제공하고 있는 병원들입니다.<br>
          관심병원을 등록하고 주치의 서비스를 받아보세요.</p>
      </div>
      <!-- // attendPhy_box 주치의병원등록 -->
      <ul class="hospital_list">
        <!-- //item -->
        <li class="item" v-for="item in hospitalList">
          <a @click="pageUrl(item.hospitalId, item.pdYadmNm)">
            <div class="hospital_thumb">
              <img src="../../assets/resources/images/_temp/hospital_temp02.png" alt="병원썸네일">
            </div>
            <div>
              <h3 class="title_05">{{ item.pdYadmNm }}</h3>
              <p class="title_10 mb1">{{ item.pdAddr }}</p>
              <p class="rabel_fill radius" :class="item.thirdAgreeChk === 'Y' ? 'on' : ''">{{ item.thirdAgreeChk === 'Y' ? '주치의 병원' : '미등록' }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!--//contents-->
</template>

<script>
import {hospitalList} from '../../api'

export default {
  data () {
    return {
      hospitalList: []
    }
  },
  created () {
    hospitalList().then(res => {
      console.log(res.data.data)
      this.hospitalList = res.data.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    pageUrl (searchValue, hpName) {
      this.$router.replace({path: '/hospital/hospitalDetail', query: { searchVal: searchValue, dynamicTitle: hpName }})
    }
  }
}
</script>

<style scoped>

</style>
