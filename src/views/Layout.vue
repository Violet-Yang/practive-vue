<template>
  <div>
    <Gnb></Gnb>
    <Lnb></Lnb>
    <default style="position: absolute; left: 200px; top: 10px"> </default>
  </div>
</template>

<script setup>
import Lnb from "@/views/Lnb";
import Gnb from "@/views/Gnb";
import Default from "@/views/Default";

import { inject } from "vue";

const router = inject("router");
console.log(router);
// const state = reactive({

// })
</script>

<style lang="scss" scoped></style>
