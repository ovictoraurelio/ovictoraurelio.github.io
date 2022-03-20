<template lang="pug">
.grid.grid-cols-12.gap-10
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Infos
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    History
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Skills
  .col-start-2.col-span-10.md_col-start-4.md_col-span-6
    Footer
</template>

<script>
import Infos from '@/components/Infos.vue'
import History from '@/components/History.vue'
import Skills from '@/components/Skills.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Infos,
    History,
    Skills,
    Footer
  }
}
</script>
