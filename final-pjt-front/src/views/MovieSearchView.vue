<template>
<div class="movie-search">

  <div class="video-container" style="background-color:black;">
    <video autoplay loop muted class="allmovie-background-video" preload="auto" poster="@/assets/black.png" @loadeddata="videoLoaded = true">
      <source src="@/assets/movielist3.mp4" type="video/mp4" >
    </video>
  </div>

  <!-- 로딩중보여줄페이지 -->
  <div v-if="!videoLoaded" style="background-color:black; height:100vh">
      <img src="@/assets/loading.gif" class="loadImg">
  </div>


  <div v-else>
    <div class="nav-container">
      <NavBar/>
    </div>

  <div class = 'middle-background border-top border-gray border-7'>
    <!-- <h2 style="color: white;">"{{ this.$route.params.keyword }}" 검색 결과</h2> -->
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
            <button class="btn btn-outline-info" type="submit">Search</button>
          </form>
          </div>
        </div>
        </div>

        <div class="search-result-container border border-6 border-white rounded-5 p-5">
          <div v-if="searchMovies.length < 1" class="p-5">
            <h2 style="color: white;">"{{ this.$route.params.keyword }}"의 검색 결과가 없습니다.</h2>
          </div>
          <div v-else>
            <h2 style="color: white;">"{{ this.$route.params.keyword }}" 검색 결과</h2>
          <div class="movie-card-container">
            <MovieListItem v-for="movie in searchMovies" :key="movie.id" :movie='movie'/>
          </div>
          </div>
        </div>
      </div>
  </div>
  <!-- {{ searchMovies}} -->
</div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import MovieListItem from '@/components/MovieListItem'

export default { 
  name: 'MovieSearchView',
  data() {
    return {
      keyword: '',
      videoLoaded: false,
      isLoading: true,
    }
  },
  components: {
    NavBar,
    MovieListItem,
  },
  computed: {
    searchMovies() {
      const allmovies = this.$store.getters.all_movies
      const searchKeyword = this.$route.params.keyword
      return allmovies.filter((movie) => {
        return movie.title.includes(searchKeyword)
      })
      // return this.$store.getters.searchMovies
    }
  },
  methods: {
    onSearch() {
      this.$store.dispatch('searchResult', this.keyword)
    },
    // searchResult() {
    //   const keyword = this.$route.params.keyword 
    //   this.$store.dispatch('searchResult', keyword)
    // },
    // searchMovies() {
    //   const searchmovies = this.searchmovies
    // }
  },
  created() {
    // this.searchResult()
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
  z-index: 1; /* 네브바를 동영상 위로 겹치기 위해 z-index 값을 설정합니다 */
}

.middle-background{
  background-image: url(@/assets/movielist4.png);
  /* background-size: cover; */
  /* background-position: center; */
  /* height: 120%; */
  height: 100vh;
  overflow: auto;
}

.movie-card-container{
  /* justify-content: space-between;
  align-items: center; */
  width: 80%;
  margin: 0 auto;
}

.movie-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-link:hover::after {
  opacity: 1;
}

.search-result-container {
  width: 80%;
  margin: 0 auto;
}
</style>