<template>
  <div>
    <NavBar/>
    <h1>Profile</h1>
    <div class="user-information">
      <!-- <h3>{{ getUserInfo?.nickname }}</h3> -->
      <h4>닉네임 : <b>{{ nickname }}</b></h4>
      <!-- <h4>닉네임 : <b>{{ getNickname }}</b></h4> -->
      <!-- <h5>생년월일 : {{birth}}</h5> -->
      <h5>생년월일 : <b>{{ birth_year}}년 {{ birth_month }}월 {{ birth_day}}일</b></h5>
      <h5>별자리 : <b>{{ star }}</b></h5>
    </div>
    <div class="like-movies">
      <!-- <p>{{likes_movie_id}}</p> -->
      <h4>좋아요 누른 영화</h4>
      <br>
       <!-- v-for="like_movie in user_movie_list" :key="like_movie.id" -->
      <div>
        <!-- {{ like_movie.title }} -->
      <carousel-3d height="480" border="5" :autoplay="true" :count="user_movie_list.length" :controls-visible="true"
      style="width: 70%; margin: 0 auto;">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in user_movie_list" :index="idx" :key="idx">
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
    <!-- <p><b>아이디 : {{ getCurrentUser.username }}</b></p>
    <p>닉네임 : {{ getCurrentUser.nickname }}</p>
    <p>생년월일 : {{ getCurrentUser.birth }}</p> -->
    </div>
    <!-- {{ user_movie_list}} -->
    <!-- {{getLike}} -->
    <!-- {{ getCurrentUser}} -->
    <!-- 좋아요 한 무비 아이디 -->
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'ProfileView',
  data() {
    return {
      user_movie_list: [],
      likes_movie_id: [],
      nickname: '',
      birth: '',
      birth_year: '',
      birth_month: '',
      birth_day: '',
      star: '',
    } 
  },
  components: {
    NavBar,
    Carousel3d,
    Slide,
  },
  created() {
    // this.getUserInfo
    this.getUserMovieList()
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.currentUser
    },
    // 임시 - 좋아요 확인
    getLike() {
      return this.$store.getters.movieLike
    },
    getUserInfo() {
      return this.$store.getters.userInfo
    }
    // 프로필 요청 accounts.js에서 했을 때 -> 초기화
    // getNickname() {
    //   return this.$store.getters.nickname
    // },
    // birth() {
    //   return this.$store.getters.birth
    // },
    // user_movie_list() {
    //   return this.$store.getters.user_movie_list
    // },
    // likes_movie_id() {
    //   return this.$store.getters.likes_movie_id
    // }

    // getCurrentUserName() {
    //   console.log(this.$store.state.current_username)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_username
    // },
    // getCurrentUserNickname() {
    //   console.log(this.$store.state.current_usernickname)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_usernickname
    // }
  },
    methods: {
      getUserMovieList() {
        console.log(this.$route.params.username)
        axios({
          method: 'get',
          url: `${API_URL}/accounts/profile/${this.$route.params.username}/`,
          // headers: {Authorization: `Token ${this.getters.token}`},
        })
        .then((res) => {
          // console.log('profile - res data')
          console.log(res.data)
          this.nickname = res.data.nickname
          this.birth = res.data.birth
          this.user_movie_list = res.data.like_movies

          this.birth_year = res.data.birth.slice(0, 4)
          this.birth_month = res.data.birth.slice(5, 7)
          this.birth_day = res.data.birth.slice(8, 11)
          // console.log(res.data.like_movies)

          // ===가 아닌 ==으로 쓰면 형변환 되고, 숫자 비교 가능한 듯
          if ((this.birth_month == 1 && this.birth_day >= 20) || (this.birth_month == 2 && this.birth_day <= 18)) {
            this.star = '물병자리'
          } else if ((this.birth_month == 2 && this.birth_day >= 19) || (this.birth_month == 3 && this.birth_day <= 20)) {
            this.star = '물고기자리' // 물고기
          } else if ((this.birth_month == 3 && this.birth_day >= 21) || (this.birth_month == 4 && this.birth_day <= 19)) {
            this.star = '양자리'  // 양
          } else if ((this.birth_month == 4 && this.birth_day >= 20) || (this.birth_month == 5 && this.birth_day <= 20)) {
            this.star = '황소자리' // 황소
          } else if ((this.birth_month == 5 && this.birth_day >= 21) || (this.birth_month == 6 && this.birth_day <= 21)) {
            this.star = '쌍둥이자리' // 쌍둥이
          } else if ((this.birth_month == 6 && this.birth_day >= 22) || (this.birth_month == 7 && this.birth_day <= 22)) {
            this.star = '게자리' // 게
          } else if ((this.birth_month == 7 && this.birth_day >= 23) || (this.birth_month == 8 && this.birth_day <= 22)) {
            this.star = '사자자리' // 사자
          } else if ((this.birth_month == 8 && this.birth_day >= 23) || (this.birth_month == 9 && this.birth_day <= 23)) {
            this.star = '처녀자리' // 처녀
          } else if ((this.birth_month == 9 && this.birth_day >= 24) || (this.birth_month == 10 && this.birth_day <= 22)) {
            this.star = '천칭자리' // 천칭
          } else if ((this.birth_month == 10 && this.birth_day >= 23) || (this.birth_month == 11 && this.birth_day <= 22)) {
            this.star = '전갈자리' // 전갈
          } else if ((this.birth_month == 11 && this.birth_day >= 23) || (this.birth_month == 12 && this.birth_day <= 24)) {
            this.star = '사수자리' // 사수
          } else if ((this.birth_month == 12 && this.birth_day >= 25) || (this.birth_month == 1 && this.birth_day <= 19)) {
            this.star = '염소자리' // 염소
          }
          
          ///// 좋아요 토글 테스트 할 때 썼던 거
          // for(let i=0; i<this.user_movie_list.length; i++) {
          // // userLikeMovieId.push(userMovieLst[i])
          // // console.log(this.user_movie_list[i].id)
          // this.likes_movie_id.push(this.user_movie_list[i].id)
        // }
        })
        .catch((err) => {
          console.log(err)
        })

      }
    }
}
</script>

<style>
.user-information {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>