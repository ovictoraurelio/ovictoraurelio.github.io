<template lang="pug">
.app-container
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
}

RouterView {
  flex: 1;
}
</style>
