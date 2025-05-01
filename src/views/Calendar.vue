<template lang="pug">
.container.mx-auto.px-4
  // Mobile View
  template(v-if="$isMobile()")
    .flex.flex-col.h-screen.overflow-hidden
      .py-2
        button.h-10.w-full.bg-white.text-black.font-medium.text-sm.border.border-gray-300.rounded-lg.shadow-sm(class="hover:bg-gray-100" @click="selectedLink ? resetSelection() : $router.push('/')")
          | {{ selectedLink ? 'Voltar' : 'Voltar ao site' }}
      
      // Content Area
      .flex-grow.overflow-hidden
        // Before Link Selection
        template(v-if="!selectedLink")
          .h-full.flex.flex-col.justify-evenly.py-2
            .flex-1.flex.items-center.justify-center.px-4.py-2(v-for="(link, index) in roamLinks" :key="index")
              button.w-full.h-full.py-8.bg-white.text-black.font-bold.text-2xl.rounded-xl.shadow-lg.transition-all.transform(class="hover:scale-105 hover:shadow-xl" @click="selectLink(link)")
                | {{ link.name }}
        
        // After Link Selection
        template(v-else)
          .h-full.overflow-auto
            div(:id="selectedLink.id" style="width: 100%; height: 100%")
  
  // Desktop View
  template(v-else)
    .grid.grid-cols-12.gap-6
      .col-span-12
        button.h-10.w-full.bg-gray-800.font-medium.text-sm.text-white(class="hover:bg-gray-900" @click="$router.push('/')")
          | Voltar ao site
      
      .col-span-6(v-for="(link, index) in roamLinks" :key="index")
        .bg-white.shadow-md.rounded-lg.p-4
          h2.text-xl.font-semibold.mb-4 {{ link.name }}
          div(:id="link.id" style="min-width: 320px; width: 100%;")
</template>

<script>
export default {
  name: 'Calendar',
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
          accentColor: '#0059DC',
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
