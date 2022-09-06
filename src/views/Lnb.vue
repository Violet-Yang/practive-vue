<template>
  <div class="lnb-wrap">
    <ul v-for="(lnb, index) in state.newLnb" :key="index">
      <li>
        <div @click="click1Depth(lnb)">{{ lnb.lnbName }}</div>
        <div v-for="child in lnb.lnbChild" :key="child">
          <div v-if="lnb.active" @click="goPage(child.route)">
            {{ child.childName }}
          </div>
        </div>
      </li>
    </ul>
  </div>
  <p>현재 로그인 한 id : {{ state.id }}</p>
  <button @click="logout">로그아웃</button>
</template>

<script setup>
import { computed, reactive, inject, onMounted } from 'vue'
import store from '@/store'

const router = inject('router')

const state = reactive({
  id: computed(() => store.getters['auth']),
  lnbList: [
    {
      lnbName: '대시보드',
      active: false,
      authorization: ['first', 'second'],
      lnbChild: [],
    },
    {
      lnbName: 'receiving',
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

onMounted(() => {
  // const id = localStorage.getItem("auth");
  // console.error(state.id);
  console.log(localStorage.getItem('auth'))
  console.log(state.newLnb)
  // state.lnbList =
  //   state.id === "first"
  //     ? state.lnbList.splice(1, state.lnbList.length)
  //     : state.lnbList.splice(0, 1);
})

const click1Depth = lnbInfo => {
  store.commit('setLnbActive', lnbInfo)
  state.lnbList.map(item => {
    if (item.lnbName === lnbInfo.lnbName) {
      item.active = !item.active
    } else {
      item.active = false
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
  position: fixed;
  top: 0;
  left: 0;
}
</style>
