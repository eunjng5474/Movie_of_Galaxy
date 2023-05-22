<template>
  <div class="Movie">
    <!--  네브바 있는자리 -->
    <!-- 네브바 및 네브바 살짝 밑 까지 보이게함 -->
    <div class="video-container">
      <video autoplay loop muted class="background-video">
        <source src="@/assets/movielist3.mp4" type="video/mp4">
      </video>
      <div class="nav-container">
        <NavBar/>
      </div>
    </div>

    <div class = 'middle-background border-top border-white border-4'>
      <br>
      <h1 style="color:white;">Movies</h1>
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

.video-container {
  position: relative;
  height: 300px; 
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.nav-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; /* 네브바를 동영상 위로 겹치기 위해 z-index 값을 설정합니다 */
}

.middle-background{
  background-image: url(@/assets/movielist4.png);
  /* background-size: cover; */
  background-position: center;
}

</style>