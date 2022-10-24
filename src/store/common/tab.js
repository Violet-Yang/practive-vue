const Tab = {
  namespaced: true,
  state: {
    tabList: new Map(),
  },

  actions: {},
  mutations: {
    mutateTabList(state, tabName) {
      state.tabList.set(tabName, tabName)
    },
    deleteTab(state, tab) {
      if (!tab) {
        for (const tab of state.tabList) {
          state.tabList.delete(tab[0])
          return
        }
      }
      state.tabList.delete(tab)
    },
  },
  getters: {
    tabList: state =>
      Array.from(state.tabList, function (name) {
        return { key: name[0], value: name[1] }
      }),
    // tabList: state => state.tabList,
  },
}

export default Tab
