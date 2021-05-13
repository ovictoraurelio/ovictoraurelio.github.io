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
        Courses
</template>

<script>
// @ is an alias to /src
import Infos from '@/components/Infos.vue'
import History from '@/components/History.vue'
import Courses from '@/components/Courses.vue'
export default {
  name: 'Home',
  components: {
    Infos,
    History,
    Courses
  }
}
</script>
