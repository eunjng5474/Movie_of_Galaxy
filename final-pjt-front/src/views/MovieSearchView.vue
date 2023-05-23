<template>
<div>
  <NavBar/>
  <h1>"{{ this.$route.params.keyword }}" 검색 결과</h1>
  
  <div v-if="searchMovies.length < 1" style="margin-top: 80px;">
    <h3>검색 결과가 없습니다.</h3>
  </div>
  <div v-else class= "movie-card-container border border-4 border-white rounded-5 p-5">
    <MovieListItem v-for="movie in searchMovies" :key="movie.id" :movie='movie'/>
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
      // keyword
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

<style>

</style>