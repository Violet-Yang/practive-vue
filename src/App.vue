<template>
  <layout>
    <router-view />
  </layout>
</template>

<script setup>
import { getCurrentInstance, provide, inject, onMounted } from 'vue'

const store = inject('store')
// import Aheader from "@/views/header/Header";
import layout from '@/views/Layout'
// import SignUp from "@/views/SignUp";

// const {createApp} = require('vue')
const app = getCurrentInstance().appContext.config.globalProperties
provide('router', app.$router)

onMounted(() => {
  store.commit('logIn', localStorage.getItem('auth'))
})
</script>

<style lang="scss"></style>
