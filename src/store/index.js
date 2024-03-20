import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './modules/user'
const getDefaultState = () => {
  return {
    // 初始状态
  }
}
export default new Vuex.Store({
  namespaced:true,
  state: {
    count: 0
  },
  getters: {
    getAddCount(state) {
        return state.count+10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    actionsincrement ({commit}) {
        setTimeout(() => {
            commit('increment')
        }, 2000);
      }
  },
  modules: {
    user
  }
})