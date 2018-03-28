import Vue from "vue";
import App from "./App";

const app = new Vue({
    el: "#app",
    // router,
    // store,
    render: (req) => {
        return req(App);
    }
});