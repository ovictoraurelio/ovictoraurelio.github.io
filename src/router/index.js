import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { trackPageView } from '../services/tracking'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Comportamento de rolagem padrão
    return savedPosition || { top: 0 }
  }
})

const getTrackPath = (route) => route?.fullPath || route?.path || ''

// Adicionar rastreamento de navegação
router.beforeEach((to, from, next) => {
  try {
    if (to && from && getTrackPath(to) !== getTrackPath(from)) {
      trackPageView(to).catch((error) => {
        console.error('Erro no rastreamento:', error)
      })
    }

    next()
  } catch (error) {
    console.error('Erro no rastreamento:', error)
    next()
  }
})

export default router
