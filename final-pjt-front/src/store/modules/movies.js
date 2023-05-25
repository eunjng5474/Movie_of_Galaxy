// import Vue from 'vue'
// import Vuex from 'vuex'

import router from '@/router'
import axios from 'axios'
// import router from '@/router'
// import createPersistedState from 'vuex-persistedstate'


const API_URL = 'http://127.0.0.1:8000'

// Vue.use(Vuex)

// export default ({
const moviesModule = {

  state: {
    all_movies: [],
    random30: [],
    top30_popularity: [],
    top30_vote_average: [],
    detailmovie: null,
    // 좋아요 id만 들어감!!!
    movieLike1: [],
    // 검색
    keyword: '',
    searchMovies: [],
    // ///// 좋아요 토글 테스트
    // userMovieLst: [],
    // // 유저가 좋아요 한 영화 아이디들
    // userLikeMovieId: [],
  },
  getters: {
    all_movies : (state) => state.all_movies,
    random30 : (state) => state.random30,
    top30_popularity : (state) => state.top30_popularity,
    top30_vote_average : (state) => state.top30_vote_average,
    detailmovie : (state) => state.detailmovie,
    movieLike : (state) => state.movieLike1,
    // 검색
    keyword: (state) => state.keyword,
    searchMovies: (state) => state.searchMovies,
  //   isLikeMovie: (getters) => {
  //     return getters.userInfo.like_movies.include(getters.detailmovie.id)
  //     // return getters.userLikeMovieId.include(getters.detailmovie.id)
  // }
    /////// 좋아요 토글을 위한 테스트
    // userMovieLst: (state) => state.userMovieLst,
    // userLikeMovieId: (state) => state.userLikeMovieId,
    // isLikeMovie: (state, getters) => {
    //   return getters.detailmovie.id in state.userMovieLst
    //   // return getters.getCurrentUser in getters.detailmovie.like_users
    // }
    // isLikeMovie: (getters) => {
    //   return getters.userLikeMovieId.include(getters.detailmovie.id)
    //   // return getters.detailmovie.id in getters.likes_movie_id
    // }
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.all_movies = payload.all_movies
      state.random30 = payload.random30
      state.top30_popularity = payload.top30_popularity
      state.top30_vote_average = payload.top30_vote_average
      // console.log('current 찍히나')
      // console.log(state.currentUser)
      // console.log(state.top30_popularity)
    },
    GET_MOVIE_DETAIL(state, detailmovie){
      state.detailmovie = detailmovie
      // console.log(state.detailmovie)
    },
    // 이거 밑에 get_like_lst 해결되면 지워도 될 듯
    LIKE_MOVIE(state, like_data) {
      // console.log(like_data.id)
      // state.movieLike = like_data
      // if(state.movieLike1.include(like_data.id)) {
      //   state.movi
      // }
      // state.movieLike1 = 
      /////// 여기서 냅다 push 하는게 아니라 if문으로 
      if(state.movieLike1.includes(like_data.id)) {
        for(let i=0; i<state.movieLike1.length; i++) {
          if(state.movieLike1[i] === like_data.id) {
            state.movieLike1.splice(i, 1)
          }
        }
      } else {
        state.movieLike1.push(like_data.id)
      }
      // state.movieLike1.push(like_data.id)
      // state.userMovieLst.push(like_data.id)
      
      // state.userMovieLst.push(like_data.id)
      // state.userLikeMovieId.push(like_data.id) 
      // console.log(state.userMovieLst)
    },
    // 좋아요
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword
    },
    SET_SEARCHMOVIES(state, searchmovies) {
      state.searchMovies = searchmovies
    },
    GET_LIKEMOVIES(state, movielist) {
      state.movieLike1 = []
      for(let i=0; i<movielist.length; i++) {
        state.movieLike1.push(movielist[i].id)
      }
    },
    DELETE_LIKES(state) {
      state.movieLike1 = []
    }
    // 좋아요 토글 테스트
    // GET_LIKE_LST(state, data) {
    //   console.log('좋아요 리스트')
    //   console.log(data)
    //   if(data.like_users) {
    //     state.userMovieLst.push(data.id)
    //   } else {
    //     for (let i=0; i<state.userMovieLst.length; i++) {
    //       if (state.userMovieLst[i] == data.id) {
    //         state.userMovieLst.splice(i, 1)
    //       }
    //     }
    //   }
    //   console.log(state.userMovieLst)
    // }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/`
      })
      .then((res) => {
        // console.log(res.data)
        // console.log(21313123)
        context.commit('GET_MOVIES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getMovieDetail(context, movieId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/${ movieId }`,
      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_MOVIE_DETAIL', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    likeMovie(context, movieId) {
      // console.log(this.getters.token)
      axios({
        method: 'post',
        url: `${API_URL}/api/v1/movies/${ movieId }/likes/`,
        headers: {Authorization: `Token ${this.getters.token}`},
      })
      .then((res) => {
        // console.log(res.data)
        context.commit('LIKE_MOVIE', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 검색
    searchResult(context, keyword) {
      if (keyword != '') {
        context.commit('SET_KEYWORD', keyword)
        router.push({
          name: 'MovieSearchView',
          params: {
            keyword:this.getters.keyword,
          }
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
        alert('검색어를 입력해주세요')
      }
    },
    searchMovies(context, searchmovies) {
      context.commit('SET_SEARCHMOVIES', searchmovies)
    },
    getLikeMovies(context, username) {
      axios({
        method: 'get',
        url: `${API_URL}/accounts/profile/${username}`,
      })
      .then((res) => {
        context.commit('GET_LIKEMOVIES', res.data.like_movies)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    deleteLikes(context) {
      context.commit('DELETE_LIKES')
    }



    ///// 좋아요 토글 테스트
    // getUserMovieList(context, username) {
    //   // console.log(this.$store.getters.currentUser.username)
    //   axios({
    //     method: 'get',
    //     url: `${API_URL}/accounts/profile/${username}/`,
    //     // headers: {Authorization: `Token ${this.getters.token}`},
    //   })
    //   .then((res) => {
    //     // console.log('이건가')
    //     // console.log(res.data.like_movies)
    //     // context.commit('GET_LIKE_LST', res.data.like_movies)

    //     // this.nickname = res.data.nickname
    //     // this.birth = res.data.birth
    //     this.userMovieLst = res.data.like_movies
    //     for(let i=0; i<this.userMovieLst.length; i++) {
    //       this.userLikeMovieId.push(this.userMovieLst[i].id)
    //       console.log(this.userMovieLst[i])
    //     }
    //     // this.userLikeMovieId =
    //     // this.birth_year = res.data.birth.slice(0, 4)
    //     // this.birth_month = res.data.birth.slice(5, 7)
    //     // this.birth_day = res.data.birth.slice(8, 11)
    //     console.log(this.userMovieLst)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    // }
  },
}

export default moviesModule