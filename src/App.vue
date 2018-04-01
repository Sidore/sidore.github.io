<template lang="pug">
  div#mainBlock
    div#header.fluid
        div.container
            h1.mailLogo 
                span.logo S
                span idore
    div#mainContent.fluid
        div
            p I'm a hardcore developer
        div
            p  lorem ipsum dolar
    div#preFooter.fluid
        p map
    div#footer.fluid
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
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

h1 {
    margin: 0;
}

#header {
    width: 100%;
    text-align: center;
    display: flex;
    height: 100vh;
    background: #ccc url('../static/img/moving-through-stars-in-space_-1zccenlb__F0000.png') center center;
    background-size: cover;
    justify-content: center;
}
.container {
    display: flex;
    align-items: center;
    // width: 1000px;
    // margin: auto;
    // background: #ccc;
}
.fluid {
    width: 100%;
}
p {
    color: white;
    background: #ccc;
    padding: 15px;
    margin: 15px;
}

.mailLogo {
    color: #eee;
    font-size: 20vh;
    font-family: 'Dancing Script', cursive;
    z-index: 10;
    .logo {
        position: relative;
        &::after {
            height: 22vh;
            width: 22vh;
            content: '';
            border: 1px #eee solid;
            transform: rotate(45deg);
            position: absolute;
            top: 5px;
            left: -12px;
            z-index: 1;
        }
    }

}


</style>


