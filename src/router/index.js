import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '../store/index'
// import Vue from "vue";

// console.log(Vue);
// console.log(VueRouter);
// Vue.use(VueRouter);

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // 로그인 하자마자 입고관리 페이지로 이동
  // to.authRequired가 true인데, localStorage의 userName이 없으면
  // from 라우터로 리다이렉트
  const userName = localStorage.getItem('userName')
  const isAuthenticated = to.matched.some(route => route.meta.authRequired)

  if (isAuthenticated && !userName) {
    // 로그인 정보가 없을 때 로그인 페이지로 이동
    alert('로그인을 먼저 해주세요')
    // 접근권한이 없을 때 이전 페이지로 redirect
    next({ name: 'Login' })
  } else {
    next()
    store.commit('Tab/mutateTabList', to.meta.title)

    //   const allowed = to.matched.some((route) => route.meta.allows);

    //   if (allowed.includes(auth)) next();
    //   else {
    //     alert("접근 권한이 업습니다.");
    //     console.log(from);
    //   }
  }
})

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

export default router
