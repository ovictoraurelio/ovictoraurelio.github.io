<template>
  <aside
    v-if="showConsent"
    class="cookie-consent-banner"
    aria-labelledby="cookies-title">
    <button
      class="cookie-close"
      type="button"
      :aria-label="$t('ui.cookies.dismiss')"
      @click="dismissNotice">
      <AppIcon name="close" />
    </button>
    <h2 id="cookies-title">{{ $t('cookies.title') }}</h2>
    <p>{{ $t('ui.cookies.note') }}</p>
    <div class="cookie-actions">
      <button class="button button-small" type="button" @click="acceptCookies">
        {{ $t('cookies.accept') }}<AppIcon name="check" /></button
      ><RouterLink class="text-link" to="/privacy">{{
        $t('cookies.learnMore')
      }}</RouterLink>
    </div>
  </aside>
</template>

<script>
import AppIcon from './AppIcon.vue'
const COOKIE_NAME = 'cookiesAccepted'
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export default {
  components: { AppIcon },
  data: () => ({ showConsent: false }),
  mounted() {
    let dismissed = false
    try {
      dismissed = sessionStorage.getItem('cookieNoticeDismissed') === 'true'
    } catch (_error) {
      /* Storage can be unavailable. */
    }
    this.showConsent = !this.hasAcceptedCookies() && !dismissed
  },
  methods: {
    getCookie(name) {
      const prefix = name + '='
      return document.cookie
        .split(';')
        .map((item) => item.trim())
        .find((item) => item.startsWith(prefix))
        ?.slice(prefix.length)
    },
    dismissNotice() {
      this.showConsent = false
      try {
        sessionStorage.setItem('cookieNoticeDismissed', 'true')
      } catch (_error) {
        /* Storage can be unavailable. */
      }
    },
    acceptCookies() {
      const expiryDate = new Date()
      expiryDate.setFullYear(expiryDate.getFullYear() + 1)
      const attributes = [
        COOKIE_NAME + '=true',
        'expires=' + expiryDate.toUTCString(),
        'max-age=' + COOKIE_MAX_AGE_SECONDS,
        'path=/',
        'SameSite=Lax'
      ]
      if (window.location.protocol === 'https:') attributes.push('Secure')
      document.cookie = attributes.join('; ')
      this.showConsent = false
    },
    hasAcceptedCookies() {
      return this.getCookie(COOKIE_NAME)?.toLowerCase() === 'true'
    }
  }
}
</script>
