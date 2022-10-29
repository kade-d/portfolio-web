import { createApp } from "vue";
import App from "./app.vue";
import Router from "./router/router";
import Vue3TouchEvents from "vue3-touch-events";

createApp(App)
  .use(Router)
  .use(Vue3TouchEvents, { swipeTolerance: 10 })
  .mount("#app");
