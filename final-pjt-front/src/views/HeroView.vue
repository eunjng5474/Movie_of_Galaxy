<template>
  <div class="heropage">

      <div div id="particles-js"></div>

    <NavBar/>

    <div class="">
      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:ironman}}" class="image-link">
              <img class="recom-img1" src="@/assets/iron.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:captain}}" class="image-link">
              <img class="recom-img1" src="@/assets/captain.gif" alt="">
        </router-link>
              
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:thor}}" class="image-link">
              <img class="recom-img1" src="@/assets/thor.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:black}}" class="image-link">
              <img class="recom-img1" src="@/assets/black.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:avengers}}" class="image-link">
              <img class="recom-img1" src="@/assets/avengers.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img1" src="@/assets/gog1.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img1" src="@/assets/gog2.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img1" src="@/assets/gog3.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img1" src="@/assets/gog4.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:GOGa}}" class="image-link">
              <img class="recom-img1" src="@/assets/gog5.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:groot}}" class="image-link">
              <img class="recom-img1" src="@/assets/groot.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:hulk}}" class="image-link">
              <img class="recom-img1" src="@/assets/hulk.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:antman}}" class="image-link">
              <img class="recom-img1" src="@/assets/ant.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:ironman}}" class="image-link">
              <img class="recom-img1" src="@/assets/vision.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:spiderman}}" class="image-link">
              <img class="recom-img1" src="@/assets/spider.gif" alt="">
        </router-link>
      </div>

      <div class="lowlow">
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:terminate}}" class="image-link">
              <img class="recom-img1" src="@/assets/terminate.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:starwars}}" class="image-link">
              <img class="recom-img1" src="@/assets/starwars.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:superman}}" class="image-link">
              <img class="recom-img1" src="@/assets/super.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:batman}}" class="image-link">
              <img class="recom-img1" src="@/assets/batman.gif" alt="">
        </router-link>
        <router-link :to="{ name: 'MovieSearchView', params:{keyword:trans}}" class="image-link">
              <img class="recom-img1" src="@/assets/bumble.gif" alt="">
        </router-link>
      </div>

    </div>  
  </div>

</template>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<script>
import NavBar from '@/components/Common/NavBar'

export default {
  name: 'HeroView',
  components: {
    NavBar,
  },

  mounted() {
      this.initializeParticle();
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
  },

  methods: {
    initializeParticle() {
      particlesJS("particles-js", {
        "particles": {
        "number": {
          "value": 300,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#fff233"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 800,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
      });
    }
  }



}
</script>

<style scoped>
.heropage {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: black; /* 배경색을 어두운 우주색으로 설정 */
  color: #ffffff; /* 글자색을 흰색으로 설정 */
  height: auto;
  overflow: auto;
}
.image-link {
margin: 50px;
}
.lowlow {
margin-bottom: 40px;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* particles-js를 테이블 뒤로 이동 */
}

.recom-img1{
  width:120px; 
  height:120px;    
}
</style>