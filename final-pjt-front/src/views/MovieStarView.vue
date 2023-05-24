<template>
  <div class="movie-popular-list-container">
    <video class="popbackground-video" autoplay loop muted preload="auto" poster="@/assets/star_tem.png">
      <source src="@/assets/movielist3.mp4" type="video/mp4">
    </video>
    <NavBar/>
    <div>
      <h1 style="color:white;">별자리가 같은 영화 추천</h1>
      <h3 style="color:white;">{{getUserInfo.nickname}}의 별자리는 {{getUserStar}}입니다.</h3>
      <carousel-3d height="480" border="5" :autoplay="true" :count="starMovies.length" :controls-visible="true" style="width: 70%; margin: 0 auto">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in starMovies" :index="idx" :key="idx">
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
      <!-- <div v-for="movie in starMovies" :key="movie.id">
        <p>{{movie.title}}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name : 'MovieStarView',
  components: {
    NavBar,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      parent: this.$parent,
      starMovies: [],
    }
  },
  created() {
    this.getStarMovies()
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.userInfo
    },
    getUserStar() {
      return this.$store.getters.userStar
    },
    getAllMovies() {
      return this.$store.getters.all_movies
    },
  },
  methods: {
    getStarMovies() {
      // console.log(this.getAllMovies)
      for(let i=0; i<this.getAllMovies.length; i++) {
        if (this.getUserStar == '물병자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 1 && movie_day >= 20) || (movie_month == 2 && movie_day <= 18)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '물고기자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 2 && movie_day >= 19) || (movie_month == 3 && movie_day <= 20)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '양자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 3 && movie_day >= 21) || (movie_month == 4 && movie_day <= 19)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '황소자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month ==4 && movie_day >= 20) || (movie_month == 5 && movie_day <= 20)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '쌍둥이자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 5 && movie_day >= 21) || (movie_month == 6 && movie_day <= 21)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '게자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month ==6 && movie_day >= 22) || (movie_month == 7 && movie_day <= 22)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '사자자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 7 && movie_day >= 23) || (movie_month == 8 && movie_day <= 22)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '처녀자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month ==8 && movie_day >= 23) || (movie_month == 9 && movie_day <= 23)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '천칭자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 9 && movie_day >= 24) || (movie_month == 10 && movie_day <= 22)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '전갈자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 10 && movie_day >= 23) || (movie_month == 11 && movie_day <= 22)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '사수자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month ==11 && movie_day >= 23) || (movie_month == 12 && movie_day <= 24)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
        else if (this.getUserStar == '염소자리') {
          let movie_month = this.getAllMovies[i].release_date.slice(5, 7)
          let movie_day = this.getAllMovies[i].release_date.slice(8, 11)
          if ((movie_month == 12 && movie_day >= 25) || (movie_month == 1 && movie_day <= 19)) {
            this.starMovies.push(this.getAllMovies[i])
        }
      } 
    }
    // console.log(this.starMovies)
  }
  } 
}
</script>

<style scoped>

</style>