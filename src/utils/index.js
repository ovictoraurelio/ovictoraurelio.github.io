export function isMobile() {
  if (typeof window === 'undefined') {
    return false
  }
  
  return /Android|webOS|iPhone/i.test(navigator.userAgent)
}
