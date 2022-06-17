import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/homeView/homeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      pageTitle: "首页"
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
