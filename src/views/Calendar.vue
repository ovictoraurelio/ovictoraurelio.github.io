<template lang="pug">
.container.mx-auto.px-4.height-minus-footer
  // Mobile View
  template(v-if="$isMobile()")
    .flex.flex-col.h-screen.overflow-hidden
      .py-2
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="selectedLink ? resetSelection() : $router.push('/')")
          | {{ selectedLink ? 'Voltar' : 'Voltar ao site' }}
      
      // Content Area
      .flex-grow.overflow-hidden
        // Before Link Selection
        template(v-if="!selectedLink")
          .h-full.flex.flex-col.justify-evenly.py-2
            .flex-1.flex.items-center.justify-center.px-4.py-2(v-for="(link, index) in roamLinks" :key="index")
              button(class="w-full h-full py-8 bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 border border-white/70 text-gray-900 font-bold text-2xl rounded-2xl shadow-glass transition-all transform hover:scale-105" @click="selectLink(link)")
                | {{ link.name }}
        
        // After Link Selection
        template(v-else)
          .h-full.overflow-auto
            div(:id="selectedLink.id" style="width: 100%; height: 100%")
  
  // Desktop View
  template(v-else)
    .grid.grid-cols-12.gap-6
      .col-span-12
        Button.h-10.w-full.font-medium.text-sm(variant="neutral" @click="$router.push('/')")
          | Voltar ao site

      .col-span-12.md_col-span-6(v-for="(link, index) in roamLinks" :key="index")
        div(class="bg-white/60 backdrop-filter backdrop-blur-xl backdrop-saturate-150 border border-white/70 shadow-glass rounded-2xl p-4")
          h2.text-xl.font-semibold.mb-4 {{ link.name }}
          div(:id="link.id" style="min-width: 320px; width: 100%;")
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Calendar',
  components: {
    Button
  },
  data() {
    return {
      roamScriptLoaded: false,
      selectedLink: null,
      roamLinks: [
        {
          id: 'roam-30min',
          url: 'https://ro.am/ovictoraurelio/',
          name: '30 minutos'
        },
        {
          id: 'roam-1hora',
          url: 'https://ro.am/ovictoraurelio/1-hora',
          name: '1 hora'
        }
      ]
    }
  },
  mounted() {
    this.loadRoamScript()
  },
  methods: {
    selectLink(link) {
      this.selectedLink = link
      this.$nextTick(() => {
        this.initRoamEmbed({
          elementId: link.id,
          url: link.url
        })
      })
    },
    resetSelection() {
      this.selectedLink = null
    },
    loadRoamScript() {
      const script = document.createElement('script')
      script.src = 'https://ro.am/lobbylinks/embed.js'
      script.async = true
      script.onload = this.initRoamEmbeds
      script.onerror = this.handleScriptLoadError
      document.head.appendChild(script)
    },
    initRoamEmbeds() {
      this.roamLinks.forEach(link => {
        this.initRoamEmbed({
          elementId: link.id,
          url: link.url
        })
      })
    },
    initRoamEmbed({ elementId, url }) {
      const parentElement = document.getElementById(elementId)
      if (parentElement && window.Roam) {
        this.roamScriptLoaded = true
        window.Roam.initLobbyEmbed({
          url,
          parentElement,
          lobbyConfiguration: 'booking_only',
          accentColor: '#0066e0',
          theme: 'light',
          onSizeChange: (width, height) => {
            parentElement.style.height = `${height}px`
          }
        })
      }
    },
    handleScriptLoadError() {
      console.error('Failed to load Roam embed script')
    }
  }
}
</script>
