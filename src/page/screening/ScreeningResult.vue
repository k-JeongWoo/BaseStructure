<template>
  <!--  container  -->
  <div class="container curation_01">
    <!--contents-->
    <div class="contents">
        <div class="box_wrap">
          <section class="box_shadow01">
            <h2 class="title_02"><span class="colorA">{{ usr_name }}</span> 님의 건강 정보</h2>
          </section>
        </div>
      <!---->
      <div class="box_wrap">
        <select v-model="selCheckupYear" @change="changeYearList">
          <option v-for="item in checkupList" v-bind:value="{
            year: item.pdCheckupYear,
            diagnosis: item.pdCheckupDiagnosis,
            checkupdatetime: item.pdCheckupDatetime,
            checkupplace: item.pdCheckupPlace}">
            {{item.pdCheckupYear}} - {{item.pdCheckupDiagnosis}}
          </option>
        </select>

        <div class="box_wrap">
          <section class="box_shadow01">
            <div class="medication_detailList">
              <p class="select">
                <select v-model="screenType">
                  <option value="N">일반</option>
                  <option value="C">암</option>
                </select>
              </p>
            </div>
          </section>
        </div>
<!--
        N("일반"),
        L("생애"),
        C("암(위 )"),
        O("구강");
        -->
<!--        <div>
          {{selCheckupYear}}
        </div>-->
        <div class="box_wrap">
          <section class="box_shadow01">
            <button style="float: right;" ><router-link :to="{ path: '/screening/screeningDetail', query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupYear : '',searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupTargetDisease : ''}}">go Detail</router-link></button>
            <h2 class="title_02">비만검사</h2>
            <div>체질량 지수 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupDetailResult : ''}}</div>
            <div>신장 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.HEI.responseData.checkupDetailResult : ''}}</div>
            <div>체중 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.WEI.responseData.checkupDetailResult : ''}}</div>
            <div>허리둘레 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.WAI.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">시력검사 (좌/우)</h2>
            <div>시력 (좌/우) : {{checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">청력검사 (좌/우)</h2>
            <div>청력 (좌/우) : {{checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">고혈압 검사</h2>
            <div>혈압(최고/최저) : {{checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">빈혈 검사</h2>
            <div>혈색소 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">당뇨 검사</h2>
            <div>공복혈당 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">만성신장질환 검사</h2>
            <div>혈청크레아티닌 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupDetailResult : ''}}</div>
            <div>신사구체여과율 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.GFR.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">간장질환 검사</h2>
            <div>AST : {{checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupDetailResult : ''}}</div>
            <div>ALT : {{checkupDetailRenderList !== null ? checkupDetailRenderList.ALT.responseData.checkupDetailResult : ''}}</div>
            <div>감마지티피(y-GPT) : {{checkupDetailRenderList !== null ? checkupDetailRenderList.GTP.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">요검사</h2>
            <div>요단백 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <button style="float: right;" >
              <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupTargetDisease : ''}}">
                go Detail
              </router-link>
            </button>
            <h2 class="title_02">폐결핵/흉부질환 검사</h2>
            <div>폐결핵 흉부질환 : {{checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupDetailResult : ''}}</div>
          </section>
          <section class="box_shadow01">
            <h2 class="title_02">암(자궁경부)</h2>
            <div>폐결핵 흉부질환 : </div>
          </section>
        </div>
      </div>
      <!---->


    </div>
    <!--//contents-->
  </div>
  <!--  //container  -->
  <!-- aside  --><!-- //aside  -->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      usr_name: '',
      screenType: 'N',
      checkupList: [],
      checkupDetailList: [],
      checkupDetailRenderList: null,
      selCheckupYear: {}
    }
  },
  beforeCreate () {
    var params = {
      searchCheckType: this.screenType
    }

    var res = axios.get(`/api/v1/api/checkup/myCheckupList`, { params: params })
    res.then(response => {
      this.checkupList = response.data.data
      this.selCheckupYear.year = response.data.data[0].pdCheckupYear
      this.selCheckupYear.diagnosis = response.data.data[0].pdCheckupDiagnosis
      this.selCheckupYear.checkupdatetime = response.data.data[0].pdCheckupDatetime
      this.selCheckupYear.checkupplace = response.data.data[0].pdCheckupPlace
      this.changeYearList()
    }).catch(function (error) { console.log(error) })
  },
  methods: {
    changeYearList: function () {
      var params = {
        searchYear: this.selCheckupYear.year,
        searchCheckType: this.screenType,
        searchYearMonthDate: this.selCheckupYear.checkupdatetime
      }

      var res = axios.get(`/api/v1/api/checkupDetail/checkupDetailList`, { params: params })
      res.then(response => {
        this.checkupDetailList = response.data.data
        var renderList = {}
        response.data.data.forEach(function (item) {
          renderList[item.checkupDetailItem] = item
        })
        this.checkupDetailRenderList = renderList
        console.log(this.checkupDetailRenderList)
        // console.log(this.checkupDetailRenderList)
      }).catch(function (error) { console.log(error) })
    }
  },
  created () {
    this.usr_name = sessionStorage.getItem('usr_name')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
