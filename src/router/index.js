import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "../views/EventDetails";
import NotFoundComponent from "@/views/NotFoundComponent"

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: '/:catchAll(.*)',
    name: "NotFoundComponent",
    component: NotFoundComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
