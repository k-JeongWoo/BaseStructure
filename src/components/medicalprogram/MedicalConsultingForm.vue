<template>
  <div class="fromContents">
    <h3>나의 관심 진료 프로그램</h3>
    <a class="btn_left">
      <img src="" alt="이미지 없음">
    </a>
    <p style="margin-top: 20px"> > </p>
    <p class="">각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.
      각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.
      각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다. 각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.
      각 항목에 관한 일반적인 가이드라인이 들어가는 자리입니다.
      페이지 이동 해야겠다
    </p>
    <div>
      <p>
        진료가능병원
      </p>
      <div v-for="(item,index) in hospitalList" :key="index">
        <label>
        <input class="radioChk"
          type="radio"
          v-model="radioValue"
          :name="index"
          :value="index">이름 {{ item }}
        </label>
      </div>
    </div>
    <input type="button"
           :disabled="radioValue.length < 1"
           value="button"
           @click="nextPage">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      hospitalList: ['1', '2', '3'],
      radioValue: ''
    }
  },
  created () {
    var dataList = this
    axios.get('')
      .then(function (response) {
        console.log('a')
        dataList.hospitalList = response.data.data
      })
      .catch(function (response) {
        console.log(response)
      })
  },
  methods: {
    nextPage: function () {
      alert('abc')
    }
  }
}
</script>

<style scoped>
.fromContents {
  padding-top: 10px;
  padding-bottom: 10px;
}
.radioChk {
  appearance: auto;
}
</style>
