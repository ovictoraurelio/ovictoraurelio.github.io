import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { trackPageView } from '../services/tracking'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// Configurar guard de navegação para rastrear visualizações de página
router.beforeEach((to) => {
  console.info('Rastreando visualização de página:', to.path)
  // Enviar notificação de visualização de página apenas quando a navegação estiver concluída
  trackPageView(to).catch((error) => {
    console.error('Erro ao enviar notificação de visualização:', error)
  })
})

export default router
