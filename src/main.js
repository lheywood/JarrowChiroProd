import { createApp } from "vue";
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import ConditionsTreated from "./components/ConditionsTreated.vue";

import "./assets/main.css";


const routes = [
    { path: '/', component: Home },
    { path: '/conditions-treated', component: ConditionsTreated },
  ]

  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  
  createApp(App).use(router).mount("#app");
