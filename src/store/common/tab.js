const Tab = {
  namespaced: true,
  state: {
    tabList: new Map(),
  },

  actions: {},
  mutations: {
    mutateTabList(state, tabName) {
      console.error(tabName)
      // state.tabList.set('label', tabName)
      state.tabList.set(tabName, tabName)
      // state.tabList.push(tabName)
      console.log(state.tabList)
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
