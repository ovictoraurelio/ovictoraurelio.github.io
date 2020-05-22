<template lang="pug">
  div(class="home")
    img(alt='Vue logo' src='../assets/logo.png')
    Infos(msg='Welcome to Your Vue.js App')
</template>

<script>
// @ is an alias to /src
import Infos from '@/components/Infos.vue'

export default {
  name: 'Home',
  components: {
    Infos
  }
}
</script>
