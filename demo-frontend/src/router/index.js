import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../views/DetailView.vue"),
      meta: {
        title: "Detail",
      },
    },
    {
      path: "/movie/:type",
      name: "movieList",
      component: () => import("../views/ListView.vue"),
      meta: {
        title: "List",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

router.afterEach((to, from) => {
  const title = to.meta.title || "Home";
  document.title = title;
});

export default router;
