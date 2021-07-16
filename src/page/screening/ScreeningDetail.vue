<template>
  <!--  container  -->
  <div class="container curation_01">
    {{searchYear}} // {{searchDiseaseType}}
    <div>
      {{checkupDetailList}}
    </div>
    <div class="box_wrap" v-if="searchDiseaseType === 'OBE'">
      <section class="box_shadow01">
        <h2 class="title_02">비만검사</h2>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">체질량 지수</h2>
        <div><div id="chart_BMI" style="width: 500px; height: 200px;"></div></div>
        <div>{{discList !== null ? discList.BMI : ''}}</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">신장</h2>
        <div><div id="chart_HEI" style="width: 500px; height: 200px;"></div></div>
        <div>{{discList !== null ? discList.HEI : ''}}</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">체중</h2>
        <div> <div id="chart_WEI" style="width: 500px; height: 200px;"></div></div>
        <div>{{discList !== null ? discList.WEI : ''}}</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">허리둘레</h2>
        <div><div id="chart_WAI" style="width: 500px; height: 200px;"></div></div>
        <div>{{discList !== null ? discList.WAI : ''}}</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'VIT'">
      <section class="box_shadow01">
        <h2 class="title_02">시력 (좌/우)</h2>
        <div><div id="chart_SIG" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'DEA'">
      <section class="box_shadow01">
        <h2 class="title_02">청력 (좌/우)</h2>
        <div><table v-html="tblHEA"></table></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'HBP'">
      <section class="box_shadow01">
        <h2 class="title_02">혈압(최고/최저)</h2>
        <div><div id="chart_TBP" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'ANE'">
      <section class="box_shadow01">
        <h2 class="title_02">혈색소</h2>
        <div><div id="chart_HEM" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'DIA'">
      <section class="box_shadow01">
        <h2 class="title_02">혈색소</h2>
        <div><div id="chart_FBS" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'CKD'">
      <section class="box_shadow01">
        <h2 class="title_02">혈청크레아티닌</h2>
        <div><div id="chart_SER" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">신사구체여과율</h2>
        <div><div id="chart_GFR" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'LIV'">
      <section class="box_shadow01">
        <h2 class="title_02">AST</h2>
        <div><div id="chart_AST" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">ALT</h2>
        <div><div id="chart_ALT" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
      <section class="box_shadow01">
        <h2 class="title_02">감마지티피(y-GPT)</h2>
        <div><div id="chart_GTP" style="width: 500px; height: 200px;"></div></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'KDE'">
      <section class="box_shadow01">
        <h2 class="title_02">요단백</h2>
        <div><table v-html="tblPRO"></table></div>
        <div>디스크립션</div>
      </section>
    </div>
    <div class="box_wrap" v-else-if="searchDiseaseType === 'TUB'">
      <section class="box_shadow01">
        <h2 class="title_02">폐결핵 흉부질환</h2>
        <div><table v-html="tblTUB"></table></div>
        <div v-html="suspectedDisease">디스크립션</div>
      </section>
    </div>
  </div>
  <!--  //container  -->
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      checkupDetailList: [],
      searchYear: this.$route.query.searchYear,
      searchDiseaseType: this.$route.query.searchDiseaseType,
      tblHEA: '',
      tblPRO: '',
      tblTUB: '',
      discList: null
    }
  },
  beforeCreate () {
    var params = {
      searchYear: this.$route.query.searchYear,
      searchDiseaseType: this.$route.query.searchDiseaseType
    }
    var res = axios.get(`/api/v1/api/checkupDetail/checkupDetailDeseaseList`, { params: params })
    res.then(response => {
      this.checkupDetailList = response.data.data
      console.log(this.checkupDetailList.responseData)
      // this.changeYearList()
      getChartList(this)
    }).catch(function (error) { console.log(error) })
  },
  methods: {
  }
}

function getChartList (obj) {
  var dataList = obj.checkupDetailList.responseData
  var discObj = {}
  // var disease = obj.checkupDetailList.normalValueA + obj.checkupDetailList.normalValueB + obj.checkupDetailList.suspectedDisease
  dataList.forEach(function (item, idx) {
    var diseaseTxt = item.normalValueA + item.normalValueB + item.suspectedDisease
    discObj[item.checkupDetailItem] = diseaseTxt

    const graphsMode1 = [
      {
        'type': 'line',
        'bullet': 'round',
        'valueField': 'checkupDetailResult',
        'fillAlphas': 0
      }
    ]
    const graphsMode2 = [
      {
        'type': 'line',
        'bullet': 'round',
        'valueField': 'checkupDetailResultSub1',
        'fillAlphas': 0
      },
      {
        'type': 'line',
        'bullet': 'round',
        'valueField': 'checkupDetailResultSub2',
        'fillAlphas': 0
      }
    ]
    var graphsMode = graphsMode1

    if (item.checkupDetailItem === 'SIG' || item.checkupDetailItem === 'TBP') {
      graphsMode = graphsMode2
      item.responseData.forEach(function (item2, idx) {
        var itemsplit = item2.checkupDetailResult.split('/')
        item2.checkupDetailResultSub1 = itemsplit[0]
        item2.checkupDetailResultSub2 = itemsplit[1]
      })
    } else if (item.checkupDetailItem === 'HEA' || item.checkupDetailItem === 'PRO' || item.checkupDetailItem === 'TUB') {
      var itemsYear = ''
      var itemsResult = ''
      item.responseData.forEach(function (item2, idx) {
        itemsYear += '<td>' + item2.checkupYear + '</td>'
        itemsResult += '<td>' + item2.checkupDetailResult + '</td>'
      })
      var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
      if (item.checkupDetailItem === 'HEA') obj.tblHEA = tblHtml
      else if (item.checkupDetailItem === 'PRO') obj.tblPRO = tblHtml
      else if (item.checkupDetailItem === 'TUB') obj.tblTUB = tblHtml
    }
    // eslint-disable-next-line no-undef,no-unused-expressions
    AmCharts.makeChart('chart_' + item.checkupDetailItem,
      {
        'type': 'serial',
        'theme': 'none',
        'categoryField': 'checkupYear',
        'chartCursor': {},
        'graphs': graphsMode,
        'dataProvider': item.responseData
      }
    )
  })

  obj.discList = discObj
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
