<template lang="pug">
.container
  .flex.mb-4
    .flex-col
      .text-2xl.font-bold {{$t("life.sectionTitle")}}
  .grid.grid-cols-12(v-for="(history, index) of histories" :key="index")
    .col-span-1
      h1(style="font-size: 40px") ·
    .col-span-3.md_col-span-2
      .text-sm.text-left {{ history.date }}
    .col-span-8.md_col-span-9.text-left
      .font-weight-bold(style="cursor: pointer" @click="openLink(history)") {{ history.locate.name }}
      .text-sm {{ history.office }}
</template>

<script>
import data from '@/services'

export default {
  data () {
      return {
      histories: data.history
    }
  },
  methods: {
    openLink (history) {
      if (history?.locate?.link) {
        this.$openUrl(history.locate.link)
      }
    }
  }
}
</script>
