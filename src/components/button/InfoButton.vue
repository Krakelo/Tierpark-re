<template>
  <div>
    <b-button @click="click" :style="{left: x + 'vw', top: y + 'vw'}">
      <b-icon-info font-scale="1.4" />
    </b-button>
    <contentvue v-if="clicked"/>

  </div>
</template>

<script>
import contentvue from '../Content'
export default {
  name: 'infobutton',
  components: { contentvue },
  props: {
    id: {
      type: String,
      required: false
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
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
  }
}
</script>

<style>
button {
  position: absolute;
}
</style>
