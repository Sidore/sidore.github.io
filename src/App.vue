<template lang="pug">
  div
    p {{message}}
    input(v-model="message")
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


