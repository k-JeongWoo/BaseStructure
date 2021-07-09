<template>
  <div>
    <h1>datepicker</h1>
    <Datepicker :language="language"
                :format="DatePickerFormat"
                :disabledDates="disabledDates">
      asdasdasdasdasd
    </Datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {ko} from 'vuejs-datepicker/dist/locale'

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      language: ko,
      DatePickerFormat: 'yyyy-MM-dd',
      disabledDates: {
        // 주말 disabled
        days: [6, 0],
        // 오늘 이후 disabled
        // to: new Date(Date.now() - 8640000),
        customPredictor: function (date) {
          // 특정 날짜 disabled
          // disables every day of a month which is a multiple of 3npm
          const dayCnt = new Date(date)
          const day = dayCnt.getDay()
          // if (date.getDate() % 5 === 0) {
          //   return true
          // }
          // 주말 disabled
          if (day === 0 || day === 6) {
            return true
          }
        }
      }
    }
  }
}
</script>

