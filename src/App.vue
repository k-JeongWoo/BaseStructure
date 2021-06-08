<template>
  <div id="app" class="wrap">
    <router-view name="header"></router-view>
    <div class="innerWrap">
      <router-view name="leftnemu"></router-view>
    </div>
    <div class="container">
      <router-view name="default"></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.contents-style {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 80%;
}
</style>
