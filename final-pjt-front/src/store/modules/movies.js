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
    movies: [],
    detailmovie: null,
  },
  getters: {
  },
  mutations: {
    GET_MOVIES(state, movies) {
      this.state.movies = movies
    },
    GET_MOVIE_DETAIL(state, detailmovie){
      this.state.detailmovie = detailmovie
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/`
      })
      .then((res) => {
        // console.log(res, context)
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