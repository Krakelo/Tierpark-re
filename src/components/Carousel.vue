<template>
  <div>
    <h1>{{ a.text }}</h1>
    <img class="crselimg" :src="require('@/assets/hintergrund/' + a.img)" />

    <!-- check if multiple items -->
    <template v-if="button.content.length > 1">
      <b-button class="last" @click="lastElement"><b-icon-arrow-left-circle /></b-button>
      <b-button class="next" @click="nextElement"><b-icon-arrow-right-circle /></b-button>
    </template>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: {
    button: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      carouselIndex: 0
    }
  },
  computed: {
    a: function () {
      return this.button.content[this.carouselIndex]
    },
    x: function () {
      return this.button.coordinates.x || 0
    },
    y: function () {
      return this.button.coordinates.y || 0
    }
  },
  methods: {
    nextElement: function () {
      this.carouselIndex = (this.carouselIndex + 1) % this.button.content.length
    },
    lastElement: function () {
      this.carouselIndex = (this.button.content.length - this.carouselIndex - 1) % this.button.content.length
    }
  }
}
</script>

<style>
.crsel {
  position: absolute;
}

.crselimg {
  transition: all 1s;
  z-index: 2;
}

.crselimg:hover {
  transform: scale(1.8);
  transition: all 1s;
  text-align: center;
}
.last{

  position: inherit;
  bottom: auto;
  z-index: 3;
}
.next{
  position: inherit;
  bottom: auto;
  z-index: 3;
}
</style>
