export function isMobile () {
  return /Android|webOS|iPhone/i.test(
    navigator.userAgent
  )
}