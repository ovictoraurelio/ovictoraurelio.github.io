<template lang="pug">
.container
  .grid.grid-cols-12.grid-rows-1(v-if="$isMobile()")
    .col-start-4.col-span-6.text-center.content-center.justify-center.justify-items-center
      ImageRounded.justify-self-center(v-if="$isMobile()")
  .flex.flex-wrap
    .w-50(v-if="!$isMobile()")
      ImageRounded
    .basis-full.flex-col.ml-2
      .flex.flex-wrap.gap-y-3.justify-between.items-start
        .flex-col
          span.block.text-xs.md_text-sm.uppercase.tracking-widest.text-primary-600.font-semibold.mb-2 {{ $t("infos.title") }}
          span.block.text-3xl.sm_text-4xl.md_text-5xl.font-light.tracking-tight.text-gray-900 Victor Aurélio
        .flex-shrink-0.flex.items-center
          Button.mr-4.px-5.h-8.font-medium.text-sm(
            v-if="!$isMobile()"
            variant="primary"
            @click="$router.push('/calendar')"
            ) {{ $t("scheduleMeeting") }}
          .flex.items-center.gap-1(class="bg-white/50 backdrop-filter backdrop-blur-md backdrop-saturate-150 border border-white/70 rounded-full p-1 shadow-soft")
            button(
              class="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
              :class="$i18n.locale === 'pt' ? 'opacity-100 shadow-soft bg-white/80' : 'opacity-40 hover_opacity-70'"
              type="button"
              aria-label="Português"
              @click="setLanguage('pt')"
            )
              iconify(icon="circle-flags:br" style="font-size: 20px;")
            button(
              class="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
              :class="$i18n.locale === 'en' ? 'opacity-100 shadow-soft bg-white/80' : 'opacity-40 hover_opacity-70'"
              type="button"
              aria-label="English"
              @click="setLanguage('en')"
            )
              iconify(icon="circle-flags:gb" style="font-size: 20px;")
      .flex.mt-4
        .flex-col
          span.text-base.text-gray-600 {{ $t("infos.subtitle") }}
      .flex.mt-1
        .flex-col
          span.text-sm.text-gray-400 {{ $t("infos.location") }}
  .flex.mt-8(v-if="!hideDescription")
    .flex-col
      .text-base.text-gray-700.leading-relaxed.text-justify(v-html='$t("infos.description")')
</template>

<script>
import ImageRounded from './ImageRounded.vue'
import Button from './ui/Button.vue'
export default {
  name: 'Home',
  components: {
    ImageRounded,
    Button
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
    setLanguage(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped></style>
