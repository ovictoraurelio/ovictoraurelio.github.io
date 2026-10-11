import { trackPageView } from '../services/tracking'

export default {
  install: (app) => {
    // Adicionar método global de rastreamento
    app.config.globalProperties.$trackPageView = trackPageView
  }
}
