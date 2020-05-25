<template lang="pug">
  v-app
    //-v-app-bar#app-bar(app flat)
      .d-flex.align-center        
      v-spacer
    v-content
      router-view
    v-footer(padless)
      v-container.ma-0.pa-0(fluid)
        v-card.ma-0.pa-0.blue-grey.darken-4.white--text.text-center(flat tile)
          v-card-text
            v-btn.mx-4.white--text(v-for='media in medias' :key='media.link' icon @click="openUrl(media)")
              v-icon(size='24px') {{ media.icon }}              
          v-card-text.white--text.pt-0
            | Site currículo minimalista desenvolvido no tempo livre.
          v-divider
          v-card-text.white--text
            | {{ new Date().getFullYear() }} &mdash; 
            strong Victor Aurélio

</template>

<script>
// import Home from './views/Home';

export default {
  name: 'App',

  components: {
    // Home,
  },
  methods: {
    openUrl (media) {
      window.open(media.link, "_blank")
    }
  },
  data: () => ({
    medias: [
        { icon: 'mdi-github', link: 'https://github.com/ovictoraurelio'} ,
        { icon: 'mdi-twitter', link: 'https://twitter.com/ovictoraurelio'} ,
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/ovictoraurelio/'} ,
        { icon: 'mdi-facebook', link: 'https://facebook.com/ovictoraurelio'} ,
        { icon: 'mdi-instagram', link: 'https://instagram.com/ovictoraurelio'} ,
      ],
  }),
};
</script>

<style scoped>
#app-bar {
  border-bottom-color: rgba(0,0,0,.12)!important;
  border-width: 0 0 thin;
  border-style: solid;
}
</style>