<template lang="pug">
.container
  .grid.grid-cols-12.grid-rows-1(v-if="$isMobile()")
    .col-start-4.col-span-6.text-center.content-center.justify-center.justify-items-center
      ImageRounded.justify-self-center(v-if="$isMobile()")
  .flex
    .w-50(v-if="!$isMobile()")
      ImageRounded
    .basis-full.flex-col.ml-2
      .flex
        .flex-col
          span.text-2xl.font-bold Victor Aurélio
        .flex-grow.text-right
          button.mr-4.px-2.h-8.bg-gray-700.font-medium.text-sm.text-white.rounded(@click="$router.push('/calendar')")
            | Agendar uma reunião
          button(size="sm" class="my-2 my-sm-0 btn-info" type="submit" @click="alternateLanguage")
            iconify(icon="cil:language")
      .flex
        .flex-col.text-left
          span.pt-0.pb-0.font-medium {{ $t("infos.title") }}
      .flex
        .flex-col
          span.text-sm.py-0 {{ $t("infos.subtitle") }}
      .flex
        .flex-col
          span.text-sm.pt-2 {{ $t("infos.location") }}
  .flex.mt-2(v-if="!hideDescription")
    .flex-col
      .text-base.text-justify(v-html='$t("infos.description")')
</template>

<script>
import ImageRounded from './ImageRounded.vue'
export default {
  name: 'Home',
  components: {
    ImageRounded
  },
  props: {
    hideDescription: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // imgStyle() {
    //   const length = this.$isMobile() ? 80 : 120
    //   return `width: ${length}px;height: ${length}px;`
    // }
  },
  methods: {
    alternateLanguage() {
      const languages = ['pt', 'en']
      this.$i18n.locale = languages.filter(
        (lang) => lang !== this.$i18n.locale
      )[0]
    }
  }
}
</script>

<style scoped></style>
