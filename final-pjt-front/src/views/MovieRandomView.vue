<template>
  <div class="movie-popular-list-container">
    <NavBar/>
    <div>
      <h1> 랜덤 영화 추천</h1>
      <carousel-3d height="480" border="5" :autoplay="true" :count="30">
  <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> -->
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
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },
  computed: {
    random30() {
      return this.$store.getters.random30
    }
  },
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


.carousel-control-prev,
.carousel-control-next {
  background-color: red;
  /* position: absolute; */
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.carousel-control-prev-icon {
  left: 10px;
  color: red;
}

.carousel-control-next {
  right: 10px;
}
</style>