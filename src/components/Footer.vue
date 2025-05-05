<template lang="pug">
div(v-if="footerShouldBeVisible")
  footer.bg-gray-800.text-white.pt-10.pb-6.mt-12
    .grid.grid-cols-1.md_grid-cols-12.gap-6.mb-8
      // Column 1: About
      .footer-column.col-start-2.col-span-3.md_col-start-4.md_col-span-3
        h3.text-xl.font-bold.mb-4 {{ $t('footer.about.title') }}
        p.text-gray-300.mb-4 {{ $t('footer.about.description') }}
        .flex.items-center.space-x-4
          button.text-white.hover_text-gray-300.transition-colors(
            :key='media.link'
            v-for='media in medias'
            @click="$openUrl(media.link)"
          )
            iconify(style="font-size: 24px" :icon="media.icon")
      
      // Column 2: Quick Links
      .footer-column.col-start-2.col-span-3.md_col-span-1
        h3.text-xl.font-bold.mb-4 {{ $t('footer.links.title') }}
        ul.space-y-2
          li(v-for="link in links" :key="link.url")
            a.text-gray-300.hover_text-white.transition-colors.cursor-pointer(@click="$router.push(link.url)") {{ link.text }}
      
      // Column 3: Contact
      .footer-column.col-start-2.col-span-3.md_col-span-2
        h3.text-xl.font-bold.mb-4 {{ $t('footer.contact.title') }}
        .flex.items-center.mb-3
          iconify.mr-2(icon="mdi:email-outline" style="font-size: 20px")
          a.text-gray-300.hover_text-white.transition-colors(href="mailto:contact@victoraurelio.com") contact@victoraurelio.com
        .flex.items-center.mb-3
          iconify.mr-2(icon="mdi:map-marker-outline" style="font-size: 20px")
          span.text-gray-300 {{ $t('infos.location') }}
    
    // Divider
    .grid.grid-cols-1.md_grid-cols-12.gap-6.mb-8
      .footer-column.col-start-2.col-span-3.md_col-start-4.md_col-span-6
        .border-t.border-gray-700.pt-6
          .flex.flex-col.md_flex-row.justify-between.items-center
            p.text-gray-400.text-sm.mb-4.md_mb-0
              | © {{ new Date().getFullYear() }} 
              strong Victor Aurélio
              |  — {{ $t('footer.rights') }}
            p.text-gray-400.text-sm
              a.text-gray-300.hover_text-white.mr-4.cursor-pointer(@click="$router.push('/terms')") {{ $t('footer.terms') }}
              a.text-gray-300.hover_text-white.cursor-pointer(@click="$router.push('/privacy')") {{ $t('footer.privacy') }}
</template>

<script>
export default {
  data() {
    return {
      medias: [
        { icon: 'mdi-github', link: 'https://github.com/ovictoraurelio' },
        { icon: 'mdi-twitter', link: 'https://twitter.com/ovictoraurelio' },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/ovictoraurelio/'
        },
        { icon: 'mdi-facebook', link: 'https://facebook.com/ovictoraurelio' },
        { icon: 'mdi-instagram', link: 'https://instagram.com/ovictoraurelio' }
      ],
      links: [
        { text: this.$t('footer.links.home'), url: '/' },
        { text: this.$t('footer.links.calendar'), url: '/calendar' },
        { text: this.$t('footer.links.contact'), url: '/contact' }
      ]
    }
  },
  computed: {
    footerShouldBeVisible() {
      if (!this.$isMobile()) {
        return true
      }

      if (this.$route.path !== '/') {
        return true
      }

      return false
    }
  }
}
</script>

<style scoped>
.footer-column {
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .footer-column {
    margin-bottom: 0;
  }
}
</style>
