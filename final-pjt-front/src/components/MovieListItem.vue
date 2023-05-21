<template>
  <div>
      <!-- <div class="col"> -->
      <!-- <vue-glide> -->
        <!-- <vue-glide-slide :key="movie.id"> -->
          <div class="card h-200 mt-3 mb-3">
            <router-link :to="{
              name: 'MovieDetailView',
              params: {id: movie.id}}">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="">
            </router-link> 
            <!-- <div calss="card-body"></div> -->
            <div class="card-footer">
              <button :class="like_btn" @click="likeMovie">좋아요</button>
            </div>
            <!-- {{ detailOneMovie.like_users}} -->
          </div>
        <!-- </vue-glide-slide> -->
        <!-- </vue-glide> -->
      <!-- </div> -->
  </div>
</template>

<script>
// import { Carousel3d, Slide } from 'vue-carousel-3d';
// import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  },
  data() {
    return {
      like_btn: 'btn btn-outline-primary',
      like_toggle: false,
      this_movie: this.movie
    }
  },
  components: {
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },
  created() {
    // this.likeMovie()
    // likeMovie() {
    //   return this.$store.getters.movieLike
    // }
  },
  computed: {
    detailOneMovie() {
      return this.$store.getters.detailmovie
    },
    getCurrentUser() {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    likeMovie() {
      // const movieId = this.$store.getters.detailmovie.id
      const movieId = this.this_movie.id
      console.log(movieId)
      this.$store.dispatch('likeMovie', movieId)
      this.like_toggle = !this.like_toggle
      if (this.like_toggle === true) {
        this.like_btn = 'btn btn-primary'
      } else {
        this.like_btn = 'btn btn-outline-primary'
      }
    }
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