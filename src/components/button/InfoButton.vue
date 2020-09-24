<template>
  <div>
    <b-button @click="click" :style="{left: x + 'vw', top: y + 'vw'}">
      <b-icon-info font-scale="1.4" />
    </b-button>
    <contentvue v-if="clicked" :button="button" @removeoverlay="click" />
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
      if (!document.getElementById('bckimg').classList.contains('overlay')) {
        document.getElementById('bckimg').classList.add('overlay')
      } else {
        document.getElementById('bckimg').classList.remove('overlay')
      }
    }
  },
  computed: {
    x: function () {
      return this.button.coordinates.x || 0
    },
    y: function () {
      return this.button.coordinates.y || 0
    }
  }
}
</script>

<style>
button {
  position: absolute;
  z-index: 2;
  border-radius: 10px;
  border-color: #039be5;
  background: lightgray;
  opacity: 100%;
}
</style>
