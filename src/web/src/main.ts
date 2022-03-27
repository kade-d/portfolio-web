import { createApp } from "vue";
import App from "./app.vue";
import "./index.css";
import Router from "./router/router";

createApp(App).use(Router).mount("#app");
