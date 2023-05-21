<template>
  <div>
    <NavBar/>
    <h1>Profile</h1>
    <p><b>아이디 : {{ getCurrentUser.username }}</b></p>
    <p>닉네임 : {{ getCurrentUser.nickname }}</p>
    <p>생년월일 : {{ getCurrentUser.birth }}</p>
    <div v-for="like_movie in user_movie_list" :key="like_movie.id">
      {{ like_movie.title }}
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

export default {
  name: 'ProfileView',
  data() {
    return {
      user_movie_list: [],
    } 
  },
  components: {
    NavBar
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
        // console.log(this.$store.getters.currentUser.username)
        axios({
          method: 'get',
          url: `${API_URL}/accounts/profile/${this.$store.getters.currentUser.username}/`,
          // headers: {Authorization: `Token ${this.getters.token}`},
        })
        .then((res) => {
          // console.log(res.data)
          this.user_movie_list = res.data.like_movies
        })
        .catch((err) => {
          console.log(err)
        })

      }
    }
}
</script>

<style>

</style>