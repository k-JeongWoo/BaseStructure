<template>
  <!--  container  -->
  <div class="contents">
<!--    {{searchYear}}{{searchDiseaseType}}-->
<!--    <div>
      {{checkupDetailList}}
    </div>-->
    <div class="healthIn_detail" v-if="searchDiseaseType === 'OBE'">
      <h2 class="title_07">비만 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">체질량 지수</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.BMI.checkupDetailResult : ''}}</span>
          <span>kg/㎡</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">신장</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.HEI.checkupDetailResult : ''}}</span>
          <span>cm</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">체중</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.WEI.checkupDetailResult : ''}}</span>
          <span>kg</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">허리둘레</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.WAI.checkupDetailResult : ''}}</span>
          <span>cm</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'OBE'">
      <div class="graph_cont">
        <h3 class="contTxt_16">체질량 지수</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.BMI.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_BMI" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">신장</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.HEI.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_HEI" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">체중</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.WEI.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_WEI" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">허리둘레</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.WAI.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_WAI" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>

    <div class="healthIn_detail" v-if="searchDiseaseType === 'VIT'">
      <h2 class="title_07">시력 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">체질량 지수</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.SIG.checkupDetailResult : ''}}</span>
          <span>ml/min</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'VIT'">
      <div class="graph_cont">
        <h3 class="contTxt_16">시력 (좌/우)</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.SIG.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_SIG" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'DEA'">
      <h2 class="title_07">청력 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">청력 (좌/우)</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.HEA.checkupDetailResult : ''}}</span>
<!--          <span>ml/min</span>-->
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'DEA'">
      <div class="graph_cont">
        <h2 class="title_02">청력 (좌/우)</h2>
        <div class="normal_abnormal"><table v-html="tblHEA"></table></div>
      </div>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'HBP'">
      <h2 class="title_07">고혈압 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">혈압(최고/최저)</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.TBP.checkupDetailResult : ''}}</span>
          <span>mmHg</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'HBP'">
      <div class="graph_cont">
        <h3 class="contTxt_16">혈압(최고/최저)</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.TBP.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_TBP" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'ANE'">
      <h2 class="title_07">빈혈 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">혈색소</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.HEM.checkupDetailResult : ''}}</span>
          <span>g/dl</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'ANE'">
      <div class="graph_cont">
        <h3 class="contTxt_16">혈색소</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.HEM.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_HEM" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'DIA'">
      <h2 class="title_07">당뇨 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">공복혈당</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.FBS.checkupDetailResult : ''}}</span>
          <span>mg/dl</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'DIA'">
      <div class="graph_cont">
        <h3 class="contTxt_16">공복혈당</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.FBS.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_FBS" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'CKD'">
      <h2 class="title_07">만성신장질환 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">신사구체여과율</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.SER.checkupDetailResult : ''}}</span>
          <span>ml/min</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">혈청크레아티닌 </dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.GFR.checkupDetailResult : ''}}</span>
          <span>mg/dl</span>
<!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'CKD'">
      <div class="graph_cont">
        <h3 class="contTxt_16">신사구체여과율</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.SER.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_SER" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">혈청크레아티닌</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.GFR.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_GFR" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'LIV'">
      <h2 class="title_07">간장질환 검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">AST</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.AST.checkupDetailResult : ''}}</span>
          <span>U/L</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">ALT</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.ALT.checkupDetailResult : ''}}</span>
          <span>U/L</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">감마지티피 (ƴ-GTP)</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.GTP.checkupDetailResult : ''}}</span>
          <span>U/L</span>
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'LIV'">
      <div class="graph_cont">
        <h3 class="contTxt_16">AST</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.AST.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_AST" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">ALT</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.AST.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_ALT" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
      <div class="graph_cont">
        <h3 class="contTxt_16">감마지티피 (ƴ-GTP)</h3>
        <p class="contTxt_14">기준값 : {{discList !== null ? discList.AST.normalValueA : ''}}</p>
        <!--<p class="contTxt_14">최소 기준 값 100~150</p>-->
        <!--그래프영역-->
        <div id="chart_GTP" style="width: 100%; height: 200px;"></div>
      </div>
      <p class="contTxt_06">신장이 효과적으로 혈액을 거르는지 판단하는 지표로 수치가 높으면 신장염, 신부전증을 의심해볼 수 있음.</p>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'KDE'">
      <h2 class="title_07">요검사</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">혈색소</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.PRO.checkupDetailResult : ''}}</span>
<!--          <span>g/dl</span>-->
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'KDE'">
      <div class="graph_cont">
        <h2 class="title_02">요단백</h2>
        <div class="normal_abnormal"><table v-html="tblPRO"></table></div>
      </div>
    </div>
    <div class="healthIn_detail" v-if="searchDiseaseType === 'TUB'">
      <h2 class="title_07">폐결핵/흉부질환</h2>
      <dl class="helthIn_detail">
        <dt class="title_10 colorH">혈색소</dt>
        <dd class="title_10">
          <span>{{ checkupYearDetail !== null ? checkupYearDetail.TUB.checkupDetailResult : ''}}</span>
<!--          <span>g/dl</span>-->
          <!--          <span class="checkup_state">정상</span>-->
          <!--state01 주의(노랑) /state02 위험(빨강)-->
        </dd>
      </dl>
    </div>
    <div class="healthIn_graph" v-if="searchDiseaseType === 'TUB'">
      <div class="graph_cont">
        <h2 class="title_02">폐결핵 흉부질환</h2>
        <div class="normal_abnormal"><table v-html="tblTUB"></table></div>
        <div v-html="suspectedDisease">디스크립션</div>
      </div>
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
      checkupYearDetail: null,
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
  var dataYearObj = {}
  // var disease = obj.checkupDetailList.normalValueA + obj.checkupDetailList.normalValueB + obj.checkupDetailList.suspectedDisease
  dataList.forEach(function (item, idx) {
    var diseaseTxt = {
      normalValueA: item.normalValueA,
      normalValueB: item.normalValueB,
      suspectedDisease: item.suspectedDisease
    }
    discObj[item.checkupDetailItemCode] = diseaseTxt

    // 대상년도의 데이터 추출
    var dataLenght = item.responseData.length
    dataYearObj[item.checkupDetailItemCode] = item.responseData[dataLenght - 1]
    obj.checkupYearDetail = dataYearObj

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
    if (item.checkupDetailItemCode === 'SIG' || item.checkupDetailItemCode === 'TBP') {
      graphsMode = graphsMode2
      item.responseData.forEach(function (item2, idx) {
        var itemsplit = item2.checkupDetailResult.split('/')
        item2.checkupDetailResultSub1 = itemsplit[0]
        item2.checkupDetailResultSub2 = itemsplit[1]
      })
    } else if (item.checkupDetailItemCode === 'HEA' || item.checkupDetailItemCode === 'PRO' || item.checkupDetailItemCode === 'TUB') {
      var itemsYear = ''
      var itemsResult = ''
      item.responseData.forEach(function (item2, idx) {
        itemsYear += '<td class="year">' + item2.checkupYear + '</td>'
        let resStyle = ''
        if (item2.checkupDetailResult === '정상' || item2.checkupDetailResult === '음성' || item2.checkupDetailResult === '정상/정상') {
          resStyle = 'type00'
        } else {
          resStyle = 'type01'
        }
        itemsResult += '<td class="normal_info ' + resStyle + '"><span>' + item2.checkupDetailResult + '</span></td>'
      })
      var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
      if (item.checkupDetailItemCode === 'HEA') obj.tblHEA = tblHtml
      else if (item.checkupDetailItemCode === 'PRO') obj.tblPRO = tblHtml
      else if (item.checkupDetailItemCode === 'TUB') obj.tblTUB = tblHtml
    }
    // eslint-disable-next-line no-undef,no-unused-expressions
    AmCharts.makeChart('chart_' + item.checkupDetailItemCode,
      {
        'type': 'serial',
        'theme': 'none',
        'categoryField': 'checkupYear',
        'chartCursor': {
          'zoomable': false
        },
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
