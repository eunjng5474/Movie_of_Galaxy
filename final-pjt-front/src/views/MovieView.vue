<template>
  <div class="Movie">
    <!--  네브바 있는자리 -->
    <!-- 네브바 및 네브바 살짝 밑 까지 보이게함 -->
    <div class="video-container" style="background-color:black;">
      <video autoplay loop muted class="allmovie-background-video" preload="auto" poster="@/assets/black.png" @loadeddata="videoLoaded = true">
        <source src="@/assets/movielist3.mp4" type="video/mp4">
      </video>
    </div>

    <!-- 로딩될동안보여줄 페이지 -->
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">
      <img src="@/assets/loading.gif" class="loadImg">

    </div>
    

    <div v-else>
      <div class="nav-container">
        <NavBar/>
      </div>

    <div class = 'middle-background border-top border-gray border-7'>
      <!-- <br>
      <h1 style="color:white;">Movies</h1>
      <br> -->
      <!-- 이자리 나중에 알고리즘 정렬 추천순 뭐이런거 자리 -->
      <div class="recommend-and-search" style="width: 80%; margin: 0 auto;">
        <div class="d-flex justify-content-between" style="margin-top: 30px;">
          <div class="images">
          <router-link :to="{ name: 'MoviePopularView'}" class="image-link">
            <img class="recom-img" src="@/assets/popul.png" alt="" >
          </router-link>
          <router-link :to="{ name: 'MovieVoteView'}" class="image-link">
            <img class="recom-img" src="@/assets/average.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieRandomView'}" class="image-link">
            <img class="recom-img" src="@/assets/random.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieStarView'}" class="image-link">
            <img class="recom-img" src="@/assets/star.png" alt="" >
          </router-link>
          </div>
          <!-- 검색 -->
          <div class="search-bar row align-items-end" style="margin-bottom: 10px;">
          <form @submit.prevent="onSearch" class="d-flex">
            <input v-model="keyword" class="form-control me-2" type="search" placeholder="검색할 영화를 입력하세요" aria-label="Search"
            style="width: 230px">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          </div>
        </div>
        </div>
      <MovieList/>  
      </div>
    </div>
  </div>
  <!-- </div> -->
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
  data() {
    return {
      keyword: '',
      videoLoaded: false,
      isLoading: true,
      videoSrc:  require('@/assets/movielist3.mp4')
    }
  },
  mounted() {
    this.getMovies()
    this.getUserInformation()

  
  },

  methods: {
    getMovies() {
      this.$store.dispatch('getMovies')
    },
    onSearch() {
      this.$store.dispatch('searchResult', this.keyword)
    },
    getUserInformation() {
      const username = this.getCurrentUser.username
      this.$store.dispatch('getUserInfo', username)
    }
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
.recom-img {
  width:120px; 
  height:120px;
  /* margin: 0 300px 0 */
}

.video-container {
  position: relative;
  height: 150px; 
  overflow: hidden;
}

.allmovie-background-video {
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
  z-index: 1; /* 네브바를 동영상 위로 겹치기 위해 z-index 값을 설정*/
}

.middle-background{
  background-image: url(@/assets/movielist4.png);
  /* background-size: cover; */
  background-position: center;
}


/* 이미지위에 올렸을때 효과 */
.image-link {
  display: inline-block;
  position: relative;
}

.image-link::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s;
}

.image-link:hover::after {
  opacity: 1;
}

</style>