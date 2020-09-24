<template>
  <div>
    <b-button :style="{left: x + 'vw', top: y + 'vw'}">
      <b-icon-info font-scale="1.4" />
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'infobutton',
  props: {
    button: {
      type: Object,
      required: true
    }
  },
  methods: {
    click: function () {
      alert('hi')
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
}
</style>
