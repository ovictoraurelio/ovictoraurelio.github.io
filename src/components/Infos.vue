<template lang="pug">
.container
  .flex
    .flex-col
      img.rounded-full(
        :style="imgStyle"
        src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/Pi7compressedIMG_6435-small-minified.webp?alt=media&token=582014d5-5a59-47ae-8e85-b2e037fb1e74'
        alt='Victor Aurélio'
      )
    .flex-col.ml-2
      .flex
        .flex-col
          span.text-2xl.font-bold Victor Aurélio
      .flex
        .flex-col
          span.text-xl.pt-0.pb-0.font-medium CTO at Beyond Co
      .flex
        .flex-col
          span.text-sm.py-0 10 years digital solutions expertises
      .flex
        .flex-col
          span.text-sm.pt-2 Recife, Brasil
  .flex.mt-2
    .flex-col
      .text-base.text-justify
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
    name: 'Home',
    computed: {
      imgStyle () {
        const length = this.$isMobile() ? 80 : 120
        return `width: ${length}px;height: ${length}px;`
      }
    }
  }
</script>

<style scoped>
  img {
    display: block;
    width: 100vw;
    height: 100vh;
    object-fit: cover; /* or object-fit: contain; */
  }
</style>
