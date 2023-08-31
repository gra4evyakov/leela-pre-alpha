import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "game",
      component: () => import("../components/MyGame.vue"),
    },
  ],
}); 

export default router;
