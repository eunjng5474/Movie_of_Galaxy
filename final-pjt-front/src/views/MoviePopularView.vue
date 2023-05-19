<template>
  <div class="movie-popular-list-container">
    <h1> 인기순 영화 추천</h1>
    <div class= "movie-card-container border border-black p-5">
      <MovieListItem v-for="movie in top30_popularity" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'

export default {
  name: 'MoviePopularView',
  components: {
    MovieListItem,
  },
  computed: {
    top30_popularity() {
      console.log(this.$store.getters.top30_popularity)
      return this.$store.getters.top30_popularity
    }
  }
}
</script>

<style>
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