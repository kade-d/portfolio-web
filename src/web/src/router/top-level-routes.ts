import { RouteRecordRaw } from "vue-router";
import Home from "@/components/views/home.vue";
import Projects from "@/components/views/projects.vue";
import About from "@/components/views/about.vue";

const topLevelRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/projects",
    component: Projects,
    name: "Projects",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
];

export default topLevelRoutes;
