<template>
  <div class="M-datail-page">
    <NavBar/>
    <div class="container p-5 border border-white rounded-5 border-4">
      <div class="d-flex row align-items-center" style="width: 80%; margin: 0 auto; margin-bottom: 50px;">
        <div class="poster-img col-md-6">
          <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${detailOneMovie?.poster_path}`" alt="">
        </div>
        <!-- style="background-color: rgba(255, 255, 255, 0.1); border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);" -->
        <div class="movie-all-info col-md-6 ">
          <div class="title" style="margin-bottom: 70px;">  
            <h1><b>{{detailOneMovie?.title}}</b></h1>
          </div>
          <div class="movie-info-1 d-flex align-items-center" >
            <div class="date and vote">
              <h3 style="text-align: left; margin-bottom: 30px;"><b>개봉일 : </b> {{ detailOneMovie?.release_date}}</h3>
              <h3 style="text-align: left;" v-if="detailOneMovie?.vote_average >= 7.3"><b>평점 : </b>&#127765; {{ detailOneMovie?.vote_average}}</h3>
              <h3 style="text-align: left;" v-else-if="detailOneMovie?.vote_average > 5.2"><b>평점 : </b>&#127763; {{ detailOneMovie?.vote_average}}</h3>
              <h3 style="text-align: left;" v-else><b>평점 : </b>&#127762; {{ detailOneMovie?.vote_average}}</h3>
            </div>
            <div class="like-movie" style="text-align: right;">
              <img style="margin-left: 50px; width: 50px; height: 50px;" class="align-items-center"
              v-if="getLike.includes(detailOneMovie.id)" @click="likeMovie" src="@/assets/heart.png">
              <img class="align-items-center" style="margin-left: 50px; width: 50px; height: 50px;" v-else @click="likeMovie" src="@/assets/like.png">
              <!-- <h1 style="margin-left: 50px;" v-if="getLike.includes(detailOneMovie.id)" @click="likeMovie">&#128078;</h1>
              <h1 style="margin-left: 50px;" v-else @click="likeMovie">&#128077;</h1> -->
            </div>
          </div>
          <div style="margin-top: 40px;">
            <h3 class="fw-bolder" style="text-align: left; margin-bottom: 20px;">줄거리</h3>
            <h5 class="lh-base fw-semibold" style="text-align: left;">{{detailOneMovie?.overview}}</h5>
          </div>
          <br>
        </div>
      </div>
      <div class="movie-iframe" style="mt-20px">
        <!-- 유튜브 예고편 보여줄 곳 -->
        <iframe :src="`https://www.youtube.com/embed/${detailOneMovie?.key}?autoplay=1&mute=1`" frameborder="0" style="width: 80%; aspect-ratio: 16/9;"></iframe>
      </div>
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
      // like: '🖤',
      like_toggle: false
    }
  },
  created() {
    this.getMovieDetail()
    this.getInfo()
    this.getLike
    // console.log(this.getCurrentUser)
  },
  
  computed: {
    detailOneMovie() {
      // console.log(this.$route.params)
      return this.$store.getters.detailmovie
    },
    getCurrentUser() {
      return this.$store.getters.currentUser
    },
    getLike() {
      return this.$store.getters.movieLike
    },
    getUserInfo() {
      return this.$store.getters.userInfo
    },
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
    },
    getInfo() {
      const username = this.getCurrentUser.username
      this.$store.dispatch('getUserInfo', username)
    }
  }
}


</script>

<style scoped>
/* .movie-detail-container {
  width: 90%
  justify-content: center;
} */

.M-datail-page{
  background-image: url(@/assets/movielist5.png);
  /* background-size: cover; */
  background-position: center;
}

.container {
  color:white;
  background-color: rgba(0, 0, 0, 0.3);
}


.movie-poster-and-info {
  display: flex;
  justify-content: center;
}

.movie-all-info {
  height: 70vh;
  /* background-color: rgba(255, 255, 255, 0.1); border-radius: 5px; */
}

</style>
