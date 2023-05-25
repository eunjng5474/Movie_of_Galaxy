<template>
  <div class="article-detail">
    <NavBar/>
    <!-- <h1>Article Detail</h1> -->
    <div id="particles-js"></div>
    <div class="article-detail-container">
      <h1 class="post-title">{{detailOneArticle?.title}}</h1>
      <p class="author-info" style="text-align: right;">작성자: 
        <router-link :to="{ name: 'ProfileView',params: { username: article?.write_article_user.username }}" style="color:white; text-decoration:none;">
          {{detailOneArticle?.write_article_user.nickname}}</router-link>
           | 작성일: {{detailOneArticle?.created_at.slice(0,10)}}</p>
      <hr>
      <div class="post-content">
        <p>{{detailOneArticle?.content}}</p>
      </div>
      <!-- 자기가작성한것만 수정하기랑 삭제가뜸 -->
      <div v-if="isArticleAuthor" class="justify-content-end">
        <router-link :to="{ name: 'ArticleUpdateView', 
        params: {id: detailOneArticle?.id}}">
        <button class="btn btn-outline-success" style="margin-right: 10px;">수정</button></router-link>
        <button class="btn btn-outline-danger" style="margin-left: 10px;" @click="deleteArticle">삭제</button>
      </div>
      <hr>
      
      <!-- <router-link :to="{ name: 'CommentCreateView' }">[CREATE COMMENT]</router-link> -->
      <CommentList/>
    </div>
    <!-- <p>{{ detailOneArticle?.comment_set[1].content}}</p> -->
  </div>
</template>


<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import axios from 'axios'
import CommentList from '@/components/CommentList'
import NavBar from '@/components/Common/NavBar'

const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'ArticleDetail',
  components: {
    CommentList,
    NavBar
  },

  mounted() {
    this.getArticleDetail()
    this.detailOneArticle
    this.initializeParticles()

  },
  
  computed: {
    detailOneArticle() {
      return this.$store.getters.detailarticle
    },
    // 혹시 제대로 안 되면 community.js getters 수정
    isArticleAuthor() {
      return this.$store.getters.isArticleAuthor
    },
    // getcurrentUser() {
    //   // console.log(this.$store.getters.currentUser.username)
    //   return this.$store.getters.currentUser
    // }
  },

  methods: {
    getArticleDetail() {
      const articleId = this.$route.params.id
      this.$store.dispatch('getArticleDetail', articleId)
    },
    deleteArticle() {
      axios({
        method: 'delete',
        url: `${API_URL}/api/v2/articles/${this.$route.params.id}/`,
      })
      .then(() => {
        alert('글이 삭제되었습니다')
        this.$router.push({ name: 'CommunityView' })
      })
      .catch((err) => {
        console.log(err)
      })
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
          "color": "#ffffff",
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
.article-detail {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0f0f1f; /* 배경색을 어두운 우주색으로 설정 */
  color: #ffffff; /* 글자색을 흰색으로 설정 */
  height: 100vh;
  overflow: auto;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* particles-js를 테이블 뒤로 이동 */
}

.article-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.post-title {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
}

.post-content {
  margin-bottom: 40px;
  font-size: 30px;
}

.author-info {
  font-style: italic;
  color: #999999;
  margin-bottom: 20px;
  font-size: 20px;
}

</style>