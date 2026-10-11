export function isMobile() {
  if (typeof window === 'undefined') {
    return false
  }

  const ua = navigator.userAgent || ''
  const hasTouch =
    typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 1
  const isSmallScreen = window.innerWidth > 0 && window.innerWidth <= 768
  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
  const isTabletUA = /iPad|Tablet|Nexus 7|Nexus 10|KFAPWI|SM-T|Tab/i.test(ua)

  if (isMobileUA) {
    return true
  }

  if (isTabletUA) {
    return hasTouch && isSmallScreen
  }

  return hasTouch && isSmallScreen
}
