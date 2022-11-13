<template>
  <div class="flex flex-col justify-between w-150 bg-gray-800 h-full">
    <div class="lnb-wrap">
      <ul v-for="(title, index) in state.lnb" :key="index">
        <li class="p-10">
          <div class="text-xl text-gray-100" @click="clickTitle(title)">
            {{ $t(`field.${title[0]}`) }}
          </div>
          <div v-for="{ label, route } in title[1].child" :key="route">
            <div
              v-if="title[1].isActive"
              class="text-gray-100"
              @click="goPage(route, label)"
            >
              {{ $t(`field.${label}`) }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-white">
      <p>{{ state.id }}</p>
      <button @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, inject } from 'vue'
import store from '@/store'
// import Auth from '@/store/common/auth'

const router = inject('router')

const state = reactive({
  id: localStorage.getItem('userName'),
  // id: computed(() => store.getters['Auth/userName']),
  lnb: Object.entries(JSON.parse(localStorage.getItem('lnbData'))),
  // lnb: store.getters['Lnb/lnbList'],
  lnbList: [
    {
      lnbName: '대시보드',
      active: false,
      authorization: ['first', 'second'],
      lnbChild: [],
    },
    {
      lnbName: '입고',
      active: false,
      authorization: ['first'],
      lnbChild: [
        {
          childName: '입고관리',
          active: false,
          // routerName: "ReceivingManage"
          route: '/receiving/manage',
        },
        {
          childName: '입고검수',
          active: false,
          route: '/receiving/inspect',
          // routerName: "ReceivingInspect",
        },
        {
          childName: '입고확정',
          active: false,
          route: '/receiving/confirm',
          // routerName: "ReceivingConfirm",
        },
      ],
    },
    {
      lnbName: '출고',
      active: false,
      authorization: ['second'],
      lnbChild: [
        {
          childName: '택배신청',
          active: false,
          // routerName: "ReceivingManage"
          route: '/shipping/delivery',
        },
        {
          childName: '차량배송',
          active: false,
          // routerName: "ReceivingManage"
          route: '/shipping/delivery',
        },
        {
          childName: '출고지시',
          active: false,
          // routerName: "ReceivingManage"
          route: '/shipping/vehicle',
        },
        {
          childName: '피킹',
          active: false,
          // routerName: "ReceivingManage"
          route: '/shipping/picking',
        },
      ],
    },
    // {
    //   lnbName: "재고",
    //   active: false,
    //   authorization: "3pl",
    //   lnbChild: [
    //     { childName: "재고현황", active: false },
    //     { childName: "재고이동", active: false },
    //     { childName: "상품이력", active: false },
    //   ],
    // },
    // {
    //   lnbName: "기준정보",
    //   active: false,
    //   authorization: "3pl",
    //   lnbChild: [
    //     { childName: "상품관리", active: false },
    //     { childName: "출고처관리", active: false },
    //     { childName: "로케이션관리", active: false },
    //   ],
    // },
  ],
  //info.authorization : [['first', 'second'], ['first'], ['second']]
  newLnb: computed(() =>
    state.lnbList.filter(obj => {
      const authId = localStorage.getItem('auth')
      return obj.authorization.includes(authId)
    }),
  ),
})

const clickTitle = lnbInfo => {
  // store.commit('setLnbActive', lnbInfo)
  state.lnb.map(lnb => {
    if (lnb[0] === lnbInfo[0]) {
      lnb[1].isActive = !lnbInfo[1].isActive
    }
  })
  // state.lnb.map(lnb => {
  //   if (lnbInfo.lnbName === lnb.lnbName) {
  //     lnbInfo.active = !lnbInfo.active
  //   }
  // })
}

const goPage = (route, label) => {
  router.push({ path: route })
  store.commit('Tab/mutateTabList', label)
  const tabList = store.getters['Tab/tabList']

  if (tabList.length > 10) {
    store.commit('Tab/deleteTab')
  }
}

const logout = () => {
  localStorage.clear()
  router.push({ name: 'Login' })
}
</script>

<style lang="scss" scoped>
.lnb-wrap {
  // position: fixed;
  top: 0;
  left: 0;
}
</style>
