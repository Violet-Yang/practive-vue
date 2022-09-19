<template>
  <div class="flex items-center justify-center">
    <VeeForm @submit="logIn">
      <div class="w-100 h-100 p-10 rounded-md bg-gray-100">
        <h1 class="mb-10">HIVE-WMS</h1>
        <div>
          <p class="text-sm">이메일</p>
          <input type="text" v-model="state.userInfo.id" />
          <p class="text-sm">비밀번호</p>
          <input type="text" v-model="state.userInfo.pwd" />
        </div>
        <button type="submit">sign in</button>
      </div>
    </VeeForm>
  </div>
</template>

<script setup>
import loginService from '@/service/login'
import { reactive, onBeforeMount } from 'vue'
// import { Form } from 'vee-validate'

// const router = inject('router')
// const store = inject('store')
const state = reactive({
  userInfo: {
    id: '',
    pwd: '',
  },
})

const logIn = () => {
  console.error(loginService)
  console.log(state.userInfo)
  // console.error(loginService)
  loginService.login(state.userInfo)
  // console.log(api);
  // api.post("/sign-in", {
  //   email: state.userInfo.id,
  //   password: state.userInfo.pwd,
  // });
  // const user1 = state.userInfo.id === 'first' && state.userInfo.pwd === '1111'
  // const user2 = state.userInfo.id === 'second' && state.userInfo.pwd === '2222'

  // localStorage.setItem('auth', { id: state.userInfo.id })
  // if (user1 || user2) {
  //   store.commit('logIn', state.userInfo.id)
  //   user1
  //     ? router.push({ name: 'ReceivingManage' })
  //     : router.push({ name: 'ShippingDelivery' })
  // } else {
  //   alert('로그인 정보를 확인해주세요')
  //   return
  // }
}

onBeforeMount(() => {
  console.log('login beforeMount')
  // localStorage.clear();
})
</script>

<style scoped></style>
