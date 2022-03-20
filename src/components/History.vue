<template lang="pug">
.container
  .flex(justify="start" align="center")
    .flex-col(cols="auto")
      .h3.font-weight-thin In my life
  .grid.grid-cols-12(justify="start" align="center" v-for="(history, index) of histories" :key="index")
    .col-span-1
      h1(style="font-size: 40px") ·
    .col-span-3.md_col-span-2
      .text-caption {{ history.date }}
    .col-span-8.md_col-span-9(style="text-align: start")
      .font-weight-bold {{ history.locate.name }}
      .text-caption {{ history.office }}
</template>

<script>
import data from "@/services";

export default {
  data: () => ({
    histories: data.history
  })
};
</script>

<style>
..card {
  min-height: 8em
}
</style>