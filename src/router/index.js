import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import store from "../store";
import Vue from "vue";

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
  const authRequiredList = router.filter((route) => route.meta.authRequired);
  if (authRequiredList) alert("로그인이 필요합니다");
  else next();

  // to : 이동할 url
  // from : 현재 url
  // next : to에서
  // if (
  //   // 레코드 중 경로가 일치하는 레코드를 matched 배열에 저장했다가
  //   // to.matched 배열 안에서 라우트 레코드의 메타 필드에 접근한다
  //   to.matched.some(function (routeInfo) {
  //     return routeInfo.meta.authReqoiuired;
  //   })
  // ) {
  //   // 사용자에게 알려주고
  //   alert("Login please!");
  // } else {
  //   // 필요하지 않다면 이동하려는 페이지의 path를 표시하고
  //   console.log("routing success :" + to.path);
  //   // 해당 페이지로 이동한다.
  //   next();
  // }
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");

export default router;
