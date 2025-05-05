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
    // Função para atualizar meta tags baseadas no idioma
    const updateMetaTags = (locale) => {
      const metaConfig = {
        'pt': {
          description: 'Victor Aurélio - COO e Co-fundador da Beyond Co. Experiência em soluções digitais, arquitetura de nuvem e desenvolvimento de software.',
          keywords: 'Victor Aurélio, Beyond Co, COO, arquiteto de nuvem, desenvolvimento de software, soluções digitais',
          ogTitle: 'Victor Aurélio | COO e Co-fundador da Beyond Co',
          ogDescription: 'Arquiteto de nuvem certificado pelo Google com experiência em projetar e implementar arquiteturas escaláveis, seguras e eficientes.',
          twitterTitle: 'Victor Aurélio | COO e Co-fundador da Beyond Co',
          twitterDescription: 'Arquiteto de nuvem certificado pelo Google com experiência em projetar e implementar arquiteturas escaláveis, seguras e eficientes.'
        },
        'en': {
          description: 'Victor Aurélio - COO and Co-founder of Beyond Co. Experience in digital solutions, cloud architecture, and software development.',
          keywords: 'Victor Aurélio, Beyond Co, COO, cloud architect, software development, digital solutions',
          ogTitle: 'Victor Aurélio | COO and Co-founder of Beyond Co',
          ogDescription: 'Google Cloud Certified Architect with experience in designing and implementing scalable, secure, and efficient architectures.',
          twitterTitle: 'Victor Aurélio | COO and Co-founder of Beyond Co',
          twitterDescription: 'Google Cloud Certified Architect with experience in designing and implementing scalable, secure, and efficient architectures.'
        }
      };

      const config = metaConfig[locale] || metaConfig['pt'];

      document.querySelector('meta[name="description"]').setAttribute('content', config.description);
      document.querySelector('meta[name="keywords"]').setAttribute('content', config.keywords);
      document.querySelector('meta[property="og:title"]').setAttribute('content', config.ogTitle);
      document.querySelector('meta[property="og:description"]').setAttribute('content', config.ogDescription);
      document.querySelector('meta[property="twitter:title"]').setAttribute('content', config.twitterTitle);
      document.querySelector('meta[property="twitter:description"]').setAttribute('content', config.twitterDescription);
    };

    // Atualizar meta tags quando o idioma mudar
    i18n.global.onLanguageChanged = updateMetaTags;

    // Atualizar meta tags inicialmente
    updateMetaTags(i18n.global.locale);

    app.use(i18n).component('iconify', Icon).config.globalProperties.$isMobile =
      isMobile
  }
)
