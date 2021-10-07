import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { Icon } from '@iconify/vue2';

Vue.config.productionTip = false

Vue.component('iconify', Icon)
Vue.prototype.$isMobile = function() {
  return this.$vuetify.breakpoint.smAndDown
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
