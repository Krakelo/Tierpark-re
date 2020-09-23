<template>
  <div id="app">
    <backimg />
    <infobuttonY/>
  </div>
</template>

<script>
import backimg from '@/components/Image.vue'
import Infobutton from "./components/InfoButton";

export default {
  name: 'App',
  components: {
    Infobutton,
    backimg
  }
}
</script>
