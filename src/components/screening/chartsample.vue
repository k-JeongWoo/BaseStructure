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
  <div class="app_contents">
    <div v-if="isOpenModal">
      <component :is="modalGbn">
      </component>
    </div>
    <button type="button" @click="modalTestFnt('conFirm')">확인 버튼</button>
  </div>
</template>

<!--amChart.js // gaugechart  평균걸음-->
<script>
import ContentModal from '@/components/modal/ContentModal'
import moveModal from '@/components/modal/MoveModal'

export default {
  data () {
    return {
      isOpenModal: false,
      modalGbn: '',
      modalTitle: '',
      modalContent: ''
    }
  },
  methods: {
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
    }
  },
  created () {
    goodStepChart([])
  }
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
