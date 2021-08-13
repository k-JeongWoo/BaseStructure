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
    <div class="box_p16 bgColorB">
      <div class="swiper-container reserSlide">
        <swiper class="swiper-wrapper reservation_list" :options="swiperOption" ref="swiper1">
          <li class="swiper-slide item"
              v-for="(item,index) in userVisitList"
              :key="index"
              ref="listCnt">
            <div class="tit">
              <p>내일 가야 할 병원</p>
            </div>
            <div class="reservation_info">
              <div class="reser_dDay red">D-<span>{{ item.ddays }}</span></div>
              <ul class="ico_listStyle01">
                <li class="list_item">
                  <i class="icoCom_day_purple">예약일</i>
                  <span>{{ item.visitDate }}</span>
                </li>
                <li class="list_item">
                  <i class="icoCom_time_purple">예약시간</i>
                  <span>{{ item.visitTime }}</span>
                </li>
                <li class="list_item">
                  <i class="icoCom_hos_purple">예약병원</i>
                  <span>{{ item.hospitalName }}</span>
                </li>
                <li class="list_item">
                  <i class="icoCom_memo_purple">예약메모</i>
                  <span>{{ item.magementPlanType }}</span>
                </li>
              </ul>
            </div>
          </li>
          <!--//item-->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false
      },
      days: [],
      userVisitList: [{'ddays': 'a', 'visitDate': '20210803', 'visitTime': '03:00', 'hospitalName': '씨젠', 'magementPlanType': 'magementPlanType'}]
    }
  },
  components: {
    Swiper,
    SwiperSlide
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
