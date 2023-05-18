import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

import accounts from './modules/accounts'
import movies from './modules/movies'
import createPersistedState from 'vuex-persistedstate'


// const API_URL = 'http://127.0.0.1:8000'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],

  state: {
  },

  getters: {
  },

  mutations: {
    
  },
  actions: {

  },

  modules: {
    accounts,
    movies
  }
})
