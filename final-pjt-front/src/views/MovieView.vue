<template>
  <div class="Movie">
    <!-- 프로필 이동 테스트 -->
    <router-link :to="{ name: 'ProfileView',
        params: {username: getCurrentUser}}">
    MyProfile
    </router-link> 
    <NavVar/>
    <!-- {{ getCurrentUser }} -->
    <h1>무비 페이지</h1>
    <MovieList/>    
<!-- 
    <div class="Movie">
      <h1>무비 페이지</h1>
      <MovieList/>    
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList'
import NavVar from '@/components/Common/NavVar'


export default {
  name: 'MovieView',
  components: {
    MovieList,
    NavVar,
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
      return this.$store.state.currentUser.username
    }
  }
}
</script>
