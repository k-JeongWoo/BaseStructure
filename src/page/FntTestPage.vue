<template>
  <div>
    <h1>datepicker</h1>
    <Datepicker :language="language"
                :format="DatePickerFormat"
                :disabledDates="disabledDates"
                :highlighted="highlighted"
     >
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
      },
      highlighted: {
        days: [6, 0], // Highlight Saturday's and Sunday's
        daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
        // a custom function that returns true of the date is highlighted
        // this can be used for wiring you own logic to highlight a date if none
        // of the above conditions serve your purpose
        // this function should accept a date and return true if is highlighted
        customPredictor: function (date) {
          const dayCnt = new Date()
          console.log('date + ' + date.getMonth())
          console.log(dayCnt)
          console.log(dayCnt.getDay())
          console.log((dayCnt.getMonth()))
          console.log('a :' + date.getDate())
          console.log(':::::::::::::::::::::::: :')
          // highlights the date if it is a multiple of 4
          if (date.getDate()) {
            return true
          }
        }
      }
    }
  }
}
</script>

