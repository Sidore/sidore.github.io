<template lang="pug">
  div#mainBlock
    div#header.fluid
        div.container
            h1.mailLogo 
                span.logo S
                span idore
            div.mainSlogan
                p JavaScript developer
                hr
                p Art of coding
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
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

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
    flex-direction: column;
    justify-content: space-evenly;
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
    position: relative;

    span {
        position: relative;
        z-index: 11;    
    }
    &::after {
            height: 27vh;
            width: 27vh;
            content: '';
            border: 1px #eee solid;
            background: rgba(238, 238, 238, .1);
            transform: rotate(45deg);
            position: absolute;
            top: 0vh;
            left: -2vh;
            z-index: 1;
        }

}

.mainSlogan {
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    align-items: center;

    p {
        background: transparent;
        font-size: 30px;
        padding: 0;
        margin: 0;
    }

    hr {
        width: 20vw;
        margin: 20px 0;
        height: 2px;
        border: none;
        background: #eee;
    }
}


</style>


