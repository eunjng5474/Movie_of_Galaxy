<template>
  <div class="Movie">
    <!-- 프로필 이동 테스트 -->
    <router-link :to="{ name: 'ProfileView',
        params: {username: getCurrentUser}}">
    MyProfile
    </router-link> 


    <!--  네브바 있는자리 -->
    <NavVar/>

    <!--  네브바밑으로 위에 gif 들어갈자리  -->

    <h1>무비 페이지</h1>  
    <!-- 이자리 나중에 알고리즘 정렬 추천순 뭐이런거 자리 -->
    
    <MovieList/>    

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
