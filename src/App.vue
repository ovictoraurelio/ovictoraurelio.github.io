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
  created() {
    trackPageView(this.$route)
  }
}
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

RouterView {
  flex: 1;
}
</style>
