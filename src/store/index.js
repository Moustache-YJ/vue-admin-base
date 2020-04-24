import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[persistedState()],
  modules: {
    login
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
