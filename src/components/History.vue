<template lang="pug">
v-container
  v-row(justify="start" align="center")
    v-col(cols="auto")
      .h3.font-weight-thin in my life
  v-row(justify="start" align="center" v-for="(history, index) of histories" :key="index")
    v-col(cols=1)
      v-icon.h6(color="grey") mdi-circle-small
    v-col(cols=3 md=2)
      .text-caption {{ history.date }}
    v-col(cols=8 md=9 style="text-align: start")
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
.v-card {
  min-height: 8em
}
</style>