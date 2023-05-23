<template>
  <div>
      <!-- <div class="col"> -->
      <!-- <vue-glide> -->
        <!-- <vue-glide-slide :key="movie.id"> -->
          <div class="card h-200 mt-3 mb-3 bg-transparent">
            <router-link :to="{
              name: 'MovieDetailView',
              params: {id: movie.id}}">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top border border-white" alt="">
            </router-link> 
            <!-- <div calss="card-body"></div> -->
            <div class="card-footer border border-white">
              <h2 v-if="getLike.includes(movie.id)" @click="likeMovie">&#128150;</h2>
              <h2 v-else @click="likeMovie">&#128420;</h2>
              <!-- <img style="margin-left: 50px; width: 55px; height: 70px;" v-if="getLike.includes(movie.id)" @click="likeMovie" src="@/assets/ufolike.png">
              <img style="margin-left: 50px; width: 55px; height: 50px;" v-else @click="likeMovie" src="@/assets/ufohate11.png"> -->
              <!-- <button :class="like_btn" @click="likeMovie">좋아요</button> -->
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
    },
    getLike() {
      return this.$store.getters.movieLike
    },
  },
  methods: {
        likeMovie() {
      // 좋아요 누르면 새로고침 해야 유저 아이디 뜸
      // 지금은 필요없지만 추후 getmoviedetail 해야할지도
      // 좋아요 누르고 새로고침하면 버튼 색깔 다시 기본으로 돌아감 - this.like_toggle로 판단해서인 듯
      const movieId = this.movie.id
      this.$store.dispatch('likeMovie', movieId)
      // this.like_toggle = !this.like_toggle
      // if (this.getLike.includes(this.detailOneMovie.id)) {
      //   this.like = '💜'
      // } else {
      //   this.like = '🖤'
      // }
    },
    // likeMovie() {
    //   // const movieId = this.$store.getters.detailmovie.id
    //   const movieId = this.this_movie.id
    //   console.log(movieId)
    //   this.$store.dispatch('likeMovie', movieId)
    //   this.like_toggle = !this.like_toggle
    //   if (this.like_toggle === true) {
    //     this.like_btn = 'btn btn-primary'
    //   } else {
    //     this.like_btn = 'btn btn-outline-primary'
    //   }
    // }
  }
}
</script>

<style scop>
/* 카드 크기 맞추기 */
.card-img-top {
  height: 20rem;
  /* width: 10rem; */
  object-fit:cover;
}
/* 
.card-footer {
        background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0 );
} */


</style>