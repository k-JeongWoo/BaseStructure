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
        <button @click="movePageFnt">
          <i class="ico_doc"></i>
          <span>주치의</span>
        </button>
      </li>
    </ul>
  </div>
  <!-- //footer -->
</template>

<script>
import { hospitalListCnt } from '../../api/index'

export default {
  methods: {
    movePageFnt: function () {
      hospitalListCnt().then(res => {
        alert('준비중입니다.')
        // if (res.data.data === 0) {
        //   this.$router.push('/doctorMain')
        // } else {
        //   this.$router.push('/hospital/hospitalRegist')
        // }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
