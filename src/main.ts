import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/iconmoon.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";


// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

createApp(App).use(store).use(router).mount("#app");
