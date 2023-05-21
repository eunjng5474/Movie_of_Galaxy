<template>
  <div class="movie-popular-list-container">
    <NavBar/>
    <div>
      <h1> 인기순 영화 추천</h1>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in top30_popularity" :index="idx" :key="idx">
          <template slot-scope="{index, isCurrent, leftIndex, rightIndex}">
            <router-link :to="{name: 'MovieDetailView',
              params: {id: movie.id}}">
            <img :data-index="index" 
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0)}"
             :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" >
            </router-link>
          </template>
        </slide>
      </carousel-3d>
    </div>
    <!-- <div class= "movie-card-container border border-black p-5">
      <MovieListItem v-for="movie in top30_popularity" :key="movie.id" :movie="movie"/>
    </div> -->
  </div>
</template>

<script>
// import MovieListItem from '@/components/MovieListItem'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'MoviePopularView',
  components: {
    // MovieListItem,
    NavBar,
    Carousel3d,
    Slide
  },
  computed: {
    top30_popularity() {
      // console.log(this.$store.getters.top30_popularity)
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