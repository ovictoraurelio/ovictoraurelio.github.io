import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import { reactive, watch } from 'vue'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import 'virtual:windi.css'
import './styles/main.css'

import { Icon } from '@iconify/vue'
import en from './locales/en'
import pt from './locales/pt'
import { isMobile } from './utils'
import routes from './router/routes'
import trackingPlugin from './plugins/tracking'

const DEFAULT_LOCALE = 'pt'
const SUPPORTED_LOCALES = new Set(['en', 'pt'])

const getBrowserLocale = () => {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LOCALE
  }

  try {
    const preferredLocale = localStorage.getItem('preferredLocale')
    if (SUPPORTED_LOCALES.has(preferredLocale)) return preferredLocale
  } catch (_error) {
    /* Storage can be unavailable. */
  }

  const availableLanguages = Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language]

  const browserLocale = availableLanguages.find(Boolean) || DEFAULT_LOCALE

  if (typeof browserLocale !== 'string') {
    return DEFAULT_LOCALE
  }

  return browserLocale.toLowerCase().includes('pt') ? 'pt' : 'en'
}

const normalizeLocale = (value) =>
  SUPPORTED_LOCALES.has(value) ? value : DEFAULT_LOCALE

const getI18nLocale = (i18n) => {
  const locale =
    typeof i18n.global.locale === 'string'
      ? i18n.global.locale
      : i18n.global.locale.value
  return normalizeLocale(locale)
}

const getLocaleMeta = (locale) => {
  const metadataByLocale = {
    pt: {
      htmlLang: 'pt-BR',
      ogLocale: 'pt_BR',
      description:
        'Victor Aurélio - COO e Co-fundador da Beyond Co. Experiência em soluções digitais, arquitetura de nuvem e desenvolvimento de software.',
      keywords:
        'Victor Aurélio, Beyond Co, COO, arquiteto de nuvem, desenvolvimento de software, soluções digitais',
      ogTitle: 'Victor Aurélio | COO e Co-fundador da Beyond Co',
      ogDescription:
        'Arquiteto de nuvem certificado pelo Google com experiência em projetar e implementar arquiteturas escaláveis, seguras e eficientes.',
      twitterTitle: 'Victor Aurélio | COO e Co-fundador da Beyond Co',
      twitterDescription:
        'Arquiteto de nuvem certificado pelo Google com experiência em projetar e implementar arquiteturas escaláveis, seguras e eficientes.'
    },
    en: {
      htmlLang: 'en',
      ogLocale: 'en_US',
      description:
        'Victor Aurélio - COO and Co-founder of Beyond Co. Experience in digital solutions, cloud architecture, and software development.',
      keywords:
        'Victor Aurélio, Beyond Co, COO, cloud architect, software development, digital solutions',
      ogTitle: 'Victor Aurélio | COO and Co-founder of Beyond Co',
      ogDescription:
        'Google Cloud Certified Architect with experience in designing and implementing scalable, secure, and efficient architectures.',
      twitterTitle: 'Victor Aurélio | COO and Co-founder of Beyond Co',
      twitterDescription:
        'Google Cloud Certified Architect with experience in designing and implementing scalable, secure, and efficient architectures.'
    }
  }

  return metadataByLocale[normalizeLocale(locale)]
}

const sanitizeUrl = (value) => {
  try {
    const parsedUrl =
      typeof window !== 'undefined'
        ? new URL(value, window.location.origin)
        : new URL(value)

    const allowedProtocols = new Set(['http:', 'https:'])
    if (!allowedProtocols.has(parsedUrl.protocol)) {
      return ''
    }

    return parsedUrl.toString()
  } catch (_error) {
    return ''
  }
}

const globalState = reactive({
  openSite: false
})

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return to.hash ? { el: to.hash, top: 110 } : { top: 0 }
    }
  },
  ({ app, head }) => {
    app.use(createHead())
    app.use(trackingPlugin)

    const i18n = createI18n({
      locale: getBrowserLocale(),
      fallbackLocale: DEFAULT_LOCALE,
      globalInjection: true,
      messages: {
        en,
        pt
      }
    })

    app.config.globalProperties.$openUrl = (value) => {
      if (typeof value !== 'string') {
        value = value?.link || value?.url
      }

      const normalizedUrl = sanitizeUrl(value)
      if (!normalizedUrl) {
        return
      }

      window.open(normalizedUrl, '_blank', 'noopener,noreferrer')
    }

    app.config.globalProperties.$isMobile = isMobile
    app.config.globalProperties.$globalState = globalState

    const updateMetaTags = (localeValue) => {
      const config = getLocaleMeta(localeValue)

      if (!config) {
        return
      }

      head.addHeadObjs({
        title: config.ogTitle,
        htmlAttrs: {
          lang: config.htmlLang
        },
        meta: [
          {
            name: 'description',
            content: config.description
          },
          {
            name: 'keywords',
            content: config.keywords
          },
          {
            property: 'og:title',
            content: config.ogTitle
          },
          {
            property: 'og:description',
            content: config.ogDescription
          },
          {
            property: 'og:locale',
            content: config.ogLocale
          },
          {
            name: 'twitter:title',
            content: config.twitterTitle
          },
          {
            name: 'twitter:description',
            content: config.twitterDescription
          }
        ]
      })
    }

    watch(
      () => getI18nLocale(i18n),
      (locale) => {
        updateMetaTags(locale)
      },
      {
        immediate: true
      }
    )

    app.use(i18n).component('iconify', Icon)
  }
)
