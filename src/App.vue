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
                    a(href="#" v-scroll-to="'#tech'") skills
                //- li 
                //-     a(href="#" v-scroll-to="'#portfolio'") portfolio
                li
                    a(href="#" v-scroll-to="'#expirience'") expirience
                li
                    a(href="#" v-scroll-to="'#footer'") contacts 
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
                div.card.horizontal 
                    h4 JavaScript
                    p ES5, ES6, ES7+, TypeScript
                div.card.horizontal
                    h4 Vue
                    p Vue-router, Vuex, Vuetify
                div.card.horizontal
                    h4 Angular.js
                    p 1.x, 2+, Angular-Material 
                div.card.horizontal
                    h4 Webpack
                    p Versions 2, 3, 4
                div.card.horizontal 
                    h4 Node.js
                    p Express, WebSockets
                div.card.horizontal 
                    h4 Git
                    p Git Submodules, SVN
                div.card.horizontal
                    h4 Tools
                    p Sass, Less, PostCSS, Pug, Jquery

    //- div#portfolio.fluid
    //-     div.container.vertical
    //-         div.horizontal
    //-             a(href="https://itea.ua/" target="_blank").itemPortfolio.itea
    //-             a(href="#" target="_blank").itemPortfolio b
    //-             a(href="#" target="_blank").itemPortfolio c
    //-         div.horizontal
    //-             a(href="#" target="_blank").itemPortfolio d
    //-             a(href="#" target="_blank").itemPortfolio e
    //-             a(href="#" target="_blank").itemPortfolio f

    div#expirience.fluid
        p expirience
    div#contacts.fluid
        div.container.vertical
            h3 Сontacts
            hr
            div.vertical.card
                div.photo
                div.vertical
                    p Feel free to contact me via LinkedIn
            hr
            p sidorenkovladyslav@gmail.com
    div#footer.fluid
        div.container.vertical
            p 2012 - 2018 © Vladyslav Sydorenko
            p.horizontal 
                a(href="https://www.linkedin.com/in/vladyslav-sydorenko-689b9610b/")
                    img(:src="linkedin")                    
                a(href="https://github.com/Sidore")
                    img(:src="git")
                a(href="https://www.npmjs.com/~sidore") 
                    img(:src="npm")
                    
                    

</template>
<script>
import git from "../static/img/github.svg";
import npm from "../static/img/npm.svg";
import linkedin from "../static/img/linkedin.svg";

export default {
  data(){
      return {
          message : "hello vue",
          git,
          npm,
          linkedin
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
                    color: #051120;

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
    min-height: 100vh;
    background: #ccc url('../static/img/cropped-pexels-photo-373076-6.jpeg') center center;
    background-size: cover;
    justify-content: center;

    .container {
        max-width: 800px;
        display: flex;
        padding: 20px;        
        justify-content: space-around;
        flex-direction: column;
        width: 100%;
        color: #051120;
        font-size: 22px;
        font-family: 'Ubuntu', sans-serif;

        h3 {
            font-size: 30px;
            margin: 10px 0;
        }

        .wb {
            padding: 20px;
            background: rgba($color: #fefefe, $alpha: 0.8)
        }

        .grid {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;

            .card {
                padding: 10px;
                background: rgba($color: #fefefe, $alpha: 0.8);
                .logo {
                    width: 100%;
                }
            }

            h4 {
                margin: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-right: 10px;
            }

            p {
                background: #eee;
                color: #051120c2;
            }

            .card > *:nth-child(1) {
                flex: 1;
            }    
            .card > * {
                flex: 2;
            }
        }
    }
}

// #portfolio {
//     justify-content: center;
//     display: flex;

//     .container {
//         max-width: 800px;
//         display: flex;
//         padding: 20px;
//         margin-top: 10px;        
//         justify-content: space-around;
//         flex-direction: column;
//         width: 100%;
//         color: #051120;
//         font-size: 22px;
//         font-family: 'Ubuntu', sans-serif;

//         .itemPortfolio {
//             display: flex;
//             flex: 1;
//             height: 20vh;
//             background: #ccc;
//             margin: 20px 20px 20px 0;
//             transition: all .5s;

//             &.itea {
//                 background: #ccc url('../static/img/itea.jpg') center center;
//                 background-size: cover;
//             }

//             &:nth-child(3) {
//                 margin-right: 0;
//             }

//             &:hover {
//                 //  background: url('../static/img/itea.jpg'), url('../static/img/view.png') ;   
//             }
//         }
//     }
// }

#contacts {
    width: 100%;
    padding: 40px 0;
    text-align: center;
    display: flex;
    // height: 60vh;
    // background: #cecece;
    justify-content: center;
    color: #051120;
    font-size: 22px;
    font-family: 'Ubuntu', sans-serif;

    h3 {
        margin: 0;
        font-size: 30px;
    }

    .container {
        align-items: center;
        width: 800px;

        p {
            background: #eee;
            color: #051120c2;
        }

        .photo {
            display: flex;
            background: url('../static/img/12140075_600004393475928_3624210431481713254_o.jpg') center;
            background-repeat: no-repeat;
            background-size: contain;
            height: 400px;
            margin-bottom: 20px;
        }
    }


    hr {
        width: 50%;
        border: none;
        height: 2px;
        background:#051120;  
        margin: 20px 0;        
    }
}

#footer {
    background: #051120;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    // color: #051120;
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;

    p {
        background: transparent;
    }

    img {
        width: 40px;
        display: flex;
        height: 40px;
        fill: white;
        padding: 7px;
    }

    a {
        display: flex;
        color: white;
        margin: auto;
        border-radius: 70px;
        max-height: 55px;
        height: 55px;
        width: 55px;
        max-width: 55px;
        background: #ccc;
        text-decoration: none;
        transition: all .5s;

        &:hover {
            background: white;
        }
    }

    .horizontal {
        justify-content: space-around;
    }

}


</style>


