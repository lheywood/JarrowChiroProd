import { createWebHistory, createRouter, useRoute } from "vue-router";
import Home from "@/components/Home.vue";
import ConditionsTreated from "@/components/ConditionsTreated.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/conditions-treated/:id?",
    name: "Conditions Treated",
    component: ConditionsTreated,
    props: true
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;