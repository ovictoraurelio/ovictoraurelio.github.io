<template>
  <footer class="site-footer">
    <div class="site-shell">
      <div class="footer-top">
        <div>
          <RouterLink class="brand" to="/"
            ><span class="brand-mark" aria-hidden="true">va<span>.</span></span
            ><span class="brand-name">Victor Aurélio</span></RouterLink
          >
          <p class="footer-description">{{ $t('ui.footer.note') }}</p>
        </div>
        <nav class="footer-links" :aria-label="$t('ui.footer.social')">
          <a
            v-for="media in medias"
            :key="media.name"
            :href="media.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ media.name }}</a
          ><a href="mailto:contact@victoraurelio.com">Email</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Victor Aurélio</p>
        <div>
          <RouterLink to="/contact">{{ $t('footer.links.contact') }}</RouterLink
          ><RouterLink to="/terms">{{ $t('footer.terms') }}</RouterLink
          ><RouterLink to="/privacy">{{ $t('footer.privacy') }}</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    medias: [
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/ovictoraurelio/' },
      { name: 'GitHub', link: 'https://github.com/ovictoraurelio' },
      { name: 'Instagram', link: 'https://instagram.com/ovictoraurelio' }
    ]
  })
}
</script>
