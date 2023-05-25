<template>
  <div class="movie-popular-list-container">
    <video class="popbackground-video" autoplay loop muted preload="auto" poster="@/assets/vote_tem.png" @loadeddata="videoLoaded = true">
      <source src="@/assets/voteback.mp4" type="video/mp4">
    </video>
    
    <!-- 로딩 -->
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">
      <img src="@/assets/loading.gif" class="loadImg">

    </div>
    
    <div v-else>
    
    <NavBar/>
    <div>
      <h1 class="fw-bold" style="color:white; margin-bottom: 30px;"> 평점순 영화 추천</h1>
      <h4 style="color:white;">평점이 좋은 영화 TOP 30</h4>
      <div class="images" style="text-align: left; border-bottom: solid 1px; border-bottom-color:white; width: 70%; margin: 0 auto;">
        <div>
          <router-link :to="{ name: 'MoviePopularView'}" class="image-link">
            <img class="recom-img" src="@/assets/popul.png" alt="" >
          </router-link>
          <router-link :to="{ name: 'MovieVoteView'}" class="image-link">
            <img class="recom-img" src="@/assets/average.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieRandomView'}" class="image-link">
            <img class="recom-img" src="@/assets/random.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieStarView'}" class="image-link">
            <img class="recom-img" src="@/assets/star.png" alt="" >
          </router-link>
        </div>
      </div>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true" style="width: 70%; margin: 0 auto; margin-top: 60px;">
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
  data() {
    return {
      videoLoaded: false
    }
  },
  computed: {
    top30_vote_average() {
      // console.log(this.$store.getters.top30_vote_average)
      return this.$store.getters.top30_vote_average
    }
  }
}
</script>

<style>
.recom-img {
  width:120px; 
  height:120px;
  /* margin: 0 300px 0 */
}

.image-link {
  display: inline-block;
  position: relative;
}

.image-link::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-link:hover::after {
  opacity: 1;
}
</style>