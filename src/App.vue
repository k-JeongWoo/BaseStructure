<template>
  <div id="app" class="wrap">
    <router-view name="header"></router-view>
    <div>
      <router-view name="leftnemu"></router-view>
    </div>
    <router-view name="default"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
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
