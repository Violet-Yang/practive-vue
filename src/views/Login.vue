<template>
  <div style="padding: 100px">
    {{ state.userInfo }}
    <Form @submit="logIn">
      <div>이메일</div>
      <input type="text" name="id" v-model="state.userInfo.id" />
      <div>비밀번호</div>
      <input type="text" name="pwd" v-model="state.userInfo.pwd" />
      <button type="submit">로그인</button>
    </Form>
  </div>
</template>

<script setup>
// import api from "@/http";
import { reactive, inject, onBeforeMount } from 'vue'
import { Form } from 'vee-validate'

const router = inject('router')
const store = inject('store')
const state = reactive({
  userInfo: {
    id: '',
    pwd: '',
  },
})

const logIn = () => {
  // console.log(api);
  // api.post("/sign-in", {
  //   email: state.userInfo.id,
  //   password: state.userInfo.pwd,
  // });
  const user1 = state.userInfo.id === 'first' && state.userInfo.pwd === '1111'
  const user2 = state.userInfo.id === 'second' && state.userInfo.pwd === '2222'

  localStorage.setItem('auth', { id: state.userInfo.id })
  if (user1 || user2) {
    store.commit('logIn', state.userInfo.id)
    user1
      ? router.push({ name: 'ReceivingManage' })
      : router.push({ name: 'ShippingDelivery' })
  } else {
    alert('로그인 정보를 확인해주세요')
    return
  }
}

onBeforeMount(() => {
  console.log('login beforeMount')
  // localStorage.clear();
})
</script>

<style scoped></style>
