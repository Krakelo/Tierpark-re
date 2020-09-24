<template>
  <img id="bckimg" :src="require('@/assets/hintergrund/Hintergrund.png')" />
</template>

<style scoped>
  img {
    width: 100%;
    height: auto;
    transition: all .5s;
  }

  img.overlay {
    filter: brightness(50%) blur(5px);
    opacity: 90%;
    transition: all .5s;
  }

</style>
