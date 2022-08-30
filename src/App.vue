<template>
  <layout> </layout>
  <router-view />
</template>

<script setup>
import { getCurrentInstance, provide } from "vue";
// import Aheader from "@/views/header/Header";
import layout from "@/views/Layout";

// const {createApp} = require('vue')
const app = getCurrentInstance().appContext.config.globalProperties;
provide("router", app.$router);
</script>

<style lang="scss"></style>
