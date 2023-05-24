<template>
  <div class="movie-popular-list-container">
    <video class="popbackground-video" autoplay loop muted preload="auto" poster="@/assets/vote_tem.png">
      <source src="@/assets/voteback.mp4" type="video/mp4">
    </video>
    <NavBar/>
    <div>
      <h1 style="color:white;"> 평점순 영화 추천</h1>
      <br>
      <h2 style="color:white;"> 평점순 TOP30</h2>
      <br>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true" style="width: 70%; margin: 0 auto">
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

</style>