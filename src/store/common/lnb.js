const Lnb = {
  // *해당 파일을 모듈화시켜 전역으로 사용되도록
  namespaced: true,
  state: {
    lnbList: [],
  },
  mutations: {
    setLnbData(state, lnb) {
      state.lnbList = lnb
      console.log(state.lnbList)
    },
  },
  actions: {
    getLnbData({ commit }, lnb) {
      commit('setLnbData', lnb)
    },
  },
  getters: {
    lnbList: state => state.lnbList,
  },
}

export default Lnb
