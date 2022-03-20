<template lang="pug">
v-container(fluid fill-height)
  v-row(justify='center')
    v-col(md=8 sm=10 xs=12)
      Infos
  v-row(justify='center')
    v-col(md=8 sm=10 xs=12)
      History
  v-row(justify='center')
    v-col(md=8 sm=10 xs=12)
      Skills
  v-row(justify="center")
    v-col(md=8 sm=10 xs=12)
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
