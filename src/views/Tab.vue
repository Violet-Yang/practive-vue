<template>
  <div class="h-100">
    <p>{{ state.tabInfo.title }}</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  tabInfo: {
    title: '입고관리',
  },
})

// const props = defineProps({
//   tabInfo: {
//     type: Object,
//     default: () => {
//       return {}
//     },
//   },
// })
</script>

<style scoped></style>
