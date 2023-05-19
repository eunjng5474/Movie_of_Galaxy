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
  },
  getters: {
    all_movies : (state) => state.all_movies, 
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.all_movies = payload.all_movies
      state.random30 = payload.random30
      state.top30_popularitys = payload.top30_popularity
      state.top30_vote_average = payload.top30_vote_average
      // console.log(state.all_movies)
    },
    GET_MOVIE_DETAIL(state, detailmovie){
      state.detailmovie = detailmovie
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
    getMovieDetail(context,movieId) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/${ movieId }/`,
      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_MOVIE_DETAIL', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
}

export default moviesModule