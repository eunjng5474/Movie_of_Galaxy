<template>
  <div class="updatearticle">
    <NavBar/>

    <div id="particles-js"></div>

    <div class="article-create-container">
      <h1 class="article-create-title">게시글 수정</h1>
      <form @submit.prevent="updateArticle" class="article-create-form">
        <label for="title">제목</label>
        <input type="text" id="title" v-model.trim="title"><br>
        <br>
        <label for="content">내용</label>
        <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
        <br>
        <button type="submit">작성 완료</button>
      </form>
      </div>    
  </div>
</template>


<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
import NavBar from '@/components/Common/NavBar'

export default {
 name: 'ArticleUpdateView',
 components: {
  NavBar,
 },
 data() {
  return {
    title: null,
    content: null,
    id: null,
  }
 },
 mounted() {
  this.getArticleUpdate()
  this.initializeParticles()
 },
 methods: {
    updateArticle() {
      const title = this.title
      const content = this.content

      if (!title) {
        alert('제목을 입력해주세요')
        return
      } else if (!content) {
        alert('내용을 입력해주세요')
        return
      }
      axios({
        method: 'put',
        url: `${API_URL}/api/v2/articles/${this.$route.params.id}/`,
        data: { title, content },
      })
      .then(() => {
        // console.log(res)
        const articleId = this.$route.params.id
        this.$router.push({name: 'ArticleDetailView', articleId})
      })
      .catch((err) => {
        console.log(err)
      })
    },
  getArticleUpdate() {
    axios({
      method: 'get',
      url: `${API_URL}/api/v2/articles/${this.$route.params.id}/`,
    })
    .then((res) => {
      // console.log(res)
      this.title = res.data.title
      this.content = res.data.content
      this.id = this.$route.params.id
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
  },

 }
}
</script>

<style scoped>
.updatearticle {
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
  height: 100vh;
  z-index: 0; /* particles-js를 테이블 뒤로 이동 */
  
}

.article-create-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.article-create-form {
  position: relative;
  z-index: 1;
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #555577;
  background-color: #1c1c3c;
  color: #ffffff;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-submit {
  padding: 10px 20px;
  background-color: #555577;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}

.form-submit:hover {
  background-color: #222244;
}

</style>