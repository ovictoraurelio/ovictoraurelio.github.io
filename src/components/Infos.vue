<template lang="pug">
v-container
  v-row(justify="start" align="center")
    v-col(cols="auto")
      v-avatar(:size='$isMobile() ? 80 : 120')
        v-img(
          src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/victor.jpeg?alt=media&token=237cc365-5fda-4c21-964f-83d24e01bb8f'
          alt='Victor Aurélio'
        )
    v-col(cols='auto')
      v-row(no-gutters)
        v-col(cols='auto')
          span.display-1.font-weight-bold Victor Aurélio
      v-row(no-gutters)
        v-col(cols='auto')
          span.subheading.pt-0.pb-0.font-weight-medium CTO at Beyond Co
      v-row(no-gutters)
        v-col(cols='auto')
          span.caption.py-0 10 years digital solutions expertises
      v-row(no-gutters)
        v-col(cols='auto')
          span.caption.pt-2 Recife, Brasil
  v-row(justify="start" align="center")
    v-col(cols='auto')
      .body-1.text-justify
        | CTO and Co-founder at Beyond Cloud.
        | I'm a Cloud Developer and Google Cloud Architect.
        | 
        | Entrepreneur since kid, I love work with things that make people's life easy, so I had become a programmer (since I have 14y) to develop, build and deploy software or tools with this purpose.
        | 
        | So I love challenges! Works on a innovative or hard topic of software or hardware development and mainly the challenges of real world that we can solve with technology.
        | 
        | - Undergraduate Computer Engineering at Federal University Of Pernambuco.
        | - Former Computer Technician by Federal Institute of Alagoas, 2015. 
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .v-avatar {
    z-index: 1;
  }
</style>
