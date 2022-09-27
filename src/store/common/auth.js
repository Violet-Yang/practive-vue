// import { inject } from 'vue'
import decode from 'jwt-decode'
// const store = inject('store')

const Auth = {
  namespaced: true,
  state: {
    jwtToken: '',
    refreshToken: '',
    userName: '',
    roles: '',
    lnbData: [],
  },
  mutations: {
    logIn: (state, { jwtToken, refreshToken }) => {
      state.jwtToken = jwtToken
      state.refreshToken = refreshToken
      localStorage.clear()
      const decodedToken = decode(jwtToken)
      console.log(decodedToken)
      localStorage.setItem('roles', JSON.stringify(decodedToken.roles))
      localStorage.setItem('userName', JSON.stringify(decodedToken.username))
      localStorage.setItem('lnbData', JSON.stringify(decodedToken.lnbData))
      localStorage.setItem('jwtToken', JSON.stringify(jwtToken))
      localStorage.setItem('refreshToken', JSON.stringify(refreshToken))

      state.roles = decodedToken.roles

      // store.dispatch('Lnb/setLnbData', decodedToken.lnbData)
    },
  },
  actions: {},
  getters: {
    userName: state => state.userName,
  },
}

export default Auth
