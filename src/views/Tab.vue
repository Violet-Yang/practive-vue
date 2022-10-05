<template>
  <div class="flex w-full">
    <ul
      class="flex items-center justify-center w-100"
      v-for="(info, index) in state.tabInfo"
      :key="index"
    >
      <li class="bg-white flex justify-between gap-3 rounded-md">
        {{ info.title }}
        <div>x</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  tabInfo: [
    { title: '입고관리' },
    { title: '입고관리' },
    { title: '입고관리' },
  ],
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
