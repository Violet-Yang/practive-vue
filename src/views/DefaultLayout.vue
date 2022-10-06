<template>
  <div class="flex h-full">
    <Lnb class="left-0"></Lnb>
    <div>
      <Tab class="w-full bg-gray-800 fixed top-0 h-40"></Tab>
      <div class="fixed top-40">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Lnb from '@/views/Lnb'
import Tab from '@/views/Tab'
</script>

<style scoped></style>
