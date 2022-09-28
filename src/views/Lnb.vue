<template>
  <div class="flex flex-col justify-between w-200 bg-gray-800">
    <div class="lnb-wrap">
      <ul class="h-100" v-for="(lnb, index) in state.lnbList" :key="index">
        <li>
          <div class="text-xl text-gray-100" @click="click1Depth(lnb)">
            {{ lnb.lnbName }}
          </div>
          <div v-for="child in lnb.lnbChild" :key="child">
            <div
              v-if="lnb.active"
              class="text-gray-100"
              @click="goPage(child.route)"
            >
              {{ child.childName }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <p>현재 로그인 한 id : {{ state.id }}</p>
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
  id: computed(() => store.getters['Auth/userName']),
  // lnbList: computed(() => store.getters['Lnb/lnbList']),
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

const click1Depth = lnbInfo => {
  // store.commit('setLnbActive', lnbInfo)

  state.lnbList.map(item => {
    if (lnbInfo.lnbName === item.lnbName) {
      lnbInfo.active = !lnbInfo.active
    }
  })
}

const goPage = route => {
  router.push({ path: route })
}

const logout = () => {
  store.commit('logout')
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
