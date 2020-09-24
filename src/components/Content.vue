<template>
  <div class="overlay-content" :style="{left: x + 'vw', top: y + 4 + 'vw'}">
    <carousel :button="button" />
  </div>
</template>

<script>
import carousel from './Carousel'

export default {
  name: 'ContentVue',
  components: {
    carousel
  },
  props: {
    button: {
      type: Object,
      required: true
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
.overlay-content {
  position: absolute;
}
</style>
