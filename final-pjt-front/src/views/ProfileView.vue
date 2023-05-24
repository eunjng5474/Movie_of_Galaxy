<template>
  <div class="profile-page">
    <NavBar/>
    <div>
    <h1 style=" margin-bottom: 40px; color: white;"><b>My Profile</b></h1>
    <div class="profile-img-and-info d-flex justify-content-around" style="width: 60%; margin: 0 auto; margin-bottom: 70px;">
      <div class="profile-star-img">
        <img class="img-thumbnail" :src="imgg" alt="" style="width: 300px; height: 300px; margin-bottom: 10px;" @click="getRandomImgs">
        <br>
        <h5 style="color: white;" @click="getRandomImgs">사진을 눌러보세요!</h5>
        <!-- <button @click="getRandomImgs">랜덤 가챠</button> -->
      </div>
      <div class="user-information text-start">
        <div class="profile-nickname d-flex">
          <div class="profile-nickname-img">
            <img style="width: 60px; height: 60px; margin-right: 15px;" src="@/assets/alien.png" alt="">
          </div>
          <div class="profile-nickname-text">
            <h5 style="color: black"><b>닉네임</b></h5>
            <h3 style="color: white;"><b>{{ getUserInfo?.nickname }}</b></h3>
          </div>
        </div>
        <!-- <h5>생년월일 : <b>{{ birth_year}}년 {{ birth_month }}월 {{ birth_day}}일</b></h5> -->
        <br>
        <div class="profile-birth d-flex">
          <div class="profile-birth-img">
            <img style="width: 60px; height: 60px; margin-right: 15px;" src="@/assets/birthday-cake.png" alt="">
          </div>
          <div class="profile-birth-text">
            <h5 style="color: black"><b>생년월일</b></h5>
            <h3 style="color: white;"><b>{{ getUserBirthYear }}년 {{ getUserBirthMonth }}월 {{getUserBirthDay}}일</b></h3>
          </div>
        </div>
        <br>
        <div class="profile-star d-flex">
          <div class="profile-star-img">
            <img style="width: 60px; height: 60px; margin-right: 15px;" src="@/assets/constellation.png" alt="">
          </div>
          <div class="profile-star-text">
            <h5 style="color: black"><b>별자리</b></h5>
            <h3 style="color: white;"><b>{{ getUserStar }}</b></h3>
          </div>
        </div>
      </div>
    </div>
    <div class="like-movies">
      <!-- <p>{{likes_movie_id}}</p> -->
      <h2 style="color: white;"><b>{{ getUserInfo?.nickname }}님이 좋아한 영화</b></h2>
      <br>
       <!-- v-for="like_movie in user_movie_list" :key="like_movie.id" -->
      <div>
      <carousel-3d height="480" border="5" :autoplay="true" :count="getUserInfo?.like_movies.length" :controls-visible="true"
      style="width: 70%; margin: 0 auto;">
        <slide style="border-color: white;" 
        v-for="(movie, idx) in getUserInfo?.like_movies" :index="idx" :key="idx">
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
  </div>
</template>

<script>
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'
import NavBar from '@/components/Common/NavBar'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import _ from "lodash"

export default {
  name: 'ProfileView',
  data() {
    return {
      user_movie_list: [],
      likes_movie_id: [],
      nickname: '',
      birth: '',
      imgpath: '1',
      imgg: require(`@/assets/movielist4.png`),
      // randomProfileImg: require(`@/assets/star/water/11.jpg`),
      // birth_year: '',
      // birth_month: '',
      // birth_day: '',
      // star: '',
    } 
  },
  components: {
    NavBar,
    Carousel3d,
    Slide,
  },
  created() {
    this.getUserInformation()
    this.getRandomImgs()
    // console.log(this.$store.getters.getUserStarImg)
    // console.log(this.getUserStarImg())
    // this.getUserMovieList()
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
    },
    getUserBirthYear() {
      return this.$store.getters.userBirthYear
    },
    getUserBirthMonth() {
      return this.$store.getters.userBirthMonth
    },
    getUserBirthDay() {
      return this.$store.getters.userBirthDay
    },
    getUserStar() {
      return this.$store.getters.userStar
    },
    userStarImgs() {
      return this.$store.getters.userStarImgs
    },
    // getRandomImgage() {
    //   return `@/assets/star/water/${this.imgpath}.jpg`
    // }
    // getRandomImg() {
    //   const imgs = this.$store.getters.userStarImg
    //   const randomImg = _.sample(imgs);
    //   return randomImg
    // }
    // saveUserInfo() {
      
    // }

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
      getUserInformation() {
        // console.log(this.$route.params)
        const username = this.$route.params.username
        // const username = this.getUserInfo.username
        // console.log(username)
        this.$store.dispatch('getUserInfo', username)
        // console.log(this.getUserInfo)
        // const tmpinfo = this.getUserInfo
        // this.birth_year = tmpinfo.birth.slice(0, 4)
        // this.birth_month = tmpinfo.birth.slice(5, 7)
        // this.birth_day = tmpinfo.birth.slice(0, 4)
        // console.log(this.birth_year)
      },
      getRandomImgs() {
        const imgs = this.$store.getters.userStarImgs
        // // console.log(1111111111)
        // console.log(imgs)
        // const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]S
        const randomImg = _.sample(imgs);
        // console.log(2222222222222)
        // console.log(randomImg)t

        // this.imgpath = randomImg
        this.imgg = require(`@/assets/star/${this.getUserStar}/${randomImg}.jpg`)
        // this.randomProfileImg = randomImg
        // console.log(this.randomProfileImg)
        // return randomImg
      }

    }
}
</script>

<style scoped>
.profile-page {
  background-image: url(@/assets/profileback10.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.user-information {
  margin-top: 30px;
  margin-bottom: 50px;
  color: darkslateblue;
}

</style>