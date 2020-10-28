import Vue from "vue";
import VueRouter from "vue-router";
import TheMock from "../views/TheMock.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "timetable",
    component: () =>
      import(/* webpackChunkName: "timetable" */ "../views/TheTimetable.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: TheMock
  },
  {
    path: "/",
    name: "course-plans",
    component: TheMock
  },
  {
    path: "/",
    name: "groups",
    component: TheMock
  },
  {
    path: "/",
    name: "users",
    component: TheMock
  },
  {
    path: "/",
    name: "roles",
    component: TheMock
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
