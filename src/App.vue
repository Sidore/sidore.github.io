<template lang="pug">
  div#mainBlock
    div#header
        h1 {{message}}
    div#mainContent
        div
            p I'm a hardcore developer
        div
            p  lorem ipsum dolar
    div#preFooter
        p map
    div#footer
        p contacts
</template>
<script>
export default {
  data(){
      return {
          message : "hello vue"
      }
  },
  created() {
      console.log("started")
  }
}
</script>
<style lang="scss">
p {
    color: white;
    background: #ccc;
    padding: 15px;
    margin: 15px;
}
</style>


