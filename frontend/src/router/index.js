import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/add.vue"),
  },
  {
    path: "/delete",
    name: "delete",
    component: () => import("../views/delete.vue"),
    props: true,
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("../views/edit.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
