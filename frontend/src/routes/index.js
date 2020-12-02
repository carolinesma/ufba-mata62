import Vue from "vue";
import Router from "vue-router";
import Authentication from "@/components/Authentication/Authentication";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Authentication },
    { path: "/ufba", name: "hello", component: HelloWorld },
  ],
});

export default router;
