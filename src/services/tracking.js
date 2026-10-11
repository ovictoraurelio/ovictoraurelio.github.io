/**
 * Serviço para rastreamento de navegação e envio de notificações
 */

const TRACKING_WEBHOOK =
  import.meta.env.VITE_TRACKING_WEBHOOK ||
  'https://victoraurelio-736449130143.us-central1.run.app/webhooks/site-access'

const REQUEST_TIMEOUT_MS = 5000
const isBrowser = typeof window !== 'undefined' && typeof navigator !== 'undefined'

const isLocalTrackingRequest = () => {
  if (!isBrowser) {
    return true
  }

  const hostname = window.location.hostname
  return (
    hostname.includes('localhost') ||
    hostname === '127.0.0.1' ||
    hostname === '::1' ||
    hostname.endsWith('.local')
  )
}

const normalizePath = (value) => {
  if (typeof value !== 'string') {
    return 'Desconhecida'
  }

  return value.startsWith('/') ? value : `/${value}`
}

const sanitizeText = (value) => {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().replace(/\s+/g, ' ')
}

const sanitizeRoute = (route) => {
  if (!route) {
    return {
      name: 'Desconhecida',
      params: {},
      query: {}
    }
  }

  return {
    name: route.name || 'Não nomeada',
    params: route.params || {},
    query: route.query || {}
  }
}

const buildRequest = (route) => {
  const normalizedPath = normalizePath(route?.fullPath || route?.path || sanitizeText(window?.location?.pathname))
  const deviceInfo = getDeviceInfo()
  const routeDetails = sanitizeRoute(route)

  return {
    currentPage: normalizedPath,
    referrer: sanitizeText(document?.referrer) || sanitizeText(window?.location?.href) || 'Acesso direto',
    device: `${deviceInfo.device} - ${deviceInfo.browser}`,
    screen: deviceInfo.screen,
    timestamp: new Date().toISOString(),
    routeDetails: JSON.stringify(routeDetails)
  }
}

const postJson = async (url, body) => {
  if (!isBrowser) {
    return false
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => {
    controller.abort()
  }, REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      console.warn('Falha ao enviar dados de rastreamento', response.status)
      return false
    }

    return true
  } catch (error) {
    if (error?.name !== 'AbortError') {
      console.error('Erro no envio de rastreamento:', error)
    }

    return false
  } finally {
    clearTimeout(timeout)
  }
}

// Função para obter informações do dispositivo do usuário
export function getDeviceInfo() {
  if (!isBrowser) {
    return {
      device: 'Desconhecido',
      browser: 'Desconhecido',
      userAgent: '',
      screen: 'Desconhecido'
    }
  }

  const userAgent = navigator.userAgent

  let deviceType = 'Desktop'
  if (/Mobi|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    deviceType = 'Mobile'
  } else if (/iPad|Tablet|Nexus 7|Nexus 10|KFAPWI|SM-T/i.test(userAgent)) {
    deviceType = 'Tablet'
  }

  const browserInfo = detectBrowser(userAgent)

  return {
    device: deviceType,
    browser: browserInfo,
    userAgent: userAgent,
    screen: window?.screen
      ? `${window.screen.width}x${window.screen.height}`
      : 'Desconhecido'
  }
}

// Função para detectar o navegador
export function detectBrowser(userAgent = '') {
  if (!isBrowser) {
    return 'Desconhecido'
  }

  const source = sanitizeText(userAgent)

  if (/Edg\//i.test(source) || /Edge/i.test(source)) {
    return 'Edge'
  }

  if (/OPR\//i.test(source) || /Opera/i.test(source)) {
    return 'Opera'
  }

  if (/CriOS/i.test(source)) {
    return 'Chrome iOS'
  }

  if (/Firefox/i.test(source)) {
    return 'Firefox'
  }

  if (/Chrome/i.test(source)) {
    return 'Chrome'
  }

  if (/Safari/i.test(source)) {
    return 'Safari'
  }

  if (/MSIE|Trident/i.test(source)) {
    return 'Internet Explorer'
  }

  return 'Desconhecido'
}

export async function trackPageView(route) {
  if (!isBrowser || isLocalTrackingRequest()) {
    return false
  }

  const data = buildRequest(route)
  return postJson(TRACKING_WEBHOOK, data)
}

export default {
  trackPageView,
  getDeviceInfo,
  detectBrowser,
  buildRequest
}
