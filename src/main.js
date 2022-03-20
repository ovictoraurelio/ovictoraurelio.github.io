import { ViteSSG } from '@vuetify/vite-ssg/single-page'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import { Icon } from '@iconify/vue';

export const createApp = ViteSSG(App, ({ app,  }) => {
  
  app
    .use(vuetify)
    .component('iconify', Icon)
  
  app.config.globalProperties.$isMobile = () => {
    return false
  }
  
})

