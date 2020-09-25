<template>
  <div>
    <b-button :id="'btn' + button.id" :class="{'clckbtn': clickedButton }" @click="clickButton" :style="{left: x + 'vw', top: y + 'vw', opacity: visibility + '%' }">
      <b-icon-info font-scale="1.4" />
    </b-button>
    <carousel v-if="clickedButton" :button="button" />
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
  data () {
    return {
      clickedButton: false
    }
  },
  methods: {
    clickButton: function () {
      this.clickedButton = !this.clickedButton
      if (this.clickedButton || !document.getElementById('bckimg').classList.contains('overlay')) {
        document.getElementById('bckimg').classList.add('overlay')
      }

      /* waiting for tags to update their classes */
      setTimeout(() => {
        if (document.getElementsByClassName('clckbtn').length === 0) {
          document.getElementById('bckimg').classList.remove('overlay')
        }
      }, 100)

      if (typeof this.button.fullscreen !== 'undefined' && this.button.fullscreen === true) {
        const element = document.getElementById('vajo')
        this.enterFullscreen(element)
        document.getElementById('btnvajo').remove()
      }
    },
    enterFullscreen: function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      }
    }
  },
  computed: {
    x: function () {
      return this.button.coordinates.x || 0
    },
    y: function () {
      return this.button.coordinates.y || 0
    },
    visibility: function () {
      return this.button.visibility
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
}
</style>
