<template>
  <div class="Movie">
    <!-- 프로필 이동 테스트 -->
    <router-link :to="{ name: 'ProfileView',
        params: {username: getCurrentUser}}">
    MyProfile
    </router-link> 
    <!-- {{ getCurrentUser }} -->
    <h1>무비 페이지</h1>
    <MovieList/>    

  </div>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList'

export default {
  name: 'MovieView',
  components: {
    MovieList,
  },
  created() {
    this.getMovies()
  },

  methods: {
    getMovies() {
      this.$store.dispatch('getMovies')
    },
    // goProfile() {
    //   const user_id = this.$store.state.token
    // }
  },
  computed: {
    getCurrentUser() {
      console.log(this.$store.state.current_username)
      // console.log(this.$store.state.token)
      return this.$store.state.current_username
    }
  }
}
</script>
