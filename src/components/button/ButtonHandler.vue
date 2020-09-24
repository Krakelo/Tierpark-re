<template>
  <div>
    <infobutton
      v-for="(c, idx) in coordinates"
      :key="idx"
      :x="c.x"
      :y="c.y"
    />
  </div>
</template>

<script>
import infobutton from './InfoButton'

export default {
  name: 'btnhandler',
  components: {
    infobutton
  },
  data () {
    return {
      coordinates: [
        { x: 74.5, y: 13.5 },
        { x: 44, y: 55 },
        { x: 543, y: 456 }
      ]
    }
  }
}
</script>
