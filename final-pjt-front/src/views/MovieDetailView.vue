<template>
  <div>
    <h1>무비상세페이지</h1>

    <img :src="`https://image.tmdb.org/t/p/original/${detailOneMovie?.poster_path}`" alt="" style="width:300px; height:350px">
    <h3>{{detailOneMovie?.title}}</h3>
    <p>{{detailOneMovie?.overview}}</p>
  </div>
</template>

<script>
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'MovieDetail',

  created() {
    this.getMovieDetail()
  },
  
  computed: {
    detailOneMovie() {
      return this.$store.getters.detailmovie
    }
  },

  methods: {
    getMovieDetail() {
      const movieId = this.$route.params.id
      this.$store.dispatch('getMovieDetail', movieId)
      // console.log(movieId)

    }
  }
}


</script>

<style>

</style>