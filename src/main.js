import { createApp } from "vue";
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import Router from "./router/index";
import "./assets/main.css";
  
  createApp(App).use(Router).mount("#app");
