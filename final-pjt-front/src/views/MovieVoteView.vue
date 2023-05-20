<template>
  <div class="movie-popular-list-container">
    <NavBar/>
    <h1> 평점순 영화 추천</h1>
    <div class= "movie-card-container border border-black p-5">
      <MovieListItem v-for="movie in top30_vote_average" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'
import NavBar from '@/components/Common/NavBar'

export default {
  name: 'MovieVoteView',
  components: {
    MovieListItem,
    NavBar,
  },
  computed: {
    top30_vote_average() {
      console.log(this.$store.getters.top30_vote_average)
      return this.$store.getters.top30_vote_average
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