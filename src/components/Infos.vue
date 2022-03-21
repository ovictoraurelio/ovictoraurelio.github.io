<template lang="pug">
.container
  .flex
    .flex-col
      img.rounded-full(
        :style="imgStyle"
        src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/Pi7compressedIMG_6435-small-minified.webp?alt=media&token=582014d5-5a59-47ae-8e85-b2e037fb1e74'
        alt='Victor Aurélio'
      )
    .basis-full.flex-col.ml-2
      .flex
        .flex-col
          span.text-2xl.font-bold Victor Aurélio
        .flex-grow.text-right
          button(size="sm" class="my-2 my-sm-0 btn-info" type="submit" @click="alternateLanguage")
            iconify(icon="cil:language")
      .flex
        .flex-col
          span.text-xl.pt-0.pb-0.font-medium {{ $t("infos.title") }}
      .flex
        .flex-col
          span.text-sm.py-0 {{ $t("infos.subtitle") }}
      .flex
        .flex-col
          span.text-sm.pt-2 {{ $t("infos.location") }}
  .flex.mt-2
    .flex-col
      .text-base.text-justify {{ $t("infos.description") }}
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      imgStyle () {
        const length = this.$isMobile() ? 80 : 120
        return `width: ${length}px;height: ${length}px;`
      }
    },
    methods: {
      alternateLanguage () {
        const languages = ['pt', 'en']
        this.$i18n.locale = languages.filter(lang => lang !== this.$i18n.locale)[0]
      }
    }
  }
</script>

<style scoped>
  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover; /* or object-fit: contain; */
  }
</style>
