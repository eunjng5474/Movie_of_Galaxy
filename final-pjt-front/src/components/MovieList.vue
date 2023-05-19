<template>
  <div class="movie-list-container">
    <h1>무비리스트</h1>
    
    <!-- 영화만 나열하는 카드항목 -->
    <div class= "movie-card-container border border-black p-5">
      <!-- <div class = "row row-cols-1 row-cols-sm-3 row-cols-md-5 g-5"> -->
      <!-- <div class = "row row-cols-1 row-cols-md-5 g-5"> -->
        <MovieListItem
        v-for='movie in all_movies' :key='movie.id' :movie='movie'/>
      <!-- </div> -->

      
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
    all_movies() {
      // console.log(this.$store.getters.all_movies)
      return this.$store.getters.all_movies
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
  justify-content: space-between;
}


</style>
