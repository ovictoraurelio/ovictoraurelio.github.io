<template lang="pug">
  v-container.mt-12(fluid fill-height)
    v-card(outlined)      
      v-container
        v-row          
          v-col.display-2.font-weight-thin professional history and experiences
        v-row(align="start" justify="start")
          v-col(v-for="(history, index) of histories" :key="index" cols="auto")
            v-card.mx-auto(max-width='344' outlined)
              v-list-item(three-line)
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