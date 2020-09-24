<template>
  <div>
    <h1>{{ a.text }}</h1>
    <img class="crselimg" :src="require('@/assets/hintergrund/Vasilij.png' /*+ a.img */)" />

    <!-- check if multiple items -->
    <template v-if="button.content.length > 1">
      <b-button @click="lastElement"><b-icon-arrow-left-circle /></b-button>
      <b-button @click="nextElement"><b-icon-arrow-right-circle /></b-button>
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
  transform: scale(0.1);
  transition: all 10s ease-out;
}

.crselimg:hover {
  transform: scale(1.8);
  transition: all .3s ease-in;
  text-align: center;
}
</style>
