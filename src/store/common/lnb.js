const Lnb = {
  // *해당 파일을 모듈화시켜 전역으로 사용되도록
  namespaced: true,
  state: {
    lnbList: [],
  },
  mutations: {
    mutateLnbData(state, lnb) {
      const excludedList = ['receivingOrder', 'shippingOrder']
      const lnbList = lnb ? lnb : localStorage.getItem('lnbData')
      // lnbList내에 excludedList가 존재하면
      // lnbList에서 해당 lnb네임 삭제

      console.log(state.lnbList)
      if (![lnbList].includes(excludedList)) {
        console.log(lnbList)
      }
    },
  },
  actions: {
    setLnbData({ commit }, lnb) {
      commit('mutateLnbData', lnb)
    },
  },
  getters: {
    lnbList: state => state.lnbList,
  },
}

export default Lnb
