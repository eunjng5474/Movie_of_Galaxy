<template>
  <div>
          <div class="card h-200 mt-3 mb-3 bg-transparent">
            <router-link :to="{
              name: 'MovieDetailView',
              params: {id: movie.id}}">
              <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top border border-white" alt="">
            </router-link> 
            
            <div class="card-footer border border-white" style="background-image: '@/assets/movielist3.png';">
              
              <img v-if="getLike.includes(movie.id)" @click="likeMovie" src="@/assets/heart.png" alt="" style="width: 30px; height: 30px;">
              
              <img v-else @click="likeMovie" src="@/assets/like.png" alt="" style="width: 30px; height: 30px;">
              
            </div>
            
            
          </div>
  </div>
</template>

<script>

export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  },
  data() {
    return {
      like_btn: 'btn btn-outline-primary',
      like_toggle: false,
      this_movie: this.movie,
      isload: false
    }
  },
  components: {
  },
  created() {

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
    getUserInfo() {
      return this.$store.getters.userInfo
    },
  },
  methods: {
        likeMovie() {
      // 좋아요 누르면 새로고침 해야 유저 아이디 뜸
      // 지금은 필요없지만 추후 getmoviedetail 해야할지도
      // 좋아요 누르고 새로고침하면 버튼 색깔 다시 기본으로 돌아감 - this.like_toggle로 판단해서인 듯
      const movieId = this.movie.id
      this.$store.dispatch('likeMovie', movieId)
    },
    //// 로그아웃 후 다시 로그인해도 기존 좋아요 리스트 반영되게 테스트
      getUserInformation() {
        const username = this.getCurrentUser.username
        this.$store.dispatch('getUserInfo', username)
      },

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



</style>