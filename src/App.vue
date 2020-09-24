<template>
  <div id="app">
    <backimg />
    <btnhandler />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
