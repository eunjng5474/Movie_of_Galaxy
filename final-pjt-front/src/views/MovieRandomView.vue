<template>
  <div class="movie-popular-list-container">
    <h1> 랜덤 영화 추천</h1>
    <div class= "movie-card-container border border-black p-5">
      <!-- <vue-glide> -->
        <!-- <vue-glide-slide> -->
          <MovieListItem v-for="movie in random30" :key="movie.id" :movie="movie"/>
        <!-- </vue-glide-slide> -->
        <!-- </vue-glide> -->
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem'
// import Vue from 'vue'
// import { Carousel3d, Slide } from 'vue-carousel-3d';
import { Glide, GlideSlide } from 'vue-glide-js'

// Vue.use(Carousel3d)

export default {
  name: 'MovieRandomView',
  components: {
    MovieListItem,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
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

</style>