<template>
  <div class="Movie">
    <!--  네브바 있는자리 -->
    <NavBar/>

    <!--  네브바밑으로 위에 gif 들어갈자리  -->

    <h1>Movies</h1>
    <br>
    <!-- 이자리 나중에 알고리즘 정렬 추천순 뭐이런거 자리 -->
    <div class="recommend">
      <router-link :to="{ name: 'MoviePopularView'}">
        <button class="btn btn-outline-primary">인기순</button>
      </router-link>
      <router-link :to="{ name: 'MovieVoteView'}">
        <button class="btn btn-outline-primary">평점순</button>
      </router-link>
      <router-link :to="{ name: 'MovieRandomView'}">
        <button class="btn btn-outline-primary">랜덤순</button>
      </router-link>
    </div>
    <br>
    <MovieList/>    
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList'
import NavBar from '@/components/Common/NavBar'


export default {
  name: 'MovieView',
  components: {
    MovieList,
    NavBar,
  },
  created() {
    this.getMovies()
  },

  methods: {
    getMovies() {
      this.$store.dispatch('getMovies')
    },
    // getUsername() {
    //   this.$store.dispatch('currentUserName')
    // }
    // goProfile() {
    //   const user_id = this.$store.state.token
    // }
  },
  computed: {
    // getUsername() {
    //   console.log(this.$store.getters.currentUserName)
    //   return this.$store.getters.currentUserName
    // }
    getCurrentUser() {
      // console.log(this.$store.state.currentUser)
      // console.log(typeof(this.$store.state.currentUser))
      // console.log(this.$store.state.token)
      return this.$store.getters.currentUser
    },
    isLogin() {
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style scoped>
.recommend .btn {
  margin: 0 30px 0
}
</style>