<template>
  <div class="movie-list-container">
    
    <div class= "movie-card-container border border-6 border-white rounded-5 p-5">
      
        <MovieListItem
        v-for='movie in top30_popularity' :key='movie.id' :movie='movie'/>
      

      
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  computed: {
    // 사실 100개
    top30_popularity() {
      // console.log(this.$store.getters.top30_popularity)
      return this.$store.getters.top30_popularity
    }
    
  }
  
}
</script>


<style scoped>


.movie-card-container{

  width: 80%;
  margin: 0 auto;
}

.movie-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


</style>
