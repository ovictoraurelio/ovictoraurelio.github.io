<template lang="pug">
.app-container
  RouterView
  Footer
  CookieConsent
</template>

<script>
import Footer from './components/Footer.vue'
import CookieConsent from './components/CookieConsent.vue'

export default {
  components: {
    Footer,
    CookieConsent
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
