<template>
  <img id="bckimg" src="@/assets/hintergrund/Hintergrund.png" />
</template>

<style scoped>
  img {
    width: 100%;
    height: auto;

  }

  img.overlay {
    filter: brightness(50%) blur(5px);
    opacity: 90%;
    transition: all 1s;
  }

</style>
