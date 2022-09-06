import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import store from "../store";
// import Vue from "vue";

// console.log(Vue);
// console.log(VueRouter);
// Vue.use(VueRouter);

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

console.log(router);
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem("auth");
  const isAuthenticated = to.matched.some((route) => route.meta.authRequired);
  console.log(to.name);
  console.log("=======================]");
  console.log(isAuthenticated);
  console.log(auth);
  if (to.name !== "Login" && isAuthenticated && !auth) {
    alert("로그인을 먼저 해주세요");
    next({ name: "Login" });
  } else {
    next();
    //   const allowed = to.matched.some((route) => route.meta.allows);

    //   if (allowed.includes(auth)) next();
    //   else {
    //     alert("접근 권한이 업습니다.");
    //     console.log(from);
    //   }
  }
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = to.matched.some((route) => route.meta.authRequired);
//   console.error(from);
//   console.error(to.name);
//   if (isAuthenticated) {
//     console.log(isAuthenticated);
//     alert("로그인을 먼저 해주세요");
//     return { name: "SignUp" };
//   }
//   const auth = localStorage.getItem("auth");
//   console.log(to.meta.allows);
//   if (auth && to.meta.allows.includes(auth)) {
//     next();
//   }
// });

// const app = Vue.createApp({});
// app.use(router);
// app.mount("#app");

export default router;
