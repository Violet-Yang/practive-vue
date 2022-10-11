import store from '@/store/index'
import decode from 'jwt-decode'

const Auth = {
  namespaced: true,
  state: {
    jwtToken: '',
    refreshToken: '',
    userName: '',
    roles: '',
    lnbData: {},
  },
  mutations: {
    logIn: (state, { jwtToken, refreshToken }) => {
      state.jwtToken = jwtToken
      state.refreshToken = refreshToken
      localStorage.clear()
      const decodedToken = decode(jwtToken)
      localStorage.setItem('roles', decodedToken.roles)
      localStorage.setItem('userName', decodedToken.username)
      localStorage.setItem('lnbData', JSON.stringify(decodedToken.lnbData))
      localStorage.setItem('jwtToken', jwtToken)
      localStorage.setItem('refreshToken', refreshToken)

      state.roles = decodedToken.roles
      state.userName = decodedToken.username

      store.dispatch('Lnb/getLnbData', JSON.stringify(decodedToken.lnbData))
    },
  },
  actions: {},
  getters: {
    userName: state => state.userName,
  },
}

export default Auth
