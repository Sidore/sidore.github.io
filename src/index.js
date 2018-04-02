import Vue from "vue";
import App from "./App";

import VueScrollTo from "vue-scrollto";
 
Vue.use(VueScrollTo, {
    duration: 1000,
    container: "body",
    // duration: 500,
    easing: "ease",
    offset: 0
})

const app = new Vue({
    el: "#app",
    // router,
    // store,
    render: (req) => {
        return req(App);
    }
});