<template>
  <div id="app" class="wrap">
    <div id="container" class="container" :class="$route.meta.conClass">
      <router-view name="header" v-on:eventdata="transData" v-bind:propsdata="receiveData"></router-view>
      <router-view name="leftMenu" v-on:eventdata="transData" v-bind:propsdata="receiveData"></router-view>
      <router-view name="default" v-on:eventdata="transData" v-bind:propsdata="receiveData"></router-view>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transData: function (value) {
      this.receiveData = value
    }
  },
  data () {
    return {
      receiveData: []
    }
  }
}
</script>

<style>
@import './assets/resources/css/common.css';
@import './assets/resources/css/contents.css';
@import './assets/resources/css/index.css';
@import './assets/resources/css/popup.css';
@import './assets/resources/css/reset.css';
@import './assets/resources/css/swiper-bundle.min.css';
</style>
