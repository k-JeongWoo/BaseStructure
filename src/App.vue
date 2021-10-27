<template>
  <div id="app" class="wrap">
    <router-view name="pdf"></router-view>
    <div id="container" class="container" :class="$route.meta.conClass" v-if="$route.name !== 'ScreeningDocumentPdf'">
      <router-view name="header" v-on:eventdata="transData" v-bind:propsdata="receiveData" :key="$route.fullPath + 'h'"></router-view>
      <router-view name="leftMenu" v-on:eventdata="transData" v-bind:propsdata="receiveData" :key="$route.fullPath + 'l'"></router-view>
      <router-view name="default" v-on:eventdata="transData" v-bind:propsdata="receiveData" :key="$route.fullPath"></router-view>
      <router-view name="footer" v-on:eventdata="transData" v-bind:propsdata="receiveData" :key="$route.fullPath + 'f'"></router-view>
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
      receiveData: Object
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
