<template>
  <div class="flex w-full">
    <ul
      class="flex items-end pr-1"
      v-for="(info, index) in state.tabInfo"
      :key="index"
    >
      <li class="w-100 h-36 bg-white flex gap-3 rounded-t-md p-5">
        {{ info.value }}
        <div>x</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, inject, reactive } from 'vue'

const store = inject('store')
const state = reactive({
  // tabInfo: [
  //   { title: '입고관리' },
  //   { title: '입고관리' },
  //   { title: '입고관리' },
  // ],
  tabInfo: computed(() => store.getters['Tab/tabList']),
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
