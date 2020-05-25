<template lang="pug">  
v-container(fluid fill-height)  
  v-row 
    v-col.mt-0(xs=12)
      v-card.col-xs-6.px-2.pb-2.pt-5(outlined)
        v-card-text
          v-row(justify="start")
            v-col(cols="auto")
              v-avatar(:size='120')
                v-img(src='https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/victor.jpeg?alt=media&token=237cc365-5fda-4c21-964f-83d24e01bb8f' alt='Victor Aurélio')
            v-col
              v-card-text.display-1.font-weight-bold
                | Victor Aurélio
              v-card-text.subheading.pt-0.pb-0.font-weight-medium
                | Desenvolvedor e Empreendedor
              v-card-text.caption.pt-2
                | Recife, Brasil
        v-card-text.body-1 
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
    data: () => ({      
    })
  }
</script>

<style scoped>
  .v-avatar {
    z-index: 1;
  }
</style>
