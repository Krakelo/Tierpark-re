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
  methods: {
    click: function () {
      alert('hi')
    }
  }
}
</script>

<style>
button {
  position: absolute;
}
</style>
