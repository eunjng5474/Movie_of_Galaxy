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
    userStarImgs: [],
    // userProfileImg: '',
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
    userStarImgs: (state) => state.userStarImgs,
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

        // state.movieLike1 = userinfo.like_movies
        // console.log(userinfo)
        // console.log(state.currentUser)
        // router.push({ name: 'MovieView'})
      },
      LOG_IN() {
        // for(let i=0; i<data.like_movies; i++) {
        //   state.movieLike1.push(data.like_movies[i].id)
        // }
        // console.log(this.getters.movieLike)
        router.push({ name: 'MovieView'})
      },
      LOG_OUT(state) {
        state.movieLike1 = []
        alert('로그아웃 되었습니다.')
        // console.log(state.movieLike1)
        // console.log(this.state.token)
        router.push({ name: 'LogInView'})
      },
      // 프로필 요청 여기서 했었는데 일단 다시 초기화
      GET_USER_INFO(state, data) {
        // state.currentUserLike = data.like_movies
        // console.log(state.currentUserLike)
        
        // for(let i=0; i<data.like_movies; i++) {
        //   state.movieLike1.push(data.like_movies[i].id)
        // }
        // state.movieLike1 = data.like_movies

        state.userStarImgs = []
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
          for(let i=1; i<12; i++) {
            state.userStarImgs.push(i)
          }
          // console.log(state.userStarImgs)
        } else if ((birth_month == 2 && birth_day >= 19) || (birth_month == 3 && birth_day <= 20)) {
          state.userStar = '물고기자리'
          for(let i=1; i<14; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 3 && birth_day >= 21) || (birth_month == 4 && birth_day <= 19)) {
          state.userStar = '양자리'
          for(let i=1; i<12; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 4 && birth_day >= 20) || (birth_month == 5 && birth_day <= 20)) {
          state.userStar = '황소자리'
          for(let i=1; i<19; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 5 && birth_day >= 21) || (birth_month == 6 && birth_day <= 21)) {
          state.userStar = '쌍둥이자리'
          for(let i=1; i<11; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 6 && birth_day >= 22) || (birth_month == 7 && birth_day <= 22)) {
          state.userStar = '게자리'
          for(let i=1; i<13; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 7 && birth_day >= 23) || (birth_month == 8 && birth_day <= 22)) {
          state.userStar = '사자자리'
          for(let i=1; i<15; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 8 && birth_day >= 23) || (birth_month == 9 && birth_day <= 23)) {
          state.userStar = '처녀자리'
          for(let i=1; i<11; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 9 && birth_day >= 24) || (birth_month == 10 && birth_day <= 22)) {
          state.userStar = '천칭자리'
          for(let i=1; i<10; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 10 && birth_day >= 23) || (birth_month ==11 && birth_day <= 22)) {
          state.userStar = '전갈자리'
          for(let i=1; i<12; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 11 && birth_day >= 23) || (birth_month == 12 && birth_day <= 24)) {
          state.userStar = '사수자리'
          for(let i=1; i<15; i++) {
            state.userStarImgs.push(i)
          }
        } else if ((birth_month == 12 && birth_day >= 25) || (birth_month == 1 && birth_day <= 19)) {
          state.userStar = '염소자리'
          for(let i=1; i<10; i++) {
            state.userStarImgs.push(i)
          }
        }
        // console.log(state.userStarImgs)


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
        })
        .catch((err) => {
          // console.log(payload)
          if (!payload.username) {
            alert('ID를 입력해주세요')            
          } else if(!payload.password1) {
            alert('Password를 입력해주세요')
          } else if(!payload.password2) {
            alert('Password confirmation을 입력해주세요')
          } else if(!payload.nickname) {
            alert('nickname을 입력해주세요')
          } else if(!payload.birth) {
            alert('birth를 입력해주세요')
          } else if(payload.password1!=payload.password2) {
            alert('Password 확인이 일치하지않습니다.')
          }
            else{
              alert('이미 사용중인 ID입니다.')
            }
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
          // console.log(userinfo.username)
          // this.getUserInfo(userinfo.username)

          context.commit('SAVE_TOKEN', res.data.key)
          context.commit('SAVE_USER', userinfo)
          context.commit('LOG_IN', userinfo)
          
          // router.push({ name: 'MovieView'})
        })
        .catch((err) => {
          alert('ID와 Password를 다시 확인해주세요')
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
          context.commit('LOG_OUT')
          localStorage.removeItem('vuex')
          // alert('로그아웃 되었습니다.')
          // // console.log(this.state.token)
          // router.push({ name: 'LogInView'})
        })
        .catch((err) => {
          console.log(err)
        })
      },


  }
}
export default accountsModule