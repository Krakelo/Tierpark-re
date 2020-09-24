<template>
  <div class="overlay-content" :style="{left: x + 'vw', top: y + 18 + 'vw'}">
    <b-carousel
      :interval="5000"
      indicators
      fade
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <template v-for="(b, idx) in button.content">
        <b-carousel-slide
          :key="idx"
        >
          <h1>{{ b.text }}</h1>
          <img :src="require('@/assets/hintergrund/' + b.img)" style="width: auto;" />
        </b-carousel-slide>
      </template>
    </b-carousel>
  </div>
</template>

<script>

export default {
  name: 'ContentVue',
  data () {
    return {
      slide: 0,
      sliding: null
    }
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

  .carousel-inner {
    overflow:visible;
  }
</style>
