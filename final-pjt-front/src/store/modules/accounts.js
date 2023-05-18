// import Vue from 'vue'
// import Vuex from 'vuex'

import axios from 'axios'
import router from '@/router'
// import createPersistedState from 'vuex-persistedstate'


const API_URL = 'http://127.0.0.1:8000'

// Vue.use(Vuex)

// export default ({
const accountsModule = {

  // plugins: [
  //   createPersistedState(),
  // ],
  state: {
    token: null,
    current_username: null,
    // currentUser: {},
    // userid: null,
  },
  getters: {
    // isLogin(state) {
      //   return state.token ? true : false
      // }
    },
    mutations: {
      SAVE_TOKEN(state, token) {
        state.token = token
        // state.username = username
        // console.log(state.username)
        // console.log(state.token)
        router.push({ name: 'MovieView' })  
        // store/index.js에서 $router 접근 불가 -> import 해야 함 
      }
    },
    actions: {
      signUp(context, payload) {
        const username = payload.username
        const password1 = payload.password1
        const password2 = payload.password2
        
        axios({
          method: 'post',
          url: `${API_URL}/account/signup/`,
          data: {
            username, password1, password2
            // key === value면 생략
          }
        })
        .then((res) => {
          console.log(1)
          // context.commit('SIGN_UP', res.data.key)
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      login(context, payload) {
        const username = payload.username
        const password = payload.password
        
        axios({
          method: 'post',
          url: `${API_URL}/account/login/`,
          data: {
            username, password
          }
        })
        .then((res) => {
          this.state.current_username = username
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
}

export default accountsModule