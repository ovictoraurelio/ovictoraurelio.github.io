<template lang="pug">
  v-app
    v-app-bar#app-bar(app flat)
      .d-flex.align-center        
      v-spacer
    v-content
      Home
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app-bar {
  border-bottom-color: rgba(0,0,0,.12)!important;
  border-width: 0 0 thin;
  border-style: solid;
}
</style>