<template>
<!--  <div class="box_wrap">-->
<!--    <section class="box_p32">-->
<!--      <h3 class="title_01">오늘의 좋은 걸음</h3>-->
<!--      <div class="good_walk mt4">-->
<!--        <p class="good_walkTxt type00">&lt;!&ndash;좋지않음 type00 // 보통 type01 // 좋음 type02&ndash;&gt;-->
<!--          아직 좋은 걸음으로 걷지 않으셨어요.<br>-->
<!--          도전해보세요! 1분당 100 걸음 걷기!-->
<!--        </p>-->

<!--        &lt;!&ndash;[수정] 20210802  class="mt4" 제거&ndash;&gt;-->
<!--        <p class="data_infoTxt ">-->
<!--          총<span class="num">0</span>km 중 총<span class="num">0</span>회/일-->
<!--        </p>-->
<!--        &lt;!&ndash;//[수정] 20210802 class="mt4" 제거&ndash;&gt;-->

<!--        <div class="bar_graph mt3">-->
<!--          &lt;!&ndash;그래프&ndash;&gt;-->
<!--          <div id="goodWalk_bargraph"></div>-->
<!--          &lt;!&ndash;//그래프&ndash;&gt;-->
<!--          <ul class="time_txt">-->
<!--            <li>오전 12시</li>-->
<!--            <li>오전 6시</li>-->
<!--            <li>오후 12시</li>-->
<!--            <li>오후 6시</li>-->
<!--          </ul>-->
<!--          <p class="legend">좋은 걸음</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--    <div class="app_infoImg"></div>-->
<!--  </div>-->
<!--  <div class="app_contents">-->
<!--    <div v-if="isOpenModal">-->
<!--      <component :is="modalGbn">-->
<!--      </component>-->
<!--    </div>-->
<!--    <button type="button" @click="modalTestFnt('conFirm')">확인 버튼</button>-->
<!--  </div>-->
<!--  <div>-->
<!--    <div ref="test"></div>-->
<!--    <p v-for="item in listSize" class="mt6">123 {{item}}</p>-->
<!--    <div is="suggest_gaugeGraph"></div>-->
<!--    <p v-for="item in listSize" class="mt6">123 {{item}}</p>-->
<!--    <button type="button" class="btnFix_top " @click="scrollTop" v-show="visible">위로</button>-->
<!--  </div>-->
<!--  <div class="switch small" :class="cssToggle" >-->
<!--    <input type="radio" class="switch-input" name="view" value="N" id="on" v-model="alarmOnOff"  @click="alarmFnt('1')">-->
<!--    <label for="on" class="switch-label switch-label-off">켜짐</label>-->
<!--    <input type="radio" class="switch-input" name="view" value="Y" id="off" v-model="alarmOnOff"  @click="alarmFnt('2')">-->
<!--    <label for="off" class="switch-label switch-label-on">꺼짐</label>-->
<!--    <span class="switch-selection"></span>-->
<!--    {{alarmOnOff}}-->
<!--  </div>-->
  <div class="fullPop_wrap">
    <div class="footer typeB">
      <div class="btnArea">
        <button class="btn_fill">가입
        </button>
      </div>
    </div>
    <div class="h-well_result">
      <div class="btnArea">
        <iframe id="app_init_frame" style="display:none"></iframe>
        <a type="button" class="btn_border" href="cellimedi://import_healthexam" target="app_init_frame"><i class="icoCom_refresh mr3"></i>국민건강보험 정보 다시 가져오기</a>
      </div>
    </div>
  </div>
</template>

<!--amChart.js // gaugechart  평균걸음-->
<script>
import ContentModal from '@/components/modal/ContentModal'
import moveModal from '@/components/modal/MoveModal'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

export default {
  data () {
    return {
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: '',
      listSize: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
      visible: false,
      cssToggle: 'onTarget',
      alarmOnOff: 'Y'
    }
  },
  methods: {
    scrollTop () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 100)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.screen.height + window.scrollY > window.screen.height
    },
    modalTestFnt (gbn) {
      if (gbn === 'move') {
        this.isOpenModal = !this.isOpenModal
        this.modalGbn = ContentModal
      } else if (gbn === 'conFirm') {
        this.isOpenModal = !this.isOpenModal
        this.modalGbn = moveModal
      } else {
        this.isOpenModal = !this.isOpenModal
        this.modalGbn = moveModal
      }
    },
    alarmFnt (gbn) {
      console.log(gbn)
      console.log(this.alarmOnOff)
      if (this.alarmOnOff === 'Y') {
        this.modalTitle = '확인'
        this.modalContent = '알림 받기를 설정하였습니다'
        this.cssToggle = 'offTarget'
        this.alarmOnOff = 'N'
      } else {
        this.modalTitle = '확인'
        this.modalContent = '알림을 받기를 취소하셨습니다'
        this.cssToggle = 'onTarget'
        this.alarmOnOff = 'Y'
      }
    }
  },
  created () {
    goodStepChart([])
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener)
    AvgStepFnt(0)
    // chartLine.creditsPosition = "top-right";//워터마크 위치

    am4core.createFromConfig({

      // Set inner radius
      'innerRadius': -20,

      // Create axis
      'xAxes': [{
        'type': 'ValueAxis',
        'min': 0,
        'max': 100,
        'strictMinMax': true,

        'axes': [{
          'axisAlpha': 0,
          'tickAlpha': 0,
          'labelsEnabled': false,
          'radius': '80%',
          'startValue': 0,
          'endValue': 100,
          'startAngle': -140,
          'endAngle': 140,
          'unit': '%',
          'bands': [{
            'color': '#E6E9F4',
            'startValue': 0,
            'endValue': 100,
            'radius': '100%',
            'innerRadius': '85%'
          }, {
            // 보라색게이지
            'color': '#6765E9',
            'startValue': 0,
            'endValue': 75,
            'radius': '100%',
            'innerRadius': '85%'
          }]
        }]
      }]
    }, this.$refs.test, am4charts.GaugeChart)
  }
}

function AvgStepFnt (obj) {
  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.makeChart('suggest_gaugeGraph',
    {
      'type': 'gauge',
      'autoMarginOffset': 0,
      'chartCursor': {
        'zoomable': false
      },
      'axes': [{
        'axisAlpha': 0,
        'tickAlpha': 0,
        'labelsEnabled': false,
        'radius': '80%',
        'startValue': 0,
        'endValue': 100,
        'startAngle': -140,
        'endAngle': 140,
        'unit': '%',
        'bands': [{
          'color': '#E6E9F4',
          'startValue': 0,
          'endValue': 100,
          'radius': '100%',
          'innerRadius': '85%'
        }, {
          // 보라색게이지
          'color': '#6765E9',
          'startValue': 0,
          'endValue': 75,
          'radius': '100%',
          'innerRadius': '85%'
        }]
      }]
    })
  // chartLine.creditsPosition = "top-right";//워터마크 위치
}

function goodStepChart (obj) {
  let steplist = obj.todaySetpCounts

  var dataBar = [{
    'time': '00시',
    'value': 0
  }, {
    'time': '01시',
    'value': null
  }, {
    'time': '02시',
    'value': null
  }, {
    'time': '03시',
    'value': null
  }, {
    'time': '04시',
    'value': null
  }, {
    'time': '05시',
    'value': null
  }, {
    'time': '06시',
    'value': null
  }, {
    'time': '07시',
    'value': null
  }, {
    'time': '08시',
    'value': null
  }, {
    'time': '09시',
    'value': null
  }, {
    'time': '10시',
    'value': null
  }, {
    'time': '11시',
    'value': null
  }, {
    'time': '12시',
    'value': null
  }, {
    'time': '13시',
    'value': null
  }, {
    'time': '14시',
    'value': null
  }, {
    'time': '15시',
    'value': null
  }, {
    'time': '16시',
    'value': null
  }, {
    'time': '17시',
    'value': null
  }, {
    'time': '18시',
    'value': null
  }, {
    'time': '19시',
    'value': null
  }, {
    'time': '20시',
    'value': null
  }, {
    'time': '21시',
    'value': null
  }, {
    'time': '22시',
    'value': null
  }, {
    'time': '23시',
    'value': null
  }]

  if (steplist !== undefined) {
    steplist.forEach(function (item, index) {
      let searchTarget = item.pd_standard_hour < 10 ? '0' + item.pd_standard_hour + '시' : item.pd_standard_hour + '시'
      const target = dataBar.find(e => e.time === searchTarget)
      target.value = item.pd_count
      target.color = item.goodStep === 'Y' ? '#6765E9' : '#60CFE3'
      // target.bullet = item.goodStep === 'Y' ? '../../src/assets/resources/images/common/rec.png' : '' // 보라색블릿
    })
  }

  // var chartBar =
  // eslint-disable-next-line no-undef,no-unused-expressions
  AmCharts.makeChart('goodWalk_bargraph', {
    'type': 'serial',
    'columnWidth': 0.5,
    'autoMarginOffset': 4,
    'marginRight': 0,
    'marginLeft': 0,
    'marginBottom': 0,
    'marginTop': 10,
    'chartCursor': {
      'zoomable': false
    },
    'valueAxes': [{
      'axisAlpha': 0,
      'gridAlpha': 0.7,
      'gridColor': '#E6E9F4',
      'axisColor': '#E6E9F4',
      'position': 'right',
      'color': '#9BA0BC',
      'fontSize': 10
    }],
    'categoryField': 'time',
    'categoryAxis': {
      'axisAlpha': 0,
      'gridAlpha': 0,
      'gridPosition': 'start',
      'tickPosition': 'start',
      'tickLength': 20,
      'gridColor': '#E6E9F4',
      'axisColor': '#E6E9F4',
      'labelsEnabled': false,
      'balloonEnabled': false
    },
    'graphs': [{
      'valueField': 'value',
      'balloonText': '[[category]]: <b>[[value]]</b>',
      'type': 'column',
      'lineAlpha': '0',
      'fillAlphas': '1',
      'fillColors': '#60CFE3',
      'colorField': 'color',
      'customBulletField': 'bullet',
      'bulletOffset': '6',
      'bulletSize': '6'
    }],
    'dataProvider': dataBar
  })
}
</script>
<!--Swiper.js-->
<style>
.onTarget {
  background: #60CFE3
}
.offTarget {
  background: #B4B8D0
}
</style>
