import { trackPageView } from '../services/tracking'

export default {
  install: (app) => {
    // Adicionar método global de rastreamento
    app.config.globalProperties.$trackPageView = trackPageView

    // Adicionar hook de rastreamento
    app.provide('trackPageView', trackPageView)

    // Rastrear navegação inicial
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname).catch((error) => {
        console.error('Erro no rastreamento inicial:', error)
      })
    }
  }
}
