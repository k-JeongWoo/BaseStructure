<template>
  <div class="container login01 noBg">
    <div id="chart" style="width: 800px; height: 400px;"></div>
    {{currentPage}} / {{pageCount}}
    <button v-on:click="currentPage++">+</button>
    <button v-on:click="currentPage--">-</button>
    <pdf v-bind:src="pdfSrc"
         :page="currentPage"
         @num-pages="pageCount = $event"
         @page-loaded="currentPage = $event" />
  </div>
</template>

<script>
import axios from 'axios'
import pdf from 'vue-pdf'

// since vue-pdf may be used server-side (see vuejs ssr)
// converts base64 string into binary data as a javascript string
var base64ToString = process.env.VUE_ENV === 'server' ? function (base64) { return Buffer.from(base64, 'base64').toString() } : window.atob

export default {
  data () {
    return {
      pdfSrc: {},
      currentPage: 0,
      pageCount: 0,
      numPages: undefined
    }
  },
  components: {
    pdf
  },
  beforeCreate () {
    var params = {
      checkupDocId: 4
    }
    var res = axios.get(`/api/v1/api/checkupDetail/checkupDocument`, { params: params })
    res.then(response => {
      this.pdfSrc = { data: base64ToString(response.data.data.checkupPdf) }
    }).catch(function (error) { console.log(error) })

    getChart()
  }
}

function getChart () {
  const graphsMode = [
    {
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
    }
  ]

  // eslint-disable-next-line no-undef,no-unused-expressions
  var chartLine = AmCharts.makeChart('chart',
    {
      'type': 'serial',
      'categoryField': 'day',
      'autoMarginOffset': 0,
      'marginTop': 70,
      'addClassNames': true,
      'color': '#C1C7DE',
      'valueAxes': [{
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelsEnabled': false,
        'balloonEnabled': false
      }],
      'chartCursor': {
        'cursorColor': '#6765E9', // 커서 세로색상
        'categoryBalloonEnabled': 0
      },
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 1,
        'gridColor': '#E6E9F4',
        'fontSize': 14,
        'boldLabels': true,
        'classNameField': 'today'
      },
      'balloon': {
        'borderThickness': 0,
        'shadowAlpha': 0
      },
      'graphs': graphsMode,
      'dataProvider': [{
        'date': '2021-06-28',
        'day': '월',
        'value': 3456
      }, {
        'date': '2021-06-29',
        'day': '화',
        'value': 4456
      }, {
        'date': '2021-06-30',
        'day': '수',
        'value': 2256
      }, {
        'date': '2021-07-1',
        'day': '목',
        'value': 7000
      }, {
        'date': '2021-07-2',
        'day': '금',
        'value': 3000
      }, {
        'date': '2021-07-3',
        'day': '토',
        'value': 4000
      }, {
        'date': '2021-07-4',
        'day': '일',
        'value': 2000,
        'today': 'today' // 보라글씨+(오늘)
      }]
    }
  )
  // today 요일 들어간 배열 순서로 스타일 먹이는 스크립트 (today_00=월 ~ today_06=일)
  let todayArr = chartLine.dataProvider.filter(function (dayname) { return dayname.today === 'today' })
  let todayNum = chartLine.dataProvider.findIndex(findToday)
  function findToday (element) {
    if (element.today === 'today') return true
  }
  todayArr[0].bulletSize = 10 // 블릿크기

  window.onload = function () {
    let todayBox = (document).getElementsByClassName('today_0')
    for (var i = 0; i < todayBox.length; i++) {
      todayBox.item(i).className += todayNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
