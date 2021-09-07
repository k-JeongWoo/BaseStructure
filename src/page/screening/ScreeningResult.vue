<template>
  <!--contents-->
  <div class="contents">
    <div class="h-well_cont">
      <div class="start_year mb6">
        <div class="select typeA">
          <div class="selectbox" :class="{on : toggleYear}" v-on:click="yearToggle"><!-- on 클래스 추가시 .select_options display:block-->
            <button type="button" class="select_title">
              {{ selCheckupYear.year }}년{{ selCheckupYear.diagnosis !== '' ? ' - ' + selCheckupYear.diagnosis : ''}}
            </button>
            <ul class="select_options">
<!--              <li class="select_option on">2021년</li>&lt;!&ndash; on 클래스 추가시 active효과 &ndash;&gt;
              <li class="select_option">2020년</li>
              <li class="select_option">2019년</li>
              <li class="select_option">2018년</li>
              <li class="select_option">2017년</li>-->
              <li class="select_option" :class="{on : (item.pdCheckupDatetime === selCheckupYear.checkupdatetime)}"
                  v-on:click="changeYearList(item.pdCheckupYear, item.pdCheckupDatetime, item.pdCheckupDiagnosis, item.pdCheckupPlace)"
                  v-for="item in checkupList">
                {{item.pdCheckupYear}}년{{ item.pdCheckupDiagnosis !== '' ? ' - ' + item.pdCheckupDiagnosis : ''}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--//start_year-->

      <h3 class="title_03 mb4">건강검진 종합소견</h3>
      <ul class="list_noLine mb7">
        <li class="color0 mb4">
          <h4 class="title_09 mb1">검진일자 </h4>
          <p class="contTxt_06">{{ dateFomatter(selCheckupYear.checkupdatetime) }}</p>
        </li>
        <li class="color0 mb4">
          <h4 class="title_09 mb1">검진기관</h4>
          <p class="contTxt_06">{{ selCheckupYear.checkupplace }} </p>
        </li>
        <li class="color0 mb4">
          <h4 class="title_09 mb1">소견</h4>
          <p class="contTxt_06"></p>
<!--          <p class="contTxt_06">과체중입니다. 체중조절이 필요합니다. 과체중입니다. 체중조절이 필요합니다. </p>-->
        </li>
        <li class="color0 ">
          <h4 class="title_09 mb1">결과판정 </h4>
          <p class="contTxt_06">{{ selCheckupYear.diagnosis }}</p>
        </li>
      </ul>
    </div>
    <!-- //h-well_cont -->

    <div class="h-well_result">
      <h3 class="title_03 mb6">건강검진 검사결과</h3>
      <div class="general_checkup">
        <ul class="checkup_list">
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
            query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupYear : '',
            searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupTargetDisease : '',
            dynamicTitle: '비만 검사'}}">
              <div class="tit_wrap mb3">
                <h2 class="title_07">비만 검사</h2>
              </div>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">체질량지수 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.BMI.responseData.checkupDetailResult : ''}}</span>
                  <span>kg/㎡</span>
<!--                  <span class="checkup_state state01">과체중</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">신장</dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.HEI.responseData.checkupDetailResult : ''}}</span>
                  <span>cm</span>
<!--                  <span class="checkup_state state01">과체중</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">체중</dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.WEI.responseData.checkupDetailResult : ''}}</span>
                  <span>kg</span>
<!--                  <span class="checkup_state state01">과체중</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">허리둘레</dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.WAI.responseData.checkupDetailResult : ''}}</span>
                  <span>cm</span>
<!--                  <span class="checkup_state state02">복부비만</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '시력 검사(좌/우)'}}">
              <h2 class="title_07 mb3">시력 검사(좌/우)</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">시력 (좌/우) </dt>
                <dd class="title_10">
                  {{checkupDetailRenderList !== null ? checkupDetailRenderList.SIG.responseData.checkupDetailResult : ''}}
<!--                  <span>1.0</span>
                  /
                  <span>1.2</span>-->
<!--                  <span class="checkup_state">교정</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '청력 검사(좌/우)'}}">
              <h2 class="title_07 mb3">청력 검사(좌/우)</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">청력 (좌/우)</dt>
                <dd class="title_10">
                  {{checkupDetailRenderList !== null ? checkupDetailRenderList.HEA.responseData.checkupDetailResult : ''}}
<!--                  <span>정상</span>
                  /
                  <span>정상</span>-->
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '고혈압 검사'}}">
              <h2 class="title_07 mb3">고혈압 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">혈압 (최고/최저) </dt>
                <dd class="title_10">
                  {{checkupDetailRenderList !== null ? checkupDetailRenderList.TBP.responseData.checkupDetailResult : ''}}
<!--                  <span>119</span>
                  /
                  <span>76</span>-->
                  <span>mmHg</span>
<!--                  <span class="checkup_state state01">유질환자</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '빈혈 검사'}}">
              <h2 class="title_07 mb3">빈혈 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">혈색소 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.HEM.responseData.checkupDetailResult : ''}}</span>
                  <span>g/dl</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '당뇨 검사' }}">
              <h2 class="title_07 mb3">당뇨 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">공복혈당 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.FBS.responseData.checkupDetailResult : ''}}</span>
                  <span>mg/dl</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '만성신장질환 검사'}}">
              <h2 class="title_07 mb3">만성신장질환 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">혈청크레아티닌 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.SER.responseData.checkupDetailResult : ''}}</span>
                  <span>mg/dl</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">신사구체여과율 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.GFR.responseData.checkupDetailResult : ''}}</span>
                  <span>ml/min</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '간장질환 검사'}}">
              <h2 class="title_07 mb3">간장질환 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">AST </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.AST.responseData.checkupDetailResult : ''}}</span>
                  <span>U/L</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">ALT </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.ALT.responseData.checkupDetailResult : ''}}</span>
                  <span>U/L</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">감마지티피 (ƴ-GTP)</dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.GTP.responseData.checkupDetailResult : ''}}</span>
                  <span>U/L</span>
<!--                  <span class="checkup_state">정상</span>-->
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '요검사'}}">
              <h2 class="title_07 mb3">요검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">요단백 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.PRO.responseData.checkupDetailResult : ''}}</span>
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
          <li class="checkup_item">
            <router-link :to="{ path: '/screening/screeningDetail',
                                  query: { searchYear: checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupYear : '',
                                           searchDiseaseType: checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupTargetDisease : '',
                                           dynamicTitle: '폐결핵/흉부질환 검사'}}">
              <h2 class="title_07 mb3">폐결핵/흉부질환 검사</h2>
              <dl class="helthIn_detail">
                <dt class="title_10 colorH">폐결핵/흉부질환 검사 </dt>
                <dd class="title_10">
                  <span>{{checkupDetailRenderList !== null ? checkupDetailRenderList.TUB.responseData.checkupDetailResult : ''}}</span>
                  <!--state01 주의(노랑) /state02 위험(빨강)-->
                </dd>
              </dl>
            </router-link>
          </li>
          <!--//checkup_item-->
        </ul>
        <div class="btnArea ">
          <a type="button" class="btn_border" href="neohealth://import_healthexam"><i class="icoCom_refresh mr3"></i>데이터 새로고침</a>
        </div>
      </div>
      <!--//general_checkup-->
    </div>
    <!-- //h-well_result -->
  </div>
  <!--//contents-->
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      usr_name: '',
      screenType: 'N',
      checkupList: [],
      checkupDetailList: [],
      checkupDetailRenderList: null,
      selCheckupYear: {
        year: '',
        diagnosis: '',
        checkupdatetime: '',
        checkupplace: ''
      },
      toggleYear: false
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
      this.changeYearList(this.selCheckupYear.year, this.selCheckupYear.checkupdatetime, this.selCheckupYear.diagnosis, this.selCheckupYear.checkupplace)
    }).catch(function (error) { console.log(error) })
  },
  methods: {
    changeYearList: function (year, date, diagnosis, checkupplace) {
      var params = {
        searchYear: year,
        searchCheckType: this.screenType,
        searchYearMonthDate: date
      }
      this.selCheckupYear.year = year
      this.selCheckupYear.checkupdatetime = date
      this.selCheckupYear.diagnosis = diagnosis
      this.selCheckupYear.checkupplace = checkupplace

      var res = axios.get(`/api/v1/api/checkupDetail/checkupDetailList`, { params: params })
      res.then(response => {
        this.checkupDetailList = response.data.data
        var renderList = {}
        response.data.data.forEach(function (item) {
          renderList[item.checkupDetailItemCode] = item
          // renderList[item.responseData.checkupTargetDisease] = item
        })
        this.checkupDetailRenderList = renderList
        this.toggleYear = false
      }).catch(error => {
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
    dateFomatter: function (str) {
      let retStr = dayjs(String(str)).format('YYYY-MM-DD')
      if (retStr === 'Invalid Date') {
        retStr = ''
      }
      return retStr
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
