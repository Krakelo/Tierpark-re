<template>
  <div class="crsel" :style="{left: x + 'vw', top: y + 2 + 'vw'}">
    <h1>{{ a.text }}</h1>
    <img
      :class="['crselimg', {'clckimg': clickedImage}]"
      :src="require('@/assets/hintergrund/' + a.img)"
      @click="clickImage"
    />

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
      carouselIndex: 0,
      x: 0,
      y: 0,
      clickedImage: false
    }
  },
  computed: {
    a: function () {
      return this.button.content[this.carouselIndex]
    }
  },
  methods: {
    nextElement: function () {
      this.carouselIndex = (this.carouselIndex + 1) % this.button.content.length
      this.clickedImage = false
    },
    lastElement: function () {
      this.carouselIndex = (this.button.content.length - this.carouselIndex - 1) % this.button.content.length
      this.clickedImage = false
    },
    clickImage: function () {
      this.clickedImage = !this.clickedImage
    }
  },
  mounted () {
    this.x = this.button.coordinates.x
    this.y = this.button.coordinates.y
  }
}
</script>

<style>
.crsel {
  position: absolute;
  margin: auto;
}

img.crselimg {
  transition: all .3s ease-out;
  z-index: 2;
}

img.clckimg {
  width: 70vw;
  margin-left: 15vw;
  transition: all .3s ease-in;
}

button.last, button.next {
  position: inherit;
  bottom: auto;
  z-index: 3;
}
</style>
