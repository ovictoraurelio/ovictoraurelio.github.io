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
  try {
    const deviceInfo = getDeviceInfo()

    const data = {
      currentPage: route?.path || 'Desconhecida',
      referrer: document.referrer || 'Acesso direto',
      device: `${deviceInfo.device} - ${deviceInfo.browser}`,
      screen: deviceInfo.screen,
      timestamp: new Date().toISOString()
      // O IP será coletado pelo servidor n8n
    }

    // Enviar dados para o webhook do n8n
    await fetch('https://n8n.victoraurelio.com/webhook/webhooks/site-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Não esperamos pela resposta para não atrasar a experiência do usuário
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
