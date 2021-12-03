<template lang="pug">
  v-container
    v-row(justify="start" align="center")
      v-col(cols="auto")
        .display-2.font-weight-thin in my life
    v-row
      v-col(cols='auto')
        v-timeline(align-top dense)
          v-timeline-item(
            v-for="(history, index) of histories"
            :key="index"
            color="grey"
            small
            fill-dot
          )
            //- :small="!item.moduleItem"
            //- :color="item.color"
            //- :icon="item.icon"
            v-row.pt-1(no-gutters)
              v-col(xs=12 sm=3)
                .caption {{ history.date }}
              v-col
                strong {{ history.locate.name }}
                .text-caption
                  | {{ history.office }}
        //-v-row(align="start" justify="start")
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