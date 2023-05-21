<template>
  <div class="movie-popular-list-container">
    <NavBar/>
    <div>
      <h1> 평점순 영화 추천</h1>
      <!-- <b-carousel id="carousel-1" v-model="slide" :interval="2000"
      controls indicators background="black" img-width="1024" img-height="480"
      style="text-shadow: 1px 1px 2px #333; 
      width: 60%; height: 150%; margin: 0 auto; z-index: auto;"
      @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <TestMovieListItem v-for="(movie, idx) in top30_vote_average" :key="idx" :movie="movie"/>
      </b-carousel> -->
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in top30_vote_average" :index="idx" :key="idx">
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
      <MovieListItem v-for="movie in top30_vote_average" :key="movie.id" :movie="movie"/>
    </div> -->
  </div>
</template>

<script>
// import MovieListItem from '@/components/MovieListItem'
import NavBar from '@/components/Common/NavBar'
// import TestMovieListItem from '../components/TestMovieListItem.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'MovieVoteView',
  components: {
    // TestMovieListItem,
    NavBar,
    // MovieListItem,
    Carousel3d,
    Slide,
  },
  // data() {
  //   return {
  //     slide: 0,
  //     sliding: null,
  //   }
  // },
  computed: {
    top30_vote_average() {
      // console.log(this.$store.getters.top30_vote_average)
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