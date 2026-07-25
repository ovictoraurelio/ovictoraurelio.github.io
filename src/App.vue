<template lang="pug">
.app-container.font-sans
  RouterView
  Footer
  CookieConsent
</template>

<script>
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import { trackPageView } from './services/tracking'

export default {
  components: {
    Footer,
    CookieConsent
  },
  mounted() {
    // Rastrear visualização inicial da página
    if (this.$route) {
      trackPageView(this.$route).catch((error) => {
        console.error('Erro no rastreamento inicial:', error)
      })
    }
  }
}
</script>

<style>
.height-minus-footer {
  min-height: calc(100vh - 288px);
  /* calc(100vh - 10rem)*/
}
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /*
   * Subtle "mesh gradient" backdrop for the liquid-glass redesign. Flat gray
   * gives translucent/backdrop-blur panels nothing to refract, so this
   * blends very light system-blue tones (primary-50/primary-100) with white
   * across a few soft radial pools instead of one flat color. Kept light
   * enough that text contrast on top of it (and on top of glass panels) is
   * unaffected. `background-attachment: fixed` keeps the gradient stable
   * while the page scrolls, like a fixed light source behind the glass.
   */
  background-color: #f9fafb;
  background-image:
    radial-gradient(at 12% 8%, rgba(10, 132, 255, 0.16) 0px, transparent 45%),
    radial-gradient(at 88% 18%, rgba(133, 196, 255, 0.20) 0px, transparent 42%),
    radial-gradient(at 20% 42%, rgba(217, 236, 255, 0.55) 0px, transparent 48%),
    radial-gradient(at 82% 55%, rgba(10, 132, 255, 0.12) 0px, transparent 45%),
    radial-gradient(at 15% 78%, rgba(133, 196, 255, 0.18) 0px, transparent 42%),
    radial-gradient(at 85% 92%, rgba(10, 132, 255, 0.14) 0px, transparent 45%);
}

RouterView {
  flex: 1;
}
</style>
