<template>
  <div>
    <NavVar/>
    <div class="Movie">
      <h1>무비 페이지</h1>
      <MovieList/>    
    </div>
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
    }
  }
}
</script>
