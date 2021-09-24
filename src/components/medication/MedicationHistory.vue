<template>
  <div class="fullPop_wrap" ref="fixScroll">
    <div class="container medication_01">
    <!-- header -->
    <header class="header">
      <div class="headerBox">
        <h1>
          <span class="tit">내가 먹은 약 기록</span>
        </h1>
        <button class="btn_right" @click="closePopup">
          <i class="ico_close" >닫기</i>
        </button>
      </div>
    </header>
    <!-- //header -->
    <!--contents-->
    <div class="contents">
      <div class="medication_dateMonth">
        <button type="button" class="btn_left" @click="searchMonth('back')">
          <i class="icoArrow_purpleL">이전</i>
        </button>
        <p class="title_02">
          <span>{{ todayYear }}</span>년 <span>{{ todayMonth }}</span>월
        </p>
        <!--
         * 데이터가 있는 최초 시작 월 일 경우 ​
          이전 월 이동 버튼 비노출 ​

          * 마지막 페이지일 경우 ​
          이후 월 이동 버튼 비노출
        -->
        <button type="button" class="btn_right" v-show="(compareYear === todayYear &&  todayMonth < compareMonth) || (compareYear > todayYear)" @click="searchMonth('next')">
          <i class="icoArrow_purpleR">다음</i>
        </button>
      </div>
      <ul class="medication_listBox" v-if="historyList.length !== 0">
        <li class="item" v-for="item in historyList">
          <p class="list_dateBox title_03">
            <span>{{ item.takeMedicineHistoryDate }}</span>
          </p>
          <div class="detail_mediList" v-for="subitem in item.takeMedicineHistories">
            <div class="detail_item">
              <div class="detail_time">
                <i class="icoCom_time_gray02">시간</i>
                <p>{{ subitem.timeAmPm }} {{ subitem.takeMedicineAmPm }}</p>
              </div>
              <ul class="list_styleE">
                <li class="list_item" v-for="detail in subitem.takeMedicineHistoryDetails">
                  <span class="medi_name">{{ detail.takeMedicineDetailsName }}</span>
                  <span class="medi_state" :class="detail.intakeTakeMedicine === 'Y' ? '' : 'colorI'">{{ detail.intakeTakeMedicine === 'Y' ? '복용완료' : '미복용'}}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <template v-else>
        <div class="visit_history_wrap box_shadow01" style="text-align: center" ><!-- type01:진료(보라색) / type02:검사(하늘색) / type03:치료(주황색) -->
          <div class="visit_history_detail">
            <H3>복약한 기록이 없습니다.</H3>
          </div>
        </div>
      </template>
      <!--//medication_listBox-->
      <div class="btnArea" v-show="historyList.length >= 5">
        <button type="button" class="btn_text_size02 colorA ">더보기<i class="icoCom_arrowB_purple ml1"></i></button>
      </div>
    </div>
    <!--//contents-->
    <!-- footer -->
    <button type="button" class="btnFix_top " @click="scrollTop">위로</button> <!-- opaHide 클래스 추가시 사라짐.-->
    <!--//footer -->
    </div>
<!--    <router-view :key="$route.fullPath + 'h'"></router-view>-->
  </div>
</template>

<script>
import {MedicationHistory} from '../../api'
import dayjs from 'dayjs'

export default {
  data () {
    return {
      today: dayjs().format('YYYY-MM-DD'),
      todayYear: dayjs().year(),
      todayMonth: dayjs().add(1, 'month').month(),
      compareMonth: dayjs().add(1, 'month').month(),
      compareYear: dayjs().year(),
      todayDate: dayjs().date(),
      historyList: [],
      monthCount: 0,
      yearCount: 0
    }
  },
  created () {
    let ObjectValue = {
      pageNo: 1,
      searchInterval: this.monthCount
    }
    MedicationHistory(ObjectValue).then(res => {
      if (res.data.resultCode === '0000') {
        this.historyList = res.data.data.content
        res.data.data.content.forEach(item => {
          this.$set(item, 'takeMedicineHistoryDate', dateFormatFnt(item.takeMedicineHistoryDate))
        })
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    closePopup () {
      this.$emit('popupdata', false)
    },
    searchMonth (moveGbn) {
      if (moveGbn === 'back') {
        this.monthCount--
        this.todayMonth = dayjs().add(this.monthCount + 1, 'month').month()
        if (this.todayMonth === 0) {
          this.yearCount--
          this.todayYear = dayjs().add(this.yearCount, 'year').year()
          this.todayMonth = 12
        }
      } else if (moveGbn === 'next') {
        this.monthCount++
        this.todayMonth = dayjs().add(this.monthCount + 1, 'month').month()
        if (this.todayMonth === 0) {
          this.todayMonth = 12
        } else if (this.todayMonth === 1) {
          this.yearCount++
          this.todayYear = dayjs().add(this.yearCount, 'year').year()
        }
      }
      let ObjectValue = {
        pageNo: 1,
        searchInterval: this.monthCount
      }
      MedicationHistory(ObjectValue).then(res => {
        if (res.data.resultCode === '0000') {
          this.historyList = res.data.data.content
          res.data.data.content.forEach(item => {
            this.$set(item, 'takeMedicineHistoryDate', dateFormatFnt(item.takeMedicineHistoryDate))
          })
        }
      }).catch(error => {
        console.log(error)
      })
      console.log(this.todayMonth)
    },
    scrollTop () {
      this.$refs.fixScroll.scrollTop = 0
    }
  }
}

function dateFormatFnt (val) {
  const dateform = dayjs(val + 'T18:00:00+09:00')
  const formatDate = dateform.format('YYYY년 MM월 DD일')
  return formatDate
}
</script>
