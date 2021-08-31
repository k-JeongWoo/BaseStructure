<template lang="html">
  <!-- footer -->
  <div class="footer">
    <ul>
      <li :class="classGbn === 'home' ? 'on' : ''">
        <button @click="pageUrl('home')">
          <i class="ico_home"></i>
          <span>홈</span>
        </button>
      </li>
      <li>
        <button @click="pageUrl('doctor')" :class="classGbn !== 'home' ? 'on' : ''">
          <i class="ico_doc"></i>
          <span>주치의</span>
        </button>
      </li>
    </ul>
  </div>
  <!-- //footer -->
</template>

<script>
import { myHospitalList } from '../../api/index'

export default {
  data () {
    return {
      myHospitalListLength: [],
      classGbn: this.$route.meta.titleTxt
    }
  },
  methods: {
    pageUrl (urlValue) {
      if (urlValue === 'home') {
        this.classGbn = urlValue
        this.$router.push('/mainHome').catch(() => {})
      } else {
        this.classGbn = urlValue
        myHospitalList().then(res => {
          if (res.data.resultCode !== 'error') {
            this.myHospitalListLength = res.data.data
            if (res.data.data.length > 0) {
              this.$router.push({name: 'DoctorMain', params: { hospitalId: this.myHospitalListLength[0].hospitalId }})
                .catch(error => {
                  console.log(error)
                })
            } else {
              this.$router.push('/hospital/hospitalRegist')
            }
          } else {
            alert('로그인 후 가능합니다.')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>
