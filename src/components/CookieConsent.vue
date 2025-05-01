<template lang="pug">
.cookie-consent-container(v-if="showConsent")
  .cookie-consent-overlay.fixed.inset-0.bg-black.bg-opacity-50.z-40
  .cookie-consent-banner.fixed.bottom-0.left-0.right-0.bg-gray-800.text-white.p-6.shadow-lg.z-50.border-t-4.border-blue-500
    .container.mx-auto.px-4
      .flex.flex-col.items-center.justify-between
        .flex-grow.mb-6.text-center
          h3.text-xl.font-bold.mb-3 {{ $t('cookies.title') }}
          p.text-base.mb-4 {{ $t('cookies.message') }}
        .flex.flex-wrap.gap-3.justify-center.w-full
          button.px-6.py-3.bg-blue-500.text-white.rounded-lg.hover_bg-blue-600.transition-colors.text-base.font-medium.shadow-md(@click="acceptCookies") {{ $t('cookies.accept') }}
          button.px-6.py-3.bg-gray-700.text-white.rounded-lg.hover_bg-gray-600.transition-colors.text-base.font-medium.shadow-md(@click="$router.push('/privacy')") {{ $t('cookies.learnMore') }}
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
