<template>
  <div class="container program_02">
    <div>
      <v-calendar :attributes="attributes" @dayclick="onDayClick" locale="en-US"/>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-sheet height="400">
            <v-calendar
              color="primary"
              type="day"
              locale="en-US"
            >
              <template v-slot:day-header="{ present }">
                <template
                  v-if="present"
                  class="text-center"
                >
                  Today
                </template>
              </template>

              <template v-slot:interval="{ hour }">
                <div
                  class="text-center"
                >
                  {{ hour }} o'clock
                </div>
              </template>
            </v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      days: []
    }
  },
  computed: {
    dates () {
      return this.days.map(day => day.date)
    },
    attributes () {
      return this.dates.map(date => ({
        highlight: true,
        dates: date

      }))
    }
  },
  methods: {
    onDayClick (day) {
      const idx = this.days.findIndex(d => d.id === day.id)
      if (idx >= 0) {
        this.days.splice(idx, 1)
      } else {
        this.days.push({
          id: day.id,
          date: day.date
        })
      }
    }
  }
}
</script>
