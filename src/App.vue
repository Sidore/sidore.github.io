<template lang="pug">
  div
    p(v-model="message")
</template>
<script>
export default {
  data(){
      return {
          message : "hello vue"
      }
  }
}
</script>

