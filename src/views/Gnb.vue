<template>
  <div class="gnbClass">
    {{ state.userInfo.userId }}
    <button @click="goSignIn">로그아웃</button>
  </div>
</template>

<script setup>
import { reactive, inject } from "vue";

const router = inject("router");
const state = reactive({
  userInfo: {
    userId: "jeyang@yesbee.com",
    auth: "master",
  },
});

const goSignIn = () => {
  localStorage.clear();
  console.log(localStorage.getItem("auth"));
  router.push({ name: "SignUp" });
};
</script>

<style lang="scss" scoped>
.gnbClass {
  position: fixed;
  right: 0;
  top: 0;
  //   width: 100%;
  display: flex;
}
</style>
