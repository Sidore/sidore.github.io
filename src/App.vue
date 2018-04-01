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
    div#content.fluid
        div.navigation
            p.content Visual SV
            ul.content.list
                li 
                    a(href="#") technologies
                li 
                    a(href="#") portfolio
                li
                    a(href="#") expirience
                li
                    a(href="#") contact 
    div#mainContent.fluid
        div.container
            div.horizontal
                div.vertical
                    h3 Career Objective
                    hr 
                    p I am a highly-focused software developer with five+ years’ experience in a variety of development and engineering positions, enthusiastic, knowledge-hungry learner, eager to meet challenges and quickly assimilate new concepts
                div.vertical.bg
    div#tech.fluid
        div.container
            h3.wb Skills
            div.grid
                div JavaScript
                div Vue
                div Vuex
                div Angular.js
                div Webpack
                div Node.js
                div Express
                div TypeScript
                div Sass\Less
                div Pug
                div jQuery
                

                 
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
    background: #ddd url('../static/img/moving-through-stars-in-space_-1zccenlb__F0000.png') center center;
    background-size: cover;
    justify-content: center;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        // width: 1000px;
        // margin: auto;
        // background: #ccc;
    }
}

.fluid {
    width: 100%;
}
p {
    color: white;
    background: #ccc;
    padding: 15px;
    margin: 0;
}
.horizontal {
    flex-direction: row;
    display: flex;
}
.vertical {
    flex-direction: column;
    display: flex;    
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

#content {
    background: #fefefe;
    display: flex;
    justify-content: center;

    .navigation {
        max-width: 800px;
        display: flex;
        padding: 40px 20px 40px;        
        justify-content: space-between;
        width: 100%;

        .content {
            display: flex;
            font-family: 'Ubuntu', sans-serif;
            background: transparent;
            color: #051120;
            font-size: 36px;

            &.list {
                margin: 0;
                padding: 0;
                color: #051120;
                font-size: 22px;
                display: flex;
                align-items: center;
                list-style: none;

                li {
                    display: flex;
                }

                a {
                    display: flex;
                    text-decoration: none;
                    padding: 20px;

                    &:visited, &:active {
                        color: #051120;
                    }
                }
            }
        }
    }
}

#mainContent {
    display: flex;
    color: #ddd;
    justify-content: center;
    
    .container {
        max-width: 800px;
        display: flex;
        padding: 20px;        
        justify-content: space-between;
        width: 100%;
        color: #051120;
        font-size: 22px;
        font-family: 'Ubuntu', sans-serif;

        .vertical {
            flex: 1;
        }

        .bg {
            background: url('../static/img/apple-devices-1867761_1280-764x512.jpg') center;
            background-size: cover;
        }

        h3 {
            font-size: 30px;
        }

        hr {
            width: 75%;
            border: none;
            height: 2px;
            background:#051120;  
            margin: 0 0 20px 20px;
            
        }

        h3,p {
            padding: 0 20px 20px;
            margin: 0;
            
        }

        p {
            background: transparent;
            color: #051120;   
            padding-bottom: 0;  
        }
        
        .logo {
            width: 100%;
        }
    }
}

#tech {
    width: 100%;
    margin-top: 50px;
    text-align: center;
    display: flex;
    height: 100vh;
    background: #ccc url('../static/img/cropped-pexels-photo-373076-6.jpeg') center center;
    background-size: cover;
    justify-content: center;

    .container {
        max-width: 800px;
        display: flex;
        padding: 20px;        
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        color: #051120;
        font-size: 22px;
        font-family: 'Ubuntu', sans-serif;

        h3 {
            font-size: 30px;
        }

        .wb {
            padding: 20px;
            background: rgba($color: #fefefe, $alpha: 0.8)
        }
    }
}

</style>


