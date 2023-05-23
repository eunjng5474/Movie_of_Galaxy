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
    // current_username: null,
    // current_usernickname: null,
    // current_userbirth: null,
    currentUser: {},
    
    //// 좋아요 토글 테스트 및 프로필 요청 여기서 했었는데 일단 초기화
    // user_movie_list: [],
    // likes_movie_id: [],
    // nickname: '',
    // birth: '',
    // birth_year: '',
    // birth_month: '',
    // birth_day: '',
    // userid: null,
    // currentUserLike: {},

    //// 유저 정보 담기
    userInfo: {},
    userBirthYear: '',
    userBirthMonth: '',
    userBirthDay: '',
    userStar: '',
  },
  getters: {
    // currentUserName(state) {
    //   return state.currentUser["username"]
    // }
    currentUser(state) {
      return state.currentUser
    },
    isLogin(state) {
        return state.token ? true : false
    },
    token: (state) => state.token,
    userInfo: (state) => state.userInfo,
    userBirthYear: (state) => state.userBirthYear,
    userBirthMonth: (state) => state.userBirthMonth,
    userBirthDay: (state) => state.userBirthDay,

    userStar: (state) => state.userStar,
    ///// 좋아요 토글 
    // nickname: (state) => state.nickname,
    // birth: (state) => state.birth,
    // user_movie_list: (state) => state.user_movie_list,
    // likes_movie_id: (state) => state.likes_movie_id,
    },
    mutations: {
      SAVE_TOKEN(state, token) {
        state.token = token
        // state.username = username
        // console.log(state.username)
        // console.log(token)
        // router.push({ name: 'MovieView' })  
        // store/index.js에서 $router 접근 불가 -> import 해야 함 
      },
      // 로그인할 때 사용
      SAVE_USER(state, userinfo) {
        state.currentUser = userinfo

        state.movieLike1 = userinfo.like_movies
        // console.log(userinfo)
        // console.log(state.currentUser)
        router.push({ name: 'MovieView'})
      },
      // 프로필 요청 여기서 했었는데 일단 다시 초기화
      GET_USER_INFO(state, data) {
        // state.currentUserLike = data.like_movies
        // console.log(state.currentUserLike)
        
        state.movieLike1 = data.like_movies

        state.userInfo = data
        state.userBirthYear = data.birth.slice(0, 4)
        state.userBirthMonth = data.birth.slice(5, 7)
        state.userBirthDay = data.birth.slice(8, 11)

        const birth_month = data.birth.slice(5, 7)
        const birth_day = data.birth.slice(8, 11)
        // console.log(birth_month)

        // ===가 아닌 ==으로 쓰면 형변환 되고, 숫자 비교 가능한 듯
        if ((birth_month == 1 && birth_day >= 20) || (birth_month == 2 && birth_day <= 18)) {
          state.userStar = '물병자리'
        } else if ((birth_month == 2 && birth_day >= 19) || (birth_month == 3 && birth_day <= 20)) {
          state.userStar = '물고기자리'
        } else if ((birth_month == 3 && birth_day >= 21) || (birth_month == 4 && birth_day <= 19)) {
          state.userStar = '양자리'
        } else if ((birth_month == 4 && birth_day >= 20) || (birth_month == 5 && birth_day <= 20)) {
          state.userStar = '황소자리'
        } else if ((birth_month == 5 && birth_day >= 21) || (birth_month == 6 && birth_day <= 21)) {
          state.userStar = '쌍둥이자리'
        } else if ((birth_month == 6 && birth_day >= 22) || (birth_month == 7 && birth_day <= 22)) {
          state.userStar = '게자리'
        } else if ((birth_month == 7 && birth_day >= 23) || (birth_month == 8 && birth_day <= 22)) {
          state.userStar = '사자자리'
        } else if ((birth_month == 8 && birth_day >= 23) || (birth_month == 9 && birth_day <= 23)) {
          state.userStar = '처녀자리'
        } else if ((birth_month == 9 && birth_day >= 24) || (birth_month == 10 && birth_day <= 22)) {
          state.userStar = '천칭자리'
        } else if ((birth_month == 10 && birth_day >= 23) || (birth_month ==11 && birth_day <= 22)) {
          state.userStar = '전갈자리'
        } else if ((birth_month == 11 && birth_day >= 23) || (birth_month == 12 && birth_day <= 24)) {
          state.userStar = '사수자리'
        } else if ((birth_month == 12 && birth_day >= 25) || (birth_month == 1 && birth_day <= 19)) {
          state.userStar = '염소자리'
        }
        // console.log(state.userStar)


        // state.nickname = data.nickname
        // state.birth = data.birth
        // state.user_movie_list = data.like_movies
        // state.likes_movie_id = []
        // for(let i=0; i<data.like_movies.length; i++) {
        //   console.log(data.like_movies[i].id)
        //   state.likes_movie_id.push(state.user_movie_list[i].id)
        // }
      }
      // SIGNUP_USER() {
      //   router.push({name: 'LogInView'})
      // }
    },
    actions: {
      signUp(context, payload) {
        // const username = payload.username
        // const nickname = payload.nickname
        // const birth = payload.birth
        // const password1 = payload.password1
        // const password2 = payload.password2
        
        axios({
          method: 'post',
          // 커스텀 시도 -> rest auth 할거면 url 수정해야 함!!!!!!!!!!!!!!!!!!
          url: `${API_URL}/account/signup/`,  // account로 보내!!!!!!!
          data: payload,
          // data: {
          //   username, password1, password2, nickname, birth
          //   // key === value면 생략
          // }
        })
        .then(() => {
          router.push({name: 'LogInView'})
          // context.commit('SIGNUP_USER')
          // console.log(res)
          // this.state.current_usernickname = payload.nickname
          // this.state.current_username = username
          // console.log(this.state.current_username)
          // console.log(this.state.current_usernickname)
          
          //// string -> object로 변환
          // 제발되라
          // const token = res.data.key
          // axios.defaults.headers.common['Authorization'] = `Token ${token}`

          // const userinfo = JSON.parse(res.config.data)
          // console.log(typeof(test))
          // console.log(res.data.key)
          // context.commit('SAVE_TOKEN', token)
          // context.commit('SIGNUP_SAVE_USER', userinfo)
        })
        .catch((err) => {
          console.log(err)
        })
      },
      getUserInfo(context, username) {
        // console.log(username)
        // console.log(this.$route.params.username)
        axios({
          method: 'get',
          // url: `${API_URL}/accounts/profile/${this.$route.params.username}/`,
          url: `${API_URL}/accounts/profile/${username}`,
          // headers: {Authorization: `Token ${this.getters.token}`},
        })
        .then((res) => {
          context.commit('GET_USER_INFO', res.data)
          // console.log(res.data)
          // this.nickname = res.data.nickname
          // this.birth = res.data.birth
          // this.user_movie_list = res.data.like_movies

          // this.birth_year = res.data.birth.slice(0, 4)
          // this.birth_month = res.data.birth.slice(5, 7)
          // this.birth_day = res.data.birth.slice(8, 11)

          ///// 좋아요 토글 테스트 할 때 썼던 거
          // for(let i=0; i<this.user_movie_list.length; i++) {
          // // userLikeMovieId.push(userMovieLst[i])
          // // console.log(this.user_movie_list[i].id)
          // this.likes_movie_id.push(this.user_movie_list[i].id)
        // }
        })
        .catch((err) => {
          console.log(err)
        })

      // }
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
          // console.log(res)
          const userinfo = JSON.parse(res.config.data)
          // this.state.current_username = username
          // console.log('login')
          // console.log(res)
          console.log(userinfo.username)
          // this.getUserInfo(userinfo.username)

          context.commit('SAVE_TOKEN', res.data.key)
          context.commit('SAVE_USER', userinfo)

          
          // router.push({ name: 'MovieView'})
        })
        .catch((err) => {
          console.log(err)
        })
      },
      logout(context) {
        axios({
          method: 'post',
          url: `${API_URL}/account/logout/`,
          headers: {Authorization: `Token ${this.getters.token}`},
        })
        .then(() => {
          // this.state.current_username = username
          context.commit('SAVE_TOKEN', '')
          localStorage.removeItem('vuex')
          alert('로그아웃 되었습니다.')
          // console.log(this.state.token)
          router.push({ name: 'LogInView'})
        })
        .catch((err) => {
          console.log(err)
        })
      },


  }
}
export default accountsModule