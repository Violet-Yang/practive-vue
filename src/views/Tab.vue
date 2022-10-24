<template>
  <div class="flex w-full">
    <ul
      class="flex items-end pr-1"
      v-for="(info, index) in state.tabInfo"
      :key="index"
    >
      <li class="w-100 h-36 bg-white flex gap-3 rounded-t-md p-5">
        <span>{{ $t(`field.${info.value}`) }}</span>
        <div @click="removeTab(info.value)">x</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, inject, reactive } from 'vue'

const store = inject('store')
// const toast = inject('$toast')

const state = reactive({
  // tabInfo: [
  //   { title: '입고관리' },
  //   { title: '입고관리' },
  //   { title: '입고관리' },
  // ],
  tabInfo: computed(() => {
    return store.getters['Tab/tabList']
  }),
})

// const props = defineProps({
//   tabInfo: {
//     type: Object,
//     default: () => {
//       return {}
//     },
//   },
// })

const removeTab = name => {
  if (state.tabInfo.length === 1) {
    window.alert('첫번째 탭은 지울 수 없습니다')
    return
  }
  store.commit('Tab/deleteTab', name)
}
</script>

<style scoped></style>
