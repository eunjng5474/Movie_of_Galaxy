<template>
<div class="movie-search">
  <div class="video-container">
    <video autoplay loop muted class="allmovie-background-video">
      <source src="@/assets/movielist3.mp4" type="video/mp4">
    </video>
    <div class="nav-container">
      <NavBar/>
    </div>
  </div>

  <div class = 'middle-background border-top border-white border-4'>
    <!-- <h2 style="color: white;">"{{ this.$route.params.keyword }}" 검색 결과</h2> -->
      <div class="recommend-and-search" style="width: 80%; margin: 0 auto;">
        <div class="d-flex justify-content-between" style="margin-top: 30px;">
          <div class="images">
          <router-link :to="{ name: 'MoviePopularView'}">
            <img class="recom-img" src="@/assets/popul.png" alt="" >
          </router-link>
          <router-link :to="{ name: 'MovieVoteView'}">
            <img class="recom-img" src="@/assets/average.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieRandomView'}">
            <img class="recom-img" src="@/assets/random.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieStarView'}">
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

        <div class= " border border-4 border-white rounded-5 p-5">
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
  height: 300px; 
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
  background-position: center;
  height: 100vh;
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

</style>