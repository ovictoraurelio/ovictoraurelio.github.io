/**
 * Serviço para rastreamento de navegação e envio de notificações
 */

// Função para obter informações do dispositivo do usuário
export function getDeviceInfo() {
  const userAgent = navigator.userAgent
  let deviceType = 'Desconhecido'

  if (/Mobile|Android|iPhone|iPad|iPod/i.test(userAgent)) {
    deviceType = 'Mobile'
  } else if (/Tablet|iPad/i.test(userAgent)) {
    deviceType = 'Tablet'
  } else {
    deviceType = 'Desktop'
  }

  const browserInfo = detectBrowser()

  return {
    device: deviceType,
    browser: browserInfo,
    userAgent: userAgent,
    screen: `${window.screen.width}x${window.screen.height}`
  }
}

// Função para detectar o navegador
export function detectBrowser() {
  const userAgent = navigator.userAgent

  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  } else if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome'
  } else if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'Edge'
  } else if (
    userAgent.indexOf('MSIE') > -1 ||
    userAgent.indexOf('Trident') > -1
  ) {
    return 'Internet Explorer'
  } else {
    return 'Desconhecido'
  }
}

// Função para enviar notificação de acesso ao site
export async function trackPageView(route) {
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return false

  try {
    // Extrair caminho da rota com fallback
    const currentPath = route?.path || 
      route?.fullPath || 
      route?.name || 
      window.location.pathname || 
      'Desconhecida'

    const deviceInfo = getDeviceInfo()

    const data = {
      currentPage: currentPath,
      referrer: document.referrer || window.location.href || 'Acesso direto',
      device: `${deviceInfo.device} - ${deviceInfo.browser}`,
      screen: deviceInfo.screen,
      timestamp: new Date().toISOString(),
      routeDetails: route ? JSON.stringify({
        name: route.name || 'Não nomeada',
        params: route.params || {},
        query: route.query || {}
      }) : 'Sem detalhes'
    }

    // Enviar dados para o webhook do n8n
    const response = await fetch('https://n8n.victoraurelio.com/webhook/webhooks/site-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Verificar se a requisição foi bem-sucedida
    if (!response.ok) {
      console.warn('Falha ao enviar dados de rastreamento', response.status)
    }

    return true
  } catch (error) {
    console.error('Erro ao rastrear visualização de página:', error)
    return false
  }
}

export default {
  trackPageView,
  getDeviceInfo,
  detectBrowser
}
