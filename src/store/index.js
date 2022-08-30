import { createStore } from "vuex";

export default createStore({
  state: {
    lnbData: [],
  },
  mutations: {
    setLnbActive: (state, data) => {
      state.lnbData = data;
      // 클릭한 대메뉴의 active->true로 변경
    },
  },
  actions: {},
  getters: {
    lnbData(state) {
      return state.lnbData;
    },
  },
  modules: {},
});
