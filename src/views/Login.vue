<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full"
  >
    <div class="p-10 rounded-lg bg-gray-100 w-500 h-250">
      <VeeForm @submit="logIn">
        <div class="flex items-center justify-center">
          <div>
            <h1 class="mb-10">HIVE-WMS</h1>
            <p class="text-sm">이메일</p>
            <input type="text" v-model="state.userInfo.email" />
            <p class="text-sm">비밀번호</p>
            <input type="text" v-model="state.userInfo.password" />
            <button type="submit" class="block">sign in</button>
          </div>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
import Api from '@/service/login'
import { reactive, inject } from 'vue'

// import { Form } from 'vee-validate'

const router = inject('router')
const store = inject('store')

const state = reactive({
  userInfo: {
    email: '',
    password: '',
  },
})

const logIn = async () => {
  try {
    const {
      data: { jwtToken, refreshToken },
    } = await Api.login(state.userInfo)
    store.commit('Auth/logIn', { jwtToken, refreshToken })
    store.commit('Tab/mutateTabList', 'ReceivingManage')
    router.push({ name: 'ReceivingManage' })
  } catch (e) {
    console.error(e)
  }
  //로그인 성공했을 때 그 결과값을 localStrage에 저장
  //저장할 데이터는 jwt토큰 & refreshtoken
}
</script>

<style scoped></style>
