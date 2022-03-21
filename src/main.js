import {
  ViteSSG
} from 'vite-ssg/single-page'
import {
  createI18n
} from 'vue-i18n'
import App from './App.vue'
import 'virtual:windi.css'

import {
  Icon
} from '@iconify/vue'
import en from './locales/en.json'


export const createApp = ViteSSG(App, ({
  app,
}) => {
  const i18n = createI18n({
    locale: 'en',
    globalInjection: true,
    messages: {
      en
    }
  })
  app
    .use(i18n)
    .component('iconify', Icon)
    .config.globalProperties.$isMobile = () => {
      return false
    }
})