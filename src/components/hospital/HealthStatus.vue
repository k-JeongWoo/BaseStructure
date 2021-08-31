<template>
  <div class="contents">
    <div class="navShow_page" >
      <div class="box_wrap bgNone">
        <div class="box_p32 bgColorB">
          <div class="func_status">
            <h2 class="title_02">
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
          <div class="healthIn_graph mt4">
            <div class="graph_cont" v-for="(item,index) in healthResult">
              <h3 class="contTxt_16">신사구체여과율// {{ item.checkupDetailItem }}</h3>
              <p class="contTxt_14">기준값: 남성 11~63 | 여성 8~35 // {{ item.normalValueA }}</p>
              <p class="contTxt_14">최소 기준 값 100~150</p>
              <div class=" mt4">
                <div class="line_graph mt3">
                  <div :id="'everWalk_bargraph'+index" class="graph"></div>
                  <!--//그래프-->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!--//box_wrap-->
      <div class="box_wrap">
        <section class="box_p32">
          <p class="title_05 colorA">병원 데이터</p>
          <h2 class="title_01">건강검진결과</h2>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">155.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
                <h3 class="title_07 mb1">체지방률</h3>
                <div class="inbody_graphBox">
                  <div class="inbody_graph">
                  </div>
                  <div class="inbody_info">
                    <p class="">
                      <span class="title_02">55.0</span>
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
            </ul>

          </div>
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
      healthgraph: Object
    }
  },
  created () {
    const objectValue = {
      careProgramId: this.$route.params.careProgramId,
      hospitalId: this.$route.params.hospitalId
    }
    fetchHealthDetail(objectValue).then(res => {
      this.docutorInfo = res.data.data
      this.healthResult = res.data.data.responseData
      this.healthgraph = res.data.data.responseData
    }).catch(error => {
      console.log(error)
    }).finally(() =>
      getChartList(this.healthgraph)
    )
  }
}

function getChartList (obj) {
  var dataLine = obj
  dataLine.forEach(function (item, index) {
    var healthArrary = []
    item.responseData.forEach(function (healthGrap) {
      healthArrary.push({
        date: healthGrap.checkupYear,
        value: healthGrap.checkupDetailResult
      })
    })
    // eslint-disable-next-line no-undef,no-unused-expressions
    var chartLine = AmCharts.makeChart('everWalk_bargraph' + index,
      {
        'type': 'serial',
        'autoMarginOffset': 0,
        'marginTop': 70,
        'marginLeft': 0,
        'marginRight': 0,
        'addClassNames': true,
        'color': '#C1C7DE',
        'valueAxes': [{
          'axisAlpha': 0,
          'gridAlpha': 0,
          'labelsEnabled': false,
          'balloonEnabled': false
        }],
        'balloon': {
          'borderThickness': 0,
          'shadowAlpha': 0
        },
        'graphs': [{
          'id': 'g1',
          'type': 'smoothedLine',
          'balloon': {
            'drop': true, // 풍선모양
            'color': '#ffffff',
            'fillColor': '#6765E9',
            'fillAlpha': 1,
            'borderAlpha': 0
          },
          'bullet': 'round',
          'bulletBorderAlpha': 0,
          'useLineColorForBulletBorder': true,
          'lineColor': '#60CFE3',
          'valueField': 'value',
          'balloonText': '<span style=font-size:12px;>[[value]]</span>',
          'lineThickness': 2,
          'bulletColor': '#60CFE3',
          'bulletSize': 5,
          'bulletSizeField': 'bulletSize'
        }],
        'chartCursor': {
          'cursorColor': '#6765E9', // 커서 세로색상
          'categoryBalloonEnabled': 0
        },
        'categoryField': 'date',
        'categoryAxis': {
          'axisAlpha': 0,
          'gridAlpha': 1,
          'gridColor': '#E6E9F4',
          'fontSize': 14,
          'boldLabels': true,
          'classNameField': 'today'
        },
        'dataProvider': healthArrary
      }
    )
    // today 요일 들어간 배열 순서로 스타일 먹이는 스크립트 (today_00=월 ~ today_06=일)
    let todaynum = chartLine.dataProvider.findIndex(findToday)
    function findToday (element) {
      if (element.today === 'today') return true
    }
    let todaybox = (document).getElementsByClassName('today_0')
    for (var i = 0; i < todaybox.length; i++) {
      todaybox.item(i).className += todaynum
    }
  })
}
</script>
