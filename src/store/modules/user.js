export default {
    namespaced:true,
  state: {
    count1: 100,
    timer: null
  },
  getters: {
    getAddCount1(state) {
      return state.count1 + 10
    }
  },
  mutations: {
    increment1(state) {
      state.count1++
    }
  },
  actions: {
    actionsincrement1({
      commit,state
    }) {
        setTimeout(() => {
            clearInterval(state.timer)
            state.timer = setInterval(() => {
              commit('increment1')
          }, 1000);
      }, 2000);
    }
  },
}
