<template>
  <div class="movie-detail-container">
    <NavBar/>
    <h1>무비상세페이지</h1>
    <div class="">
      <div class="justify-content-center" style="width: 500px">
      <img :src="`https://image.tmdb.org/t/p/original/${detailOneMovie?.poster_path}`" alt="" style="width:300px; height:350px">
      <h3>{{detailOneMovie?.title}}</h3>
        <p>{{detailOneMovie?.overview}}</p>
        <button :class="like_btn" @click="likeMovie">좋아요</button>
        <br>
        <!-- 임시 - 좋아요 한 유저 -->
        {{ detailOneMovie?.like_users}}
        {{ detailOneMovie?.vote_average }}
      <br>
      </div>
      <!-- 유튜브 예고편 보여줄 곳 -->
      <iframe :src="`https://www.youtube.com/embed/${detailOneMovie?.key}?autoplay=1&mute=1`" frameborder="0" style="width: 500px; height: 300px"></iframe>
    </div>

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
  data() {
    return {
      // click_btn: 'btn btn-primary',
      like_btn: 'btn btn-outline-primary',
      like_toggle: false
    }
  },
  created() {
    this.getMovieDetail()
  },
  
  computed: {
    detailOneMovie() {
      // console.log(this.$route.params)
      return this.$store.getters.detailmovie
    },
    getCurrentUser() {
      return this.$store.getters.currentUser
    }
  },

  methods: {
    getMovieDetail() {
      const movieId = this.$route.params.id
      this.$store.dispatch('getMovieDetail', movieId)
      // console.log(movieId)

    },
    likeMovie() {
      // 좋아요 누르면 새로고침 해야 유저 아이디 뜸
      // 지금은 필요없지만 추후 getmoviedetail 해야할지도
      // 좋아요 누르고 새로고침하면 버튼 색깔 다시 기본으로 돌아감 - this.like_toggle로 판단해서인 듯
      const movieId = this.$route.params.id
      this.$store.dispatch('likeMovie', movieId)
      this.like_toggle = !this.like_toggle
      if (this.like_toggle === true) {
        this.like_btn = 'btn btn-primary'
      } else {
        this.like_btn = 'btn btn-outline-primary'
      }
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