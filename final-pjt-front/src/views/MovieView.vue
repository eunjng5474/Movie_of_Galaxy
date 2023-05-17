<template>
  <div class="Movie">
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
    }
  }
}
</script>
