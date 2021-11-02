<template lang="html">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="text-center">
          <vue-spinner :color="color" :size="size" :borderWidth="borderWidth"></vue-spinner>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import VueSpinner from 'vue-spinner/src/ClipLoader'

export default {
  data () {
    return {
      color: '#6765e9',
      size: '45px',
      margin: '2px',
      radius: '2px',
      borderWidth: '7px'
    }
  },
  components: {
    VueSpinner
  }
}
</script>
