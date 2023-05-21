<template>
  <div class="container">
    <NavBar/>
    <!-- <h1>무비상세페이지</h1> -->
    <!-- <br> -->
    <!-- {{ detailOneMovie}} -->
    <div class="row align-items-center" style="width: 80%; margin: 0 auto; margin-bottom: 50px;">
      <div class="col-6">
        <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${detailOneMovie?.poster_path}`" alt="">
      </div>
      <div class="col-6">
        <div class="title">
        <h1><b>{{detailOneMovie?.title}}</b></h1>
        </div>
        <br>
        <br>
        <h4 style="text-align: left;"><b>개봉일 : </b> {{ detailOneMovie?.release_date}}</h4>
        <div class="vote and like" style="display: flex">
          <h4 style="text-align: left; margin-right: 20px;"><b>평점 </b>&#11088; {{ detailOneMovie?.vote_average}}</h4>   
          <h4 style="margin-left: 20px;" @click="likeMovie">{{heart}}</h4>
        </div>
        <br>
        <h3 style="text-align: left;"><b>줄거리</b></h3>
        <h5 style="text-align: left;">{{detailOneMovie?.overview}}</h5>
        <br>
        <!-- <button :class="like_btn" @click="likeMovie">좋아요</button> -->
        <!-- {{ detailOneMovie?.like_users}} -->
        <!-- {{ detailOneMovie?.vote_average }} -->
      </div>
        <!-- 임시 - 좋아요 한 유저 -->
    </div>
    <div class="movie-iframe" style="mt-20px">
      <!-- 유튜브 예고편 보여줄 곳 -->
      <iframe :src="`https://www.youtube.com/embed/${detailOneMovie?.key}?autoplay=1&mute=1`" frameborder="0" style="width: 80%; aspect-ratio: 16/9;"></iframe>
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
      // like_btn: 'btn btn-outline-primary',
      heart: '🤍',
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
        this.heart = '🩷'
      } else {
        this.heart = '🤍'
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

<style scoped>
/* .movie-detail-container {
  width: 90%
  justify-content: center;
} */

.movie-poster-and-info {
  display: flex;
  justify-content: center;
}
</style>
