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

const error = new Error()

router.beforeEach((to, from, next) => {
  // 로그인 하자마자 입고관리 페이지로 이동
  // to.authRequired가 true인데, localStorage의 userName이 없으면
  // from 라우터로 리다이렉트
  const userName = localStorage.getItem('userName')
  const isAuthenticated = to.matched.some(route => route.meta.authRequired)

  // if (isAuthenticated && !userName) {
  //   // 로그인 정보가 없을 때 로그인 페이지로 이동
  //   console.log('if문')
  //   alert('로그인을 먼저 해주세요')
  //   // 접근권한이 없을 때 이전 페이지로 redirect
  //   next({ name: 'Login' })
  // } else {
  //   if (to.meta.title) store.commit('Tab/mutateTabList', to.meta.title)
  //   else {
  //     console.error('else loop')
  //     next({ name: 'Error' })
  //   }
  // }

  if (!userName && isAuthenticated) {
    localStorage.clear()
    next({ name: 'Login' })
  } else {
    if (!Object.keys(to.meta).length) {
      console.log('에러페이지 이동')
      next({ name: 'Error' })
    } else {
      if (to.meta.title) {
        console.log('else===================')
        next()
        store.commit('Tab/mutateTabList', to.meta.title)
      }
    }
  }
  // else {
  //   console.log('타이틀존재')
  //   next({ name: 'Error' })
  // }

  //라우팅 조건
  // 1. 로그인 페이지 : !userName || isAuthenticated
  // 2. 에러페이지 : to.meta.title 없을 때
  // 3. tab세팅 :  t

  // 1. 입고-기준정보까지 라우터 접근은 로컬스토리지(로그인) 정보가 있어야 됨
  //     => 정보는 존재하지만 라우터 정보가 없으면 error페이지로 이동
  // 2. 존재하지 않으면 로그인페이지로 리다이렉트

  //   const allowed = to.matched.some((route) => route.meta.allows);

  //   if (allowed.includes(auth)) next();
  //   else {
  //     alert("접근 권한이 업습니다.");
  //     console.log(from);
  //   }
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

router.onError(error)

export default router
