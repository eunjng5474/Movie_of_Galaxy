<template>
  <div class="heropage">
    <NavBar/>
    
    <div class="">
      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:ironman}}" class="image-link">
              <img class="recom-img" src="@/assets/iron.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:captain}}" class="image-link">
              <img class="recom-img" src="@/assets/captain.gif" alt="">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:thor}}" class="image-link">
              <img class="recom-img" src="@/assets/thor.gif" alt="">
        </router-link>
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:black}}" class="image-link">
              <img class="recom-img" src="@/assets/black.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:avengers}}" class="image-link">
              <img class="recom-img" src="@/assets/avengers.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img" src="@/assets/gog1.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img" src="@/assets/gog2.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img" src="@/assets/gog3.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img" src="@/assets/gog4.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img" src="@/assets/gog5.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:groot}}" class="image-link">
              <img class="recom-img" src="@/assets/groot.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:hulk}}" class="image-link">
              <img class="recom-img" src="@/assets/hulk.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:antman}}" class="image-link">
              <img class="recom-img" src="@/assets/ant.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:ironman}}" class="image-link">
              <img class="recom-img" src="@/assets/vision.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:spiderman}}" class="image-link">
              <img class="recom-img" src="@/assets/spider.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:terminate}}" class="image-link">
              <img class="recom-img" src="@/assets/terminate.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:starwars}}" class="image-link">
              <img class="recom-img" src="@/assets/starwars.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:superman}}" class="image-link">
              <img class="recom-img" src="@/assets/super.gif" alt="">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:batman}}" class="image-link">
              <img class="recom-img" src="@/assets/batman.gif" alt="">
        </router-link>
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:trans}}" class="image-link">
              <img class="recom-img" src="@/assets/bumble.gif" alt="">
        </router-link>
      </div>

    </div>  
  </div>

</template>

<script>
import NavBar from '@/components/Common/NavBar'

export default {
  name: 'HeroView',
  components: {
    NavBar,
  },

  data() {
    return {
      ironman:"아이언맨",
      superman:"슈퍼맨",
      batman:"배트맨",
      antman:"앤트맨",
      spiderman:"스파이더맨",
      GOGa:"가디언즈 오브 갤럭시",
      groot:"그루트",
      captain:"캡틴 아메리카",
      thor:"토르",
      hulk:"헐크",
      trans:"트랜스포머",
      black:"블랙 팬서",
      terminate:"터미네이터",
      starwars:"스타워즈",
      avengers:"어벤져스",

    } 
  }

}
</script>

<style scoped>
  .heropage {
    background-color:black;
    height: 100vh;
    /* z-index: -1; */
  }
  .image-link {
    margin: 50px;
  }
  .lowlow {
    margin-bottom: 40px;
  }
</style>