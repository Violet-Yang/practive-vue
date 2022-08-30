<template>
  <div id="header">
    <div id="menuWrap">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/mypage">Mypage</router-link>
    </div>
  </div>
</template>

<script>
// import {reactive} from "vue"

export default {};
</script>

<style scoped>
#header {
  display: flex;
  position: fixed;
  right: 0;
}
</style>
