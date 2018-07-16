export default {
  namespaced: true,
  state: {
    result: ''
  },
  mutations: {
    setResult (state, res) {
      state.result = res
    },
    reset (state) {
      state.result = ''
    }
  },
  actions: {
    setResult ({ commit }, res) {
      commit('setResult', res)
    },
    reset ({ commit }) {
      commit('reset')
    }
  }
}
