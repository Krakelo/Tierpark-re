<template>
  <div id="app">
    <backimg />
    <infobutton :x="x" :y="456" />

  </div>
</template>

<script>
import backimg from '@/components/Image.vue'
import infobutton from '@/components/InfoButton.vue'

export default {
  name: 'App',
  components: {
    backimg,
    infobutton
  },
  data () {
    return {
      x: 123
    }
  }
}
</script>
