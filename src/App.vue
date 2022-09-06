<template>
  <layout>
    <router-view />
  </layout>
</template>

<script setup>
import { getCurrentInstance, provide, inject, onMounted } from 'vue'
import layout from '@/views/Layout'

const store = inject('store')
const app = getCurrentInstance().appContext.config.globalProperties
provide('router', app.$router)

onMounted(() => {
  store.commit('logIn', localStorage.getItem('auth'))
})
</script>

<style lang="scss"></style>
