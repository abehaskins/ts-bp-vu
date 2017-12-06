import Vue from "vue";
import App from "./components/App";

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

new Vue({
  el: "#app",
  render: h => h(App)
});
