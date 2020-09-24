<template>
  <div>
    <b-button @click="click" :style="{left: x + 'vw', top: y + 'vw'}">
      <b-icon-info font-scale="1.4" />
    </b-button>
    <contentvue v-if="clicked" :x="x" :y="y" />
  </div>
</template>

<script>
import contentvue from '../Content'
export default {
  name: 'infobutton',
  components: { contentvue },
  props: {
    button: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    click: function () {
      this.clicked = !this.clicked
      console.log(this.clicked)
    }
  },
  computed: {
    x: function () {
      return this.button.coordinates.x || 0
    },
    y: function () {
      return this.button.coordinates.y || 0
    },
    text: function () {
      return this.button.text || ''
    },
    img: function () {
      return this.object.img || []
    }
  }
}
</script>

<style>
button {
  position: absolute;
  z-index: 9000;
}
</style>
