<template>
  <div class="movie-popular-list-container">

    <video class="popbackground-video" autoplay loop muted preload="auto" poster="@/assets/ran_tem.png" @loadeddata="videoLoaded = true">
      <source src="@/assets/ranback.mp4" type="video/mp4">
    </video>
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">
      <img src="@/assets/loading.gif" class="loadImg">

    </div>

    <div v-else>

    <NavBar/>
    <div>
      <h1 class="fw-bold" style="color:white; margin-bottom: 30px;">랜덤 영화 추천</h1>
      <h4 style="color:white;">오늘은 운에 맡겨보는 게 어떤가요?</h4>
      <br>
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
        <!-- <div>
          <button class="btn btn-outline-primary">다시 추천</button>
        </div> -->
      </div>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true" style="width: 70%; margin: 0 auto; margin-top: 60px; margin-bottom: 50px;">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in random30" :index="idx" :key="idx">
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
    <!-- <div class= "movie-card-container border border-black p-5">
      <MovieListItem v-for="movie in random30" :key="movie.id" :movie="movie"/>
    </div> -->
  </div>
</template>

<script>
// import MovieListItem from '@/components/MovieListItem'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

// import Vue from 'vue'
// import { Carousel3d, Slide } from 'vue-carousel-3d';
// import { Glide, GlideSlide } from 'vue-glide-js'

// Vue.use(Carousel3d)

export default {
  name: 'MovieRandomView',
  components: {
    // MovieListItem,
    NavBar,
    Carousel3d,
    Slide,
    // 'carousel-3d': window['carousel-3d'].Carousel3d,
    // 'slide': window['carousel-3d'].Slide
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      parent: this.$parent,
      videoLoaded: false
    }
  },
  
  computed: {
    random30() {
      return this.$store.getters.random30
    }
  },
}
</script>

<style scoped>
.loadImg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  background-color: rgba(3, 13, 27, 0.5);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-link:hover::after {
  opacity: 1;
}
</style>