<template lang="pug">
.container
  .flex.mb-10.md_mb-12
    .flex-col
      .text-3xl.md_text-4xl.font-light.tracking-tight.text-gray-900 {{$t("projects.sectionTitle")}}

  .relative.timeline-container.pl-0.pb-8
    .timeline-item.relative.mb-8(v-for="index in validProjects" :key="index" :class="{'opacity-0 translate-x-8': !isVisible(index)}" ref="projectItems")
      // Content card
      .timeline-content(class="bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-glass border border-white/70 p-6 md_p-8 transform transition-all duration-300 hover_-translate-y-1")
        .flex.flex-col.md_flex-row.justify-between.items-start.md_items-center.mb-2
          .font-bold.text-lg.text-gray-800.cursor-pointer.hover_text-gray-600.transition-colors(@click="$openUrl($t(`projects.items[${index}].url`))") {{ $t(`projects.items[${index}].title`) }}
          .text-xs.font-medium.text-gray-600.py-1.px-2.rounded.mt-2.md_mt-0 {{ $t(`projects.items[${index}].date`) || '' }}
        
        .text-gray-600.text-sm.mt-1 {{ $t(`projects.items[${index}].subtitle`) }}
        
        .flex.mt-2.space-x-2
          // button.btn(v-show="$t(`projects.items[${index}].url`)" @click="$openUrl($t(`projects.items[${index}].url`))") {{ $t(`actions.open`) }}
          button.btn-toggle(@click="toggleDescription(index)")
            span(v-if="!expandedItems.has(index)") {{ $t('projects.showMore') }}
            span(v-else) {{ $t('projects.showLess') }}
        
        .project-description.mt-4.overflow-hidden.transition-all.duration-300(v-show="expandedItems.has(index)" :class="{'max-h-0': !expandedItems.has(index), 'max-h-screen': expandedItems.has(index)}")
          .text-sm.text-gray-700(v-html="$t(`projects.items[${index}].content`)")
</template>

<script>
export default {
  data() {
    return {
      len: 11,
      expandedItems: new Set(),
      visibleItems: new Set()
    }
  },
  computed: {
    projects() {
      return this.$t('projects.items', { returnObjects: true })
    },
    validProjects() {
      // Filter out empty projects (like the first one at index 0)
      const result = []
      for (let i = 1; i <= this.len; i++) {
        const title = this.$t(`projects.items[${i}].title`, null)
        if (title && title !== `projects.items[${i}].title`) {
          result.push(i)
        }
      }
      return result
    }
  },
  mounted() {
    this.setupIntersectionObserver()
    // Safety net: content must never stay permanently invisible if the
    // IntersectionObserver never fires (throttled background tab, older
    // browser, etc.) - the fade-in is a progressive enhancement, not a
    // requirement to see the content.
    this.revealTimeout = setTimeout(() => {
      this.validProjects.forEach((index) => this.visibleItems.add(index))
    }, 1500)
  },
  beforeUnmount() {
    clearTimeout(this.revealTimeout)
  },
  methods: {
    toggleDescription(index) {
      if (this.expandedItems.has(index)) {
        this.expandedItems.delete(index)
      } else {
        this.expandedItems.add(index)
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
            const index = this.$refs.projectItems.findIndex(
              (el) => el === entry.target
            )
            if (index !== -1) {
              this.visibleItems.add(this.validProjects[index])
            }
          }
        })
      }, options)

      this.$nextTick(() => {
        if (this.$refs.projectItems) {
          this.$refs.projectItems.forEach((item) => {
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
/*
 * Colors below are the hex values of the "primary" (system blue) token
 * defined in windi.config.js. This is plain scoped CSS, not a Windi utility
 * class, so we can't reference the token by name here - we mirror its
 * values instead (primary-700 / primary-200 / primary-600 / primary-50 / primary-100).
 */
.btn {
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  color: #0052b3;
  font-weight: 600;
  border-radius: 9999px;
  border: 1px solid #b8dcff;
  transition: all 0.2s;
}

.btn:hover {
  color: white;
  background-color: #0052b3;
  border-color: transparent;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 102, 224, 0.4);
}

.btn-toggle {
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  color: #0052b3;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid #b8dcff;
  background-color: #eef6ff;
  transition: all 0.2s;
}

.btn-toggle:hover {
  background-color: #d9ecff;
}

.timeline-item {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .timeline-item {
    opacity: 1 !important;
    transform: none !important;
  }
}

.project-description {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
</style>
