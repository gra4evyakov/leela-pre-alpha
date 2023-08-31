import { createRouter, createWebHashHistory } from "vue-router";

const routerHistory = createWebHashHistory();

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
