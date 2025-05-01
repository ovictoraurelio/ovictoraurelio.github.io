import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import { reactive } from 'vue'

import App from './App.vue'
import 'virtual:windi.css'

import { Icon } from '@iconify/vue'
import en from './locales/en'
import pt from './locales/pt'
import { isMobile } from './utils'
import routes from './router/routes'
import trackingPlugin from './plugins/tracking'

// Estado global para a aplicação
const globalState = reactive({
  openSite: false
})

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app }) => {
    // Adicionar plugin de rastreamento
    app.use(trackingPlugin)

    // Detectar idioma do navegador ou usar pt-BR como padrão
    const getBrowserLocale = () => {
      const navigatorLocale = navigator.languages !== undefined
        ? navigator.languages[0]
        : navigator.language

      if (!navigatorLocale) {
        return 'pt' // Padrão para português
      }

      // Se o idioma contém pt (pt-BR, pt-PT, etc), usar pt
      if (navigatorLocale.toLowerCase().includes('pt')) {
        return 'pt'
      }
      
      return 'en' // Fallback para inglês
    }

    const i18n = createI18n({
      locale: getBrowserLocale(),
      fallbackLocale: 'pt', // Fallback para português
      globalInjection: true,
      messages: {
        en,
        pt
      }
    })
    app.config.globalProperties.$openUrl = (url) => {
      let urlToBeOpened = url
      if (typeof url === 'object') {
        urlToBeOpened = url?.link ?? url?.url
      }
      if (!urlToBeOpened) {
        return
      }
      window.open(urlToBeOpened, '_blank')
    }

    app.config.globalProperties.$isMobile = isMobile
    app.config.globalProperties.$globalState = globalState
    app.use(i18n).component('iconify', Icon).config.globalProperties.$isMobile =
      isMobile
  }
)
