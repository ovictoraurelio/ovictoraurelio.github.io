<template lang="pug">
.container
  .flex.mb-8
    .flex-col
      .text-3xl.font-bold.text-gray-800.relative.inline-block.pb-2.after_content.after_absolute.after_bottom-0.after_left-0.after_h-1.after_bg-blue-500 {{$t("life.sectionTitle")}}
  
  .relative.timeline-container.pl-0.pb-8(class="before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-200")
    .timeline-item.relative.mb-8(v-for="(history, index) of histories" :key="index" :class="{'opacity-0 translate-x-8': !isVisible(index)}" ref="timelineItems")
      // Content card
      .timeline-content.bg-white.rounded-lg.shadow-md.p-4.transform.transition-all.duration-300(class="hover:shadow-lg hover:-translate-y-1")
        .flex.flex-col.md_flex-row.justify-between.items-start.md_items-center.mb-2
          .font-bold.text-lg.text-gray-800.cursor-pointer.hover_text-gray-600.transition-colors(@click="openLink(history)") {{ history.locate.name }}
          .text-xs.font-medium.text-gray-600.py-1.px-2.rounded.mt-2.md_mt-0 {{ history.date }}
        
        .text-gray-600.text-sm.mt-1 {{ history.office }}
</template>

<script>
import data from '@/services'

export default {
  data() {
    return {
      histories: data.history,
      visibleItems: new Set()
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    openLink(history) {
      if (history?.locate?.link) {
        this.$openUrl(history.locate.link)
      }
    },
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.$refs.timelineItems.findIndex(
              (el) => el === entry.target
            )
            if (index !== -1) {
              this.visibleItems.add(index)
            }
          }
        })
      }, options)

      this.$nextTick(() => {
        if (this.$refs.timelineItems) {
          this.$refs.timelineItems.forEach((item) => {
            observer.observe(item)
          })
        }
      })
    },
    isVisible(index) {
      return this.visibleItems.has(index)
    }
  }
}
</script>

<style scoped>
.timeline-item {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-item {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
