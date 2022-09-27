const Lnb = {
  state: {
    lnbList: [],
  },
  mutations: {
    getLnb(state, lnb) {
      state.lnbList = lnb
      console.log(state.lnbList)
    },
  },
  actions: {
    setLnbData({ commit }, lnb) {
      commit('getLnb', lnb)
    },
  },
  getters: {
    lnbList: state => state.lnbList,
  },
}

export default { Lnb }
