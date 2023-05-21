<template>
  <div class="movie-popular-list-container">
    <NavBar/>
    <div>
      <h1> 랜덤 영화 추천</h1>

      <carousel-3d height="480" border="5" :autoplay="true" :count="30" :controls-visible="true">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in random30" :index="idx" :key="idx">
            <!-- <controls v-if="controlsVisible" :next-html="controlsNextHtml" :prev-html="controlsPrevHtml"
              :width="controlsWidth" :height="controlsHeight"></controls> -->
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button> -->
              <!-- <a href="#" class="prev" @click.prevent="parent.goPrev()"
       :class="{ disabled: !parent.isPrevPossible }"
       :style="`width: ${width}px; height: ${height}px; line-height: ${height}px;`"
       aria-label="Previous slide">
      <span v-html="prevHtml"></span>
    </a> -->
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
    // 'carousel-3d': window['carousel-3d'].Carousel3d,
    // 'slide': window['carousel-3d'].Slide
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      parent: this.$parent
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