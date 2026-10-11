<template>
  <header class="site-header" @keydown.esc="menuOpen = false">
    <div class="site-shell header-inner">
      <RouterLink class="brand" to="/" @click="menuOpen = false">
        <span class="brand-mark" aria-hidden="true">va<span>.</span></span>
        <span class="brand-name">Victor Aurélio</span>
      </RouterLink>
      <nav
        id="site-navigation"
        class="main-nav"
        :class="{ 'is-open': menuOpen }"
        :aria-label="$t('ui.nav.label')">
        <RouterLink
          v-for="link in links"
          :key="link.id"
          :to="'/#' + link.id"
          @click="menuOpen = false"
          >{{ $t(link.label) }}</RouterLink
        >
        <RouterLink
          class="mobile-contact"
          to="/contact"
          @click="menuOpen = false"
          >{{ $t('ui.nav.contact') }}</RouterLink
        >
      </nav>
      <div class="header-actions">
        <div
          class="language-selector"
          role="group"
          :aria-label="$t('language')">
          <button
            type="button"
            aria-label="Português"
            :aria-pressed="$i18n.locale === 'pt'"
            :class="{ 'is-active': $i18n.locale === 'pt' }"
            @click="setLanguage('pt')">
            <span aria-hidden="true">🇧🇷</span>PT
          </button>
          <button
            type="button"
            aria-label="English"
            :aria-pressed="$i18n.locale === 'en'"
            :class="{ 'is-active': $i18n.locale === 'en' }"
            @click="setLanguage('en')">
            <span aria-hidden="true">🇬🇧</span>EN
          </button>
        </div>
        <RouterLink class="button button-small header-contact" to="/contact"
          >{{ $t('ui.nav.contact') }}<AppIcon name="external"
        /></RouterLink>
        <button
          class="menu-toggle"
          type="button"
          :aria-label="$t(menuOpen ? 'ui.nav.close' : 'ui.nav.open')"
          :aria-expanded="menuOpen"
          aria-controls="site-navigation"
          @click="menuOpen = !menuOpen">
          <AppIcon :name="menuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: { AppIcon },
  data: () => ({
    menuOpen: false,
    links: [
      { id: 'about', label: 'ui.nav.about' },
      { id: 'work', label: 'ui.nav.work' },
      { id: 'history', label: 'ui.nav.history' },
      { id: 'projects', label: 'ui.nav.projects' }
    ]
  }),
  watch: {
    '$route.fullPath'() {
      this.menuOpen = false
    }
  },
  methods: {
    setLanguage(locale) {
      this.$i18n.locale = locale
      try {
        localStorage.setItem('preferredLocale', this.$i18n.locale)
      } catch (_error) {
        /* Storage can be unavailable. */
      }
    }
  }
}
</script>
