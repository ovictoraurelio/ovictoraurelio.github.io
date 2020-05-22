<template lang="pug">
  v-container
    v-row
      v-col(v-for="(history, index) of histories" :key="index" md=4)
        v-card.mx-auto(max-width='344' outlined='')
          v-list-item(three-line='')
            v-list-item-content
              .overline.mb-4 {{history.date}}
              v-list-item-title.headline.mb-1 {{history.locate.name}}
              v-list-item-subtitle {{history.office}}                      
</template>

<script>
import data from "@/services";

export default {
  data: () => ({
    histories: data.history
  }),
  created () {
    console.log({ history })
    // this.histories = .history
  }
};
</script>

<style>
.v-card {
  min-height: 8em
}
</style>