<template>
  <!--  container  -->
  <div class="contents">
    <div class="h-well_cont">
      <div class="start_year mb6">
        <div class="select typeA" v-if="checkupDocList.length > 0">
          <div class="selectbox " :class="{on : toggleYear}" v-on:click="yearToggle"><!-- on 클래스 추가시 .select_options display:block-->
            <button type="button" class="select_title">
              {{ selCheckupYear.pdCheckupTitle }}
            </button>
            <ul class="select_options">
              <li class="select_option " :class="{on : (itemY.pdCheckupTitle === selCheckupYear.pdCheckupTitle)}"
                  v-on:click="changeYearList(itemY)"
                  v-for="(itemY, indexY) in checkupDocList">
                {{itemY.pdCheckupTitle}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--//start_year-->
    </div>
    <!-- //h-well_cont -->
    <div class="h-well_result">
      <!-- 데이터 있는 경우 cancer_checkup-->
      <div class="cancer_checkup">
        <ul class="checkup_list">
          <li class="checkup_item" v-for="(item, index) in selCheckupYear.checkupDocList">
            <a href="javascript:void(0);" v-on:click="popUpPDF(item.checkupMasterId)">
              <h2 class="title_05 mb1"><span>{{item.pdCheckupType}}</span> 검진 결과</h2>
              <p class="contTxt_06 mb1">{{item.pdCheckupPlace}}</p>
              <p class="contTxt_06 colorH">{{item.pdCheckupDate}}</p>
            </a>
          </li>
        </ul>
      </div>
      <!--//데이터 있는 경우 cancer_checkup-->

      <!-- 데이터 없는경우 noData클래스 추가
      <div class="cancer_checkup noData">
        <p class="title_06">
          조회할 수 있는 데이터가 없습니다.
        </p>
      </div>
      -->
    </div>
    <!-- //h-well_result -->
  </div>
  <!--  //container  -->
</template>

<script>
import axios from 'axios'
import CryptoJS from 'crypto-js/aes.js'

export default {
  data () {
    return {
      checkupDocList: [],
      toggleYear: false,
      selCheckupYear: {
        pdCheckupTitle: '',
        checkupDocList: null
      }
    }
  },
  created () {
    this.getCheckupDocList()
  },
  methods: {
    popUpPDF: function (checkupMasterId) {
      let obj = {
        checkupMasterId: checkupMasterId
      }
      var aes128 = CryptoJS.encrypt(obj.checkupMasterId.toString(), 'neoPriEncrypt!!!').toString()
      let routeData = this.$router.resolve({name: 'ScreeningDocumentPdf', query: {checkupMasterId: aes128}})
      window.open(routeData.href, '_blank')
    },
    getCheckupDocList: function () {
      var params = {
        'memberId': this.memberId
      }
      var res = axios.get(`/api/data/V1.0/api/checkup/checkupDocList`, {params: params})
      res.then(response => {
        if (response.data.data.length > 0) {
          this.checkupDocList = response.data.data
          this.changeYearList(this.checkupDocList[0])
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    yearToggle: function () {
      if (this.toggleYear === false) {
        this.toggleYear = true
      } else {
        this.toggleYear = false
      }
    },
    changeYearList: function (item) {
      this.selCheckupYear.pdCheckupTitle = item.pdCheckupTitle
      this.selCheckupYear.checkupDocList = item.checkupMasterDocTypeResponses
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
