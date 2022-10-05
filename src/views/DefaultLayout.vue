<template>
  <div class="flex bg-gray-500 h-full">
    <Lnb class="left-0"></Lnb>
    <div>
      <Tab class="w-full bg-gray-400 fixed top-0 h-55"></Tab>
      <div class="fixed top-55">
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
