<template>
  <button>
    <img src="../assets/hintergrund/info.jpg"/>
  </button>
</template>

<script>
export default {
  name: 'infobutton',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  button{
    color: red;
    background-position-x: 100px;
    background-position-y: 100px;
  }
</style>
