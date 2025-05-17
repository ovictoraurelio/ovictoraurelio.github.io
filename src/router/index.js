import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import { trackPageView } from '../services/tracking'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Comportamento de rolagem padrão
    return savedPosition || { top: 0 }
  }
})

// Adicionar rastreamento de navegação
router.beforeEach(async (to, from, next) => {
  try {
    console.info('Navegando para:', to.path)
    // await trackPageView(to)
    next()
  } catch (error) {
    console.error('Erro no rastreamento:', error)
    next()
  }
})

export default router
