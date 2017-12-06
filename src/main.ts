import Vue from "vue";
import VueRouter from "vue-router";

import App from "./components/App";
import Boilerplate from "./components/Boilerplate";

if ("serviceWorker" in navigator && !document.location.host.startsWith("localhost")) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js");
      console.log(
        "ServiceWorker registration successful with scope: ",
        reg.scope
      );
    } catch (error) {
      console.log("ServiceWorker registration failed :(", error);
    }
  });
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/boilerplate', component: Boilerplate }
  ]
});

new Vue({
  el: "#app",
  router
});
