<template lang="pug">
  //-v-container(fluid fill-height)
  div
    //-img(alt='Vue logo' src='../assets/logo.png')
    Infos
    History
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
