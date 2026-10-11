import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import { reactive, ref, watch } from 'vue'

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
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
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
        'Victor Aurélio - Chief of AI no Extreme Group e cofundador da Beyond Co. Experiência em inteligência artificial, arquitetura de nuvem e desenvolvimento de software.',
      keywords:
        'Victor Aurélio, Beyond Co, Extreme Group, Chief of AI, inteligência artificial, arquiteto de nuvem, desenvolvimento de software, soluções digitais',
      ogTitle: 'Victor Aurélio | Chief of AI no Extreme Group',
      ogDescription:
        'Victor Aurélio - Chief of AI no Extreme Group e cofundador da Beyond Co. Experiência em inteligência artificial, arquitetura de nuvem e desenvolvimento de software.',
      twitterTitle: 'Victor Aurélio | Chief of AI no Extreme Group',
      twitterDescription:
        'Victor Aurélio - Chief of AI no Extreme Group e cofundador da Beyond Co. Experiência em inteligência artificial, arquitetura de nuvem e desenvolvimento de software.'
    },
    en: {
      htmlLang: 'en',
      ogLocale: 'en_US',
      description:
        'Victor Aurélio - Chief of AI at Extreme Group and co-founder of Beyond Co. Experience in artificial intelligence, cloud architecture and software development.',
      keywords:
        'Victor Aurélio, Beyond Co, Extreme Group, Chief of AI, artificial intelligence, cloud architect, software development, digital solutions',
      ogTitle: 'Victor Aurélio | Chief of AI at Extreme Group',
      ogDescription:
        'Victor Aurélio - Chief of AI at Extreme Group and co-founder of Beyond Co. Experience in artificial intelligence, cloud architecture and software development.',
      twitterTitle: 'Victor Aurélio | Chief of AI at Extreme Group',
      twitterDescription:
        'Victor Aurélio - Chief of AI at Extreme Group and co-founder of Beyond Co. Experience in artificial intelligence, cloud architecture and software development.'
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

    const localizedHead = ref({})
    head.addHeadObjs(localizedHead)

    const updateMetaTags = (localeValue) => {
      const config = getLocaleMeta(localeValue)

      if (!config) {
        return
      }

      localizedHead.value = {
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
      }
      if (typeof document !== 'undefined') head.updateDOM(document)
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
