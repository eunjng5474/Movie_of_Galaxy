<template>
  <div>
    <NavBar/>
    <h1>무비상세페이지</h1>

    <img :src="`https://image.tmdb.org/t/p/original/${detailOneMovie?.poster_path}`" alt="" style="width:300px; height:350px">
    <h3>{{detailOneMovie?.title}}</h3>
    <p>{{detailOneMovie?.overview}}</p>
    <button @click="likeMovie">좋아요</button>
    <br>
    <!-- 임시 - 좋아요 한 유저 -->
    {{ detailOneMovie?.like_users}}
    {{ detailOneMovie?.vote_average }}
    <br>
    <!-- 유튜브 예고편 보여줄 곳 -->
    <iframe :src="`https://www.youtube.com/embed/${detailOneMovie?.key}?autoplay=1&mute=1`" frameborder="0" style="width: 500px; height: 300px"></iframe>
  </div>
</template>

<script>
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'
import NavBar from '@/components/Common/NavBar'

// const YOUTUBE_API = 'https://www.youtube.com/watch?v='

export default {
  name: 'MovieDetail',
  components: {
    NavBar
  },

  created() {
    this.getMovieDetail()
  },
  
  computed: {
    detailOneMovie() {
      // console.log(this.$route.params)
      return this.$store.getters.detailmovie
    }
  },

  methods: {
    getMovieDetail() {
      const movieId = this.$route.params.id
      this.$store.dispatch('getMovieDetail', movieId)
      // console.log(movieId)

    },
    likeMovie() {
      const movieId = this.$route.params.id
      this.$store.dispatch('likeMovie', movieId)
    },
    // getYoutube() {
    //   axios({
    //     method: 'get',
    //     url: `${YOUTUBE_API}${}`
    //   })
    // }
  }
}


</script>

<style>

</style>