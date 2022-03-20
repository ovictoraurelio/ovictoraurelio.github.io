import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import 'virtual:windi.css'

import { Icon } from '@iconify/vue';

export const createApp = ViteSSG(App, ({ app,  }) => {  
  app
    .component('iconify', Icon)
    .config.globalProperties.$isMobile = () => {
      return false
    }
})

