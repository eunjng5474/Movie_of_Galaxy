// import Vue from 'vue'
// import Vuex from 'vuex'

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
    movieLike1: [],
  },
  getters: {
    all_movies : (state) => state.all_movies,
    random30 : (state) => state.random30,
    top30_popularity : (state) => state.top30_popularity,
    top30_vote_average : (state) => state.top30_vote_average,
    detailmovie : (state) => state.detailmovie,
    movieLike : (state) => state.movieLike1,
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.all_movies = payload.all_movies
      state.random30 = payload.random30
      state.top30_popularity = payload.top30_popularity
      state.top30_vote_average = payload.top30_vote_average
      // console.log(state.top30_popularity)
    },
    GET_MOVIE_DETAIL(state, detailmovie){
      state.detailmovie = detailmovie
      // console.log(state.detailmovie)
    },
    LIKE_MOVIE(state, like_data) {
      // console.log(like_data.id)
      // state.movieLike = like_data
      // if(state.movieLike1.include(like_data.id)) {
      //   state.movi
      // }
      state.movieLike1.push(like_data.id) 
    }
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
    }
  },
}

export default moviesModule