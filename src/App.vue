<template>
  <div id="app">
    <backimg />
    <btnhandler />
  </div>
</template>

<script>
import backimg from '@/components/Image.vue'

export default {
  name: 'App',
  components: {
    backimg
  },
  data () {
    return {
      aylaAbfucken: false
    }
  },
  created () {
    setTimeout(() => {
      this.aylaAbfucken = true
    }, 5000)
  }
}
</script>
