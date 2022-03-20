<template lang="pug">
.container
  .flex
    .flex-col
      .text-2xl.font-bold In my life
  .grid.grid-cols-12(v-for="(history, index) of histories" :key="index")
    .col-span-1
      h1(style="font-size: 40px") ·
    .col-span-3.md_col-span-2
      .text-sm {{ history.date }}
    .col-span-8.md_col-span-9(style="text-align: start")
      .font-weight-bold {{ history.locate.name }}
      .text-sm {{ history.office }}
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