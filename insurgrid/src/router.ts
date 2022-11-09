import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/welcome",
    name: "welcome",
    component: () => import("./components/Welcome.vue"),
  },
  {
    path: "/carriers",
    alias: "/carriers",
    name: "carriers",
    component: () => import("./components/Carriers.vue"),
  },
  {
    path: "/carrier",
    alias: "/carrier",
    name: "carrier",
    component: () => import("./components/CarrierLogin.vue"),
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
