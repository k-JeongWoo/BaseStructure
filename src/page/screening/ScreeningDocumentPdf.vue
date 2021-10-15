<template>
  <div class="" style="width: 100%">
    <vue-pdf-app style="height: 100vh;" :pdf="pdf" :config="config"></vue-pdf-app>
  </div>
</template>

<script>
import axios from 'axios'
import VuePdfApp from 'vue-pdf-app/dist/vue-pdf-app.umd.min'

export default {
  data () {
    return {
      config: {
        toolbar: {
          toolbarViewerLeft: { findbar: false }
        }
      },
      pdf: null
    }
  },
  components: {
    VuePdfApp
  },
  async beforeCreate () {
    let checkupMasterId = encodeURIComponent(this.$route.query.checkupMasterId)
    let params = {
      checkupDoc: checkupMasterId
    }
    try {
      await axios.get(`/api/data/V1.0/api/checkupDetail/checkupDocument/`, { params: params })
        .then(response => {
          this.pdf = base64ToArrayBuffer(response.data.data.checkupPdf)
        }).catch(function (error) { console.log(error) })
    } catch (error) {
      console.log(error)
    }
  }
}

function base64ToArrayBuffer (base64) {
  var binaryString = window.atob(base64)
  var len = binaryString.length
  var bytes = new Uint8Array(len)
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }
  return bytes.buffer
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
