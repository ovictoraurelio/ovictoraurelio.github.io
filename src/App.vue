<template lang="pug">
  v-app
    v-app-bar(app color='primary' dark)
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
