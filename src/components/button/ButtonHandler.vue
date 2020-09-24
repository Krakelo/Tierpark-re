<template>
  <div>
    <infobutton
      v-for="(c, idx) in buttons"
      :key="idx"
      :button="c"
    />
  </div>
</template>

<script>
import infobutton from './InfoButton'
import buttons from '@/assets/json/buttons.json'

export default {
  name: 'btnhandler',
  components: {
    infobutton
  },
  data () {
    return {
      buttons
    }
  }
}
</script>
