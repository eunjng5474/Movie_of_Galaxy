<template>
  <div>
    <NavBar/>
    <h1>Profile</h1>
    <div class="user-information">
      <h4>닉네임 : <b>{{ nickname }}</b></h4>
      <h5>생년월일 : <b>{{ birth_year}}년 {{ birth_month }}월 {{ birth_day}}일</b></h5>
    </div>
    <div class="like-movies">
      <h4>좋아요 누른 영화</h4>
      <br>
       <!-- v-for="like_movie in user_movie_list" :key="like_movie.id" -->
      <div>
        <!-- {{ like_movie.title }} -->
      <carousel-3d height="480" border="5" :autoplay="true" :count="user_movie_list.length" :controls-visible="true"
      style="width: 70%; margin: 0 auto;">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in user_movie_list" :index="idx" :key="idx">
          <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
            <router-link :to="{name: 'MovieDetailView',
              params: {id: movie.id}}">
            <img :data-index="index" 
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0)}"
             :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" >
            </router-link>
          </template>
        </slide>
      </carousel-3d>
    </div>
    <!-- <p><b>아이디 : {{ getCurrentUser.username }}</b></p>
    <p>닉네임 : {{ getCurrentUser.nickname }}</p>
    <p>생년월일 : {{ getCurrentUser.birth }}</p> -->
    </div>
    <!-- {{ user_movie_list}} -->
    <!-- {{getLike}} -->
    <!-- {{ getCurrentUser}} -->
    <!-- 좋아요 한 무비 아이디 -->
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'ProfileView',
  data() {
    return {
      user_movie_list: [],
      nickname: '',
      birth: '',
      birth_year: '',
      birth_month: '',
      birth_day: '',
    } 
  },
  components: {
    NavBar,
    Carousel3d,
    Slide,
  },
  created() {
    this.getUserMovieList()
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.currentUser
    },
    // 임시 - 좋아요 확인
    getLike() {
      return this.$store.getters.movieLike
    },

    // get

    // getCurrentUserName() {
    //   console.log(this.$store.state.current_username)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_username
    // },
    // getCurrentUserNickname() {
    //   console.log(this.$store.state.current_usernickname)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_usernickname
    // }
  },
    methods: {
      getUserMovieList() {
        console.log(this.$route.params.username)
        axios({
          method: 'get',
          url: `${API_URL}/accounts/profile/${this.$route.params.username}/`,
          // headers: {Authorization: `Token ${this.getters.token}`},
        })
        .then((res) => {
          // console.log(res.data)
          this.nickname = res.data.nickname
          this.birth = res.data.birth
          this.user_movie_list = res.data.like_movies

          this.birth_year = res.data.birth.slice(0, 4)
          this.birth_month = res.data.birth.slice(5, 7)
          this.birth_day = res.data.birth.slice(8, 11)
          // console.log(res.data.birth)
        })
        .catch((err) => {
          console.log(err)
        })

      }
    }
}
</script>

<style>
.user-information {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>