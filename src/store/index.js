import { createStore } from 'vuex'

// * 공통 store
import Auth from './common/auth'

export default createStore({
  state: {
    auth: '',
    lnbData: [],
  },
  mutations: {
    logIn: (state, auth) => {
      state.auth = auth
    },
    logout: state => {
      state.auth = ''
    },

    setLnbActive: (state, data) => {
      state.lnbData = data
      // 클릭한 대메뉴의 active->true로 변경
    },
  },
  actions: {
    testAction({ state, commit, rootState }) {
      console.log(rootState)
      if (state.auth) {
        commit('logout')
      }
    },
  },
  getters: {
    lnbData(state) {
      return state.lnbData
    },
    auth: state => state.auth,
  },
  modules: { Auth },
})
