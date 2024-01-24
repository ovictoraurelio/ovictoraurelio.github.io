<template lang="pug">
footer(padless)
  .divide-y.divide-gray-300.my-4
    .flex-grow
    .flex-grow
  div
    button.border-gray-500.text-gray.font-bold.p-2.rounded-full.mx-4(v-for='media in medias' :key='media.link' icon @click="$openUrl(media)")
      iconify(style="font-size: 24px" :icon="media.icon")
  //- .font-light.pt-4
    | Site currículo minimalista desenvolvido no tempo livre.
  div.mb-12
    | {{ new Date().getFullYear() }} &mdash; 
    strong Victor Aurélio
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
      ]
    }
  }
}
</script>
