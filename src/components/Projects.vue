<template lang="pug">
.container
  .flex
    .flex-col
      .text-2xl.font-bold.mb-8 {{$t("projects.sectionTitle")}}
  .grid.grid-cols-12(v-for="index in len" :key="index")
    .col-span-8.md_col-span-9.text-left.mt-6
      .text-sm.text-left.my-2(style="font-size: 22px") {{ $t(`projects.items[${index}].title`) }}
      .flex.space-x-2
        .flex-col.self-center
          button.btn(v-show="$t(`projects.items[${index}].url`)" @click="openUrl($t(`projects.items[${index}].url`))") {{ $t(`actions.open`) }}
        .flex-col
          .mt-2.font-weight-medium {{ $t(`projects.items[${index}].subtitle`) }}
      .my-2.text-sm(v-html="$t(`projects.items[${index}].content`)")
</template>

<script>
export default {
  data() {
    return {
      len: 9
    }
  },
  computed: {
    projects() {
      return this.$t('projects.items', { returnObjects: true })
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style>
.btn {
  @apply px-4 py-1 text-sm text-purple-600 font-semibold
    rounded-full border border-purple-200 dark:border-purple-800
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
}
</style>
