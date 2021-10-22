export const moduleB = {
  state: {
    name: 'moduleB'
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