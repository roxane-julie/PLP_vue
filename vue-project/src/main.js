import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Home from "../src/view/Home.vue";
import ProductPage from "../src/view/ProductPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
