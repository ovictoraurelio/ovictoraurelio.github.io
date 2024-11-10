import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import 'virtual:windi.css'

import { Icon } from '@iconify/vue'
import en from './locales/en'
import pt from './locales/pt'
import { isMobile } from './utils'
import routes from './router/routes'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app }) => {
    
    const i18n = createI18n({
      locale: 'en',
      globalInjection: true,
      messages: {
        en,
        pt
      }
    })
    app.config.globalProperties.$openUrl = (url) => {
      window.open(url, '_blank')
    }

    app.config.globalProperties.$isMobile = isMobile
    app.use(i18n).component('iconify', Icon).config.globalProperties.$isMobile =
      isMobile
  }
)
