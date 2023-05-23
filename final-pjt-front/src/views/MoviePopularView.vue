<template>
  <div class="movie-popular-list-container">
    <video class="popbackground-video" autoplay loop muted>
      <source src="@/assets/3.mp4" type="video/mp4">
    </video>
    <NavBar/>
      <h1 style="color:white;"> 인기순 TOP30</h1>
      <carousel-3d height="480" border="1" :autoplay="true" :count="30" :controls-visible="true" style="width: 70%; margin: 0 auto">
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
</template>

<script>
// import MovieListItem from '@/components/MovieListItem'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'MoviePopularView',
  components: {
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
.movie-popular-list-container {
  position: relative;
  overflow:hidden;
  margin: 0;
  padding: 0;
  /* background-color: black; */
  height:100vh;
}

.popbackground-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}

/* 버튼 색깔 바꾸기  */
.next[data-v-05517ad0], .prev[data-v-05517ad0] {
    width: 60px;
    position: absolute;
    z-index: 1010;
    font-size: 60px;
    height: 60px;
    line-height: 60px;
    color: white;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
    top: 0;
}
</style>