<template>
  <div class="movie-popular-list-container ">      
    <video class="popbackground-video" autoplay loop muted preload="auto" poster="@/assets/pop_tem.png" @loadeddata="videoLoaded = true">
      <source src="@/assets/popback.mp4" type="video/mp4">
    </video>
    <!-- 로딩페이지 -->
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">
      <img src="@/assets/loading.gif" class="loadImg">

    </div>


    <div v-else>


    <NavBar/>
      <h1 class="fw-bold" style="color:white; margin-bottom: 30px;">믿고 보는 인기순</h1>
      <h4  style="color:white;">현재 인기 있는 영화 TOP 30</h4>
      <br>
      <div class="images" style="text-align: left; border-bottom: solid 1px; border-bottom-color:white; width: 70%; margin: 0 auto;">
        <div>
          <router-link :to="{ name: 'MoviePopularView'}">
            <img class="recom-img" src="@/assets/popul.png" alt="" >
          </router-link>
          <router-link :to="{ name: 'MovieVoteView'}">
            <img class="recom-img" src="@/assets/average.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieRandomView'}">
            <img class="recom-img" src="@/assets/random.png" alt="">
          </router-link>
          <router-link :to="{ name: 'MovieStarView'}">
            <img class="recom-img" src="@/assets/star.png" alt="" >
          </router-link>
        </div>
      </div>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true" style="width: 70%; margin: 0 auto; margin-top: 60px;">
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

  data() {
    return {
      videoLoaded: false,
    }
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
.loadImg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.movie-popular-list-container {
  position: relative;
  overflow:hidden;
  margin: 0;
  padding: 0;
  
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

.recom-img {
  width:120px; 
  height:120px;
  /* margin: 0 300px 0 */
}
</style>