<template lang="html">
  <!-- footer -->
  <div class="footer">
    <ul>
      <li class="on">
        <a href="#">
          <i class="ico_home"></i>
          <span>홈</span>
        </a>
      </li>
      <li>
        <button @click="movePagefnt">
          <i class="ico_doc"></i>
          <span>주치의</span>
        </button>
      </li>
    </ul>
  </div>
  <!-- //footer -->
</template>

<script>
export default {
  data () {
    return {
      listaa: 'a'
    }
  },
  methods: {
    movePagefnt: function () {
      if (this.listaa === 'a') {
        this.$router.push('/hospital/hospitalRegist')
      } else {
        console.log('b')
      }
    }
  }
}
</script>
