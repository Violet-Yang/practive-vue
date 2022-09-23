export const Auth = {
  namespaced: true,
  state: {
    jwtToken: '',
    refreshToken: '',
  },
  mutations: {
    logIn: (state, { jwtToken, refreshToken }) => {
      state.jwtToken = jwtToken
      state.refreshToken = refreshToken
      localStorage.setItem('jwtToken', jwtToken)
      localStorage.setItem('refreshToken', refreshToken)
    },
  },
  actions: {},
  getters: {},
}
