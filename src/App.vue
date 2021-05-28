<template>
  <div id="app" class="wrap">
    <header>
    </header>
    <router-view name="header"></router-view>
    <div class="innerWrap">
      <router-view name="leftnemu"></router-view>
      <router-view name="default"></router-view>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
