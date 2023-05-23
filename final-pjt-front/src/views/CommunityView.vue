<template>
  <div class="Community">
    <div id="particles-js"></div>

    <NavBar/>
    <h1>Community</h1>
    <!-- 임시 -->

    <!-- <router-link :to="{ name: 'ArticleCreateView' }" style="position:relative; z-index:1;">[CREATE]</router-link> -->
    
    <ArticleList/>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<script>
import ArticleList from '@/components/ArticleList'
import NavBar from '@/components/Common/NavBar'


export default {
  name: 'CommunityView',
  components: {
    ArticleList,
    NavBar
  },

  mounted() {
    this.getArticles()
    this.initializeParticles();
  },
  // created() {
  //   this.getArticles()
  // },
  methods: {
    getArticles() {
      // console.log('dispatch')
      this.$store.dispatch('getArticles')
    },
    initializeParticles() {
      particlesJS("particles-js", {
        "particles": {
        "number": {
          "value": 80,
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
            "color": "#000000"
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
          "color": "#ffff00",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
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


<style>

.Community {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0f0f1f; /* 배경색을 어두운 우주색으로 설정 */
  color: #ffffff; /* 글자색을 흰색으로 설정 */
  height: 100vh;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* particles-js를 테이블 뒤로 이동 */
}
</style>

