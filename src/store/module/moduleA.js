export const moduleA = {
  namespaced: true,
  state: {
    name: 'moduleA'
  },
  getters: {
    getName(state) {
      console.log('getter');
      return 'get' + state.name
    }
  },
  mutations: {
    addName(state, params) {
      console.log('mutations');
      state.name += 'mutations' + params
    }
  },
  actions: {
    addNameAction({commit}, params) {
      console.log('action');
      return new Promise((resole) => {
        setTimeout(() => {
          commit('addName', params)
          resole(true)
        }, 5000)
      })
    }
  }
}