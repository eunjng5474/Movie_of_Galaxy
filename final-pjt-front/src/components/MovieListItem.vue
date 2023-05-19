<template>
  <div>
      <!-- <div class="col"> -->
      <!-- <vue-glide> -->
        <vue-glide-slide :key="movie.id">
          <div class="card h-200 mt-3 mb-3">
            <router-link :to="{
              name: 'MovieDetailView',
              params: {id: movie.id}}">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="">
            </router-link> 
            <!-- <div calss="card-body"></div> -->
            <div class="card-footer">♡</div>
          </div>
        </vue-glide-slide>
        <!-- </vue-glide> -->
      <!-- </div> -->
  </div>
</template>

<script>
// import { Carousel3d, Slide } from 'vue-carousel-3d';
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  }
}
</script>

<style>
/* 카드 크기 맞추기 */
.card-img-top {
  height: 20rem;
  /* width: 10rem; */
  object-fit:cover;
}





</style>