<template lang="pug">
.cookie-consent-container(v-if="showConsent")
  .cookie-consent-banner.fixed.bottom-0.left-0.right-0.bg-gray-800.text-white.p-4.shadow-lg.z-50
    .container.mx-auto.px-4
      .flex.flex-col.md_flex-row.items-center.justify-between
        .flex-grow.mb-4.md_mb-0.pr-4
          p.text-sm {{ $t('cookies.message') }}
        .flex.flex-wrap.gap-2
          button.px-4.py-2.bg-blue-500.text-white.rounded.hover_bg-blue-600.transition-colors.text-sm(@click="acceptCookies") {{ $t('cookies.accept') }}
          button.px-4.py-2.bg-gray-700.text-white.rounded.hover_bg-gray-600.transition-colors.text-sm(@click="$router.push('/privacy')") {{ $t('cookies.learnMore') }}
</template>

<script>
export default {
  data() {
    return {
      showConsent: false
    }
  },
  mounted() {
    // Check if user has already accepted cookies
    this.showConsent = !this.hasAcceptedCookies()
  },
  methods: {
    acceptCookies() {
      // Set cookie with expiration of 1 year
      const expiryDate = new Date()
      expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      
      document.cookie = `cookiesAccepted=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
      this.showConsent = false
    },
    hasAcceptedCookies() {
      // Check if the cookie exists
      return document.cookie.split(';').some(cookie => {
        return cookie.trim().startsWith('cookiesAccepted=')
      })
    }
  }
}
</script>

<style scoped>
.cookie-consent-banner {
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
