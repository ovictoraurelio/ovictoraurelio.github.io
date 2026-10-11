<template>
  <div class="app-container">
    <a class="skip-link" href="#main-content">{{ $t('ui.skip') }}</a>
    <SiteHeader />
    <main id="main-content" tabindex="-1"><RouterView /></main>
    <Footer />
    <CookieConsent />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'
import { trackPageView } from './services/tracking'

export default {
  components: { SiteHeader, Footer, CookieConsent },
  mounted() {
    trackPageView(this.$route)
  }
}
</script>
