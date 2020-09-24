import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import btnhandler from '@/components/button/ButtonHandler.vue'
import carousel from '@/components/button/Carousel.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('btnhandler', btnhandler)
Vue.component('carousel', carousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
