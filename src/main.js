import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { Icon } from '@iconify/vue';

loadFonts()

const app = createApp(App)
  .use(vuetify)

app.config.globalProperties.$isMobile = () => {
  return false
}

app
  .component('iconify', Icon)
  .mount('#app')
