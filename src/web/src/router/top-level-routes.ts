import { RouteRecordRaw } from "vue-router";
import Pages from "@/components/views/pages.vue";

const topLevelRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Pages,
    name: "Home",
  },
];

export default topLevelRoutes;
