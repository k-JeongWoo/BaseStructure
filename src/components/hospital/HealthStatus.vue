<template>
  <div class="contents">
    <div class="navShow_page" >
      <div class="box_wrap bgNone">
        <div class="box_p32 bgColorB">
          <div class="func_status">
            <h2 class="title_02" v-if="docutorInfo.careProgramId">
              <i :class="'icoProgram_0'+docutorInfo.careProgramId+' mr1'"></i><!-- icoProgram_01 : 마음 / icoProgram_02 : 신경인지 / icoProgram_03 : 심혈관 / icoProgram_04 : 근골격 / icoProgram_05 : 대사 / icoProgram_06 : 면역 / icoProgram_07 : 피부&체형 /icoProgram_08 : 기타  -->
              <span>{{ docutorInfo.careProgramName }}</span>
            </h2>
          </div>
          <div class="suggestion_doctor" v-if="docutorInfo.functionDesc && docutorInfo.functionDesc.length > 1">
            <div class="doctor_info">
              <div class="doctor_img">
                <img src="../../assets/resources/images/_temp/temp01.png" alt="의사얼굴">
              </div>
              <ul>
                <li class="sugges_date">{{ docutorInfo.functionDate }}</li>
                <li class="sugges_doc">{{ docutorInfo.staffName }}</li>
              </ul>
            </div>
            <div class="doctor_comment">
              {{ docutorInfo.functionDesc }}
            </div>
          </div>

        </div>
      </div>
      <!--//box_wrap-->
      <div class="box_wrap">
        <section class="box_p32">
          <p class="title_05 colorA">국민건강보험 데이터 </p>
          <h2 class="title_01">건강검진결과</h2>
          <div class="healthIn_graph mt4" v-show="healthResult">
            <div class="graph_cont" v-for="(item,index) in healthResult">
              <h3 class="contTxt_16">{{ item.checkupDetailItem }}</h3>
              <p class="contTxt_14">기준값 : {{ item.normalValueA }}</p>
<!--              <p class="contTxt_14">최소 기준 값 100~150</p>-->
              <div class=" mt4" v-if="item.checkupDetailItemCode !== 'HEA' && item.checkupDetailItemCode !== 'PRO' && item.checkupDetailItemCode !== 'TUB'">
                <div class="line_graph mt3">
                    <div :id="'everWalk_bargraph'+item.checkupDetailItemCode" class="graph" :ref="'everWalk_bargraph'+item.checkupDetailItemCode"></div>
                  <!--//그래프-->
                </div>
              </div>
              <div class="normal_abnormal" v-else-if="item.checkupDetailItemCode === 'HEA'"><table v-html="tblHEA"></table></div>
              <div class="normal_abnormal" v-else-if="item.checkupDetailItemCode === 'PRO'"><table v-html="tblPRO"></table></div>
              <div class="normal_abnormal" v-else><table v-html="tblTUB"></table></div>
            </div>
          </div>
        </section>
      </div>
      <!--//box_wrap-->
      <div class="box_wrap">
        <section class="box_p32">
          <p class="title_05 colorA">본원 검사 결과</p>
          <h2 class="title_01">Inbody</h2>

          <div class="inbody_box mt4">
            <div class="dateTime_box box_shadow01">
              <button type="button" class="btn_left">
                <i class="icoArrow_blackL">이전</i>
              </button>
              <p class="dateTime_txt">
                <span class="date">2021.04.21</span>
                <span class="time">11:30</span>
              </p>
              <button type="button" class="btn_right">
                <i class="icoArrow_blackR">다음</i>
              </button>
            </div>
            <!--//dateTime_box-->
            <ul class="inbody_list">
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">체중</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">60.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">골격근량</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">25.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01">
                <h3 class="title_07 mb1">체지방량</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">35.0</span>
                      <span class="title_10 colorC">kg</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01 bgColorB">
                <h3 class="title_07 mb1">BMI</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">20.76</span>
                      <!-- <span class="title_10 colorC">kg</span> -->
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
              <li class="inbody_item box_shadow01 bgColorB">
                <h3 class="title_07 mb1">체지방률</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph" style="background: transparent;">
                    <img src="../../assets/resources/images/_temp/inbody.png" style="display: block; width: 100%;" alt="인바디 이미지샘플">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">10.0</span>
                      <span class="title_10 colorC">%</span>
                    </p>
                    <p class="">
                      <span class="title_11 colorC">-</span>
                      <span class="title_11 color0">0.0</span>
                    </p>
                  </div>
                </div>
              </li>
              <!--//inbody_item-->
            </ul>
          </div>
          <!--//inbody_box-->
        </section>
      </div>
      <!--//box_wrap-->
    </div>
  </div>
</template>

<script>
import {fetchHealthDetail} from '../../api/index'

export default {
  data () {
    return {
      docutorInfo: Object,
      healthResult: Object,
      tblHEA: '',
      tblPRO: '',
      tblTUB: ''
    }
  },
  async created () {
    const objectValue = {
      careProgramId: this.$route.query.careProgramId,
      hospitalId: this.$route.query.hospitalId
    }
    await fetchHealthDetail(objectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.docutorInfo = res.data.data
        this.healthResult = res.data.data.responseData
        getChartDataParese(this)
        this.healthResult.map(item => item.checkupDetailItemCode === 'SIG' || item.checkupDetailItemCode === 'TBP' ? sortDetailArr(item.checkupDetailItemCode, this.healthResult) : null)
      }
    }).catch(error => {
      console.log(error)
    })
    if (this.healthResult) {
      this.healthResult.forEach(item => {
        fnDrawChart(item)
      })
    }
  }
}

function getChartDataParese (obj) {
  var dataLine = obj.healthResult
  dataLine.forEach(function (item, index) {
    if (item.checkupDetailItemCode === 'SIG' || item.checkupDetailItemCode === 'TBP') {
      let tempItem = {
        checkupDetailItem: item.checkupDetailItem,
        checkupDetailItemCode: item.checkupDetailItemCode,
        responseData: []
      }
      item.responseData.forEach(function (dataobj, idx) {
        var codeGbn = dataobj.checkupDetailResult.split('/')
        dataobj.checkupDetailResult = codeGbn[0]
        tempItem.responseData[idx] = {checkupDetailResult: codeGbn[1], checkupYear: dataobj.checkupYear}
        // dataobj.detailResultGbn2 = codeGbn[1]
        // healthArrary.push(dataobj)
      })
      tempItem['checkupDetailItem'] = item.checkupDetailItem
      tempItem['checkupDetailItemCode'] = item.checkupDetailItemCode + '_S'
      tempItem['normalValueA'] = item.normalValueA
      dataLine.push(tempItem)
    } else if (item.checkupDetailItemCode === 'HEA' || item.checkupDetailItemCode === 'PRO' || item.checkupDetailItemCode === 'TUB') {
      // tblTUB
      var itemsYear = ''
      var itemsResult = ''
      item.responseData.forEach(function (dataobj) {
        itemsYear += '<td class="year">' + dataobj.checkupYear + '</td>'
        let resStyle = ''
        if (dataobj.checkupDetailResult === '정상' || dataobj.checkupDetailResult === '음성' || dataobj.checkupDetailResult === '정상/정상') {
          resStyle = 'type00'
        } else {
          resStyle = 'type01'
        }
        itemsResult += '<td class="normal_info ' + resStyle + '"><span>' + dataobj.checkupDetailResult + '</span></td>'
      })
      var tblHtml = '<tr>' + itemsYear + '</tr>' + '<tr>' + itemsResult + '</tr>'
      if (item.checkupDetailItemCode === 'HEA') obj.tblHEA = tblHtml
      else if (item.checkupDetailItemCode === 'PRO') obj.tblPRO = tblHtml
      else if (item.checkupDetailItemCode === 'TUB') obj.tblTUB = tblHtml
    }
  })
}
function fnDrawChart (item) {
  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.makeChart('everWalk_bargraph' + item.checkupDetailItemCode,
    {
      'type': 'serial',
      'columnWidth': 0.5,
      'autoMarginOffset': 4,
      'marginRight': 0,
      'marginLeft': 0,
      'marginBottom': 0,
      'marginTop': 10,
      'valueAxes': [{
        'axisAlpha': 0,
        'gridAlpha': 0.7,
        'gridColor': '#D7DBEC',
        'position': 'left',
        'color': '#7E84A3',
        'fontSize': 10,
        'minimum': 0, // 최소 시작값
        // 'maximum': 500, // 최대 그리드값
        'autoGridCount': false, // 라인갯수조정하기위한 gridauto기능 풀어주기
        'gridCount': 5 // 원하는 라인 갯수
      }],
      'graphs': [
        {
          'id': 'g1',
          'valueField': 'checkupDetailResult',
          'balloonText': '[[category]]: <b>[[value]]</b>',
          'type': 'column',
          'lineAlpha': '0',
          'fillAlphas': '1',
          'fillColors': '#60CFE3',
          'colorField': 'color'
        }
      ],
      'chartCursor': {
        'zoomable': false
      },
      'categoryField': 'checkupYear',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'color': '#7E84A3',
        // '#eab144'
        'fontSize': 14
      },
      'dataProvider': item.responseData
    }
  )

  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.addInitHandler(function (chart) {
    chart.dataProvider.forEach(function (item, idx) {
      item['color'] = idx % 2 === 0 ? '#AF89FF' : '#9792FF'
    })
  })
}

function sortDetailArr (item, obj) {
  const getIdx = obj.findIndex(i => i.checkupDetailItemCode === item)
  const getItem = obj.splice(getIdx, 1)
  obj.splice(0, 0, getItem[0])
  const getIdxS = obj.findIndex(i => i.checkupDetailItemCode === (item + '_S'))
  const getItemS = obj.splice(getIdxS, 1)
  obj.splice(1, 0, getItemS[0])
}
</script>
