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
                li
                    a(href="#" v-scroll-to="'#expirience'") expirience
                li 
                    a(href="#" v-scroll-to="'#goals'") goals
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
                    p Vue-router, Vuex, SSR
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
                    p Sass, Less, PostCSS, Pug, jQuery
    div#expirience.fluid
        div.container.vertical
            h3.db Experience
            div.horizontal.step
                div.vertical.text
                    h3.company Lucky Labs
                    hr
                    div.vertical
                        div.position
                            h4 Team Lead Front-End
                            p.time 04.18 - till now
                            p Leading a crew of 7 front-end developers, task estimating, code review, developing framework for SPA
                        div.position
                            h4 Senior JavaScript Developer
                            p.time 09.17 - 04.18
                            p Developing products and sites for the company, using Vue.js, Scss, BEM, Webpack, Gulp
                        div.position
                            h4 JavaScript Game Developer
                            p.time 02.17 - 09.17
                            p Developing games with HTML5, using JavaScript, Pixi.js, Webpack and own tools
                div.vertical.bg.ll    
            div.horizontal.step
                div.vertical.text 
                    h3.company IT Education Academy
                    hr
                    div.vertical
                        div.position
                            h4 Microsoft Sertified Instructor
                            p.time 07.14 - 02.17
                            p Teaching Microsoft certified courses, teaching own-authored courses
                        div.position
                            h4 Fullstack Developer
                            p.time 07.14 - 02.17
                            p Developing CRM system, using ASP.NET MVC 5, ASP.NET Web Api 2, Angular.js
                div.vertical.bg.itea
            div.horizontal.step
                div.vertical.text 
                    h3.company GNS
                    hr
                    div.vertical
                        div.position
                            h4 Front-End Developer
                            p.time 07.14 - 09.15
                            p Developing websites, using WordPress, jQuery, Bootstrap
                div.vertical.bg.gns
    div#goals.fluid
        div.container.vertical
            h3.wb Work hard. Dream big.
            
    div#contacts.fluid
        div.container.vertical
            h3 Сontacts
            hr
            p Feel free to contact me via 
                a(href="https://www.linkedin.com/in/vladyslav-sydorenko-689b9610b/" target="_blank") LinkedIn
            hr
            p sidorenkovladyslav@gmail.com
    div#footer.fluid
        div.container.vertical
            p 2012 - 2018 © Vladyslav Sydorenko
            p.horizontal 
                a(href="https://www.linkedin.com/in/vladyslav-sydorenko-689b9610b/" target="_blank")
                    img(:src="linkedin")                    
                a(href="https://github.com/Sidore" target="_blank")
                    img(:src="git")
                a(href="https://www.npmjs.com/~sidore" target="_blank") 
                    img(:src="npm")
                    
                    

</template>
<script>
import git from "../static/img/github.svg";
import npm from "../static/img/npm.svg";
import linkedin from "../static/img/linkedin.svg";

import header from "@components/Header";
import content from "@components/Content";
import mainContent from "@components/MainContent";
import tech from "@components/Tech";
import expirience from "@components/Expirience";
import goals from "@components/Goals";
import contacts from "@components/Contacts";
import footer from "@components/Footer";

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
  },
  components: {
      header, content, mainContent, tech, expirience, goals, contacts, footer
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
    background: #ddd url('../static/img/moving-through-stars-in-space_-1zccenlb__F0000.jpg') center center;
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
                flex-wrap: wrap;

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

            @media screen and (max-width: 500px) {
                flex: none;
            }
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

            @media screen and (max-width: 500px) {
                margin: 0 0 20px;
                width: 100%;
            }
            
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

#expirience {
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

    .container {
        // align-items: center;
        width: 800px;

        .step {
            margin: 20px 0;
            background: #f8f8f8;

            .text {
                padding: 20px 0;
            }
        }

        .vertical {
            flex: 1;
            
        }
    
        .db {
            background: #f8f8f8;
            margin: 0 0 20px;
            padding: 20px 0;            
        }

        .bg {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

             @media screen and (max-width: 500px) {
                flex: none;
            }

            &.ll {
                background-image: url('../static/img/charismatic-leadership.jpg');
                background-position: right center;                                  
            }

            &.itea {
                background-image: url('../static/img/oliur-rahman-01.jpg');                 
            }

            &.gns {
                background-image: url('../static/img/developer.jpg');                 
            }

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

            @media screen and (max-width: 500px) {
                width: 85%;
            }
            
        }

        .company,h4,p {
            padding: 0 20px 20px;
            margin: 0;
            text-align: left;

            
        }

        h4 {
            padding-bottom: 0;
        }

        .position {
            padding-bottom: 25px;

            &:last-child {
                padding-bottom: 0;                
            }
        }

        p {

            &.time {
                color: #051120c2;
                font-size: 16px;
                padding-bottom: 5px;     
            }

            background: transparent;
            color: #051120;   
            padding-bottom: 0;  
        }
    }
}

#goals {
    width: 100%;
    margin-top: 50px;
    text-align: center;
    display: flex;
    min-height: 100vh;
    background: #ccc url('../static/img/open_notebook-min.jpg') center center;
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

             @media screen and (max-width: 500px) {
                width: 100%;
                font-size: 16px;
                box-sizing: border-box;
            }
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


