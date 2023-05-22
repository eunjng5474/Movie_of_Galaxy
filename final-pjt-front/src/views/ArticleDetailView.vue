<template>
  <div>
    <NavBar/>
    <h1>Article Detail</h1>
    <!-- 물음표 넣어도 새로고침 해야 뜸 -> 어찌 해결? -->
    <h3>제목 : {{detailOneArticle?.title}}</h3>
    <p>내용 : {{detailOneArticle?.content}}</p>
    <p>작성자 : {{detailOneArticle?.id}}</p>
    <router-link :to="{ name: 'ArticleUpdateView', 
    params: {id: detailOneArticle?.id}}">[UPDATE]</router-link>
    <button @click="deleteArticle">DELETE</button>

    <!-- 임시로  뭐받아와지는지 확인중 -->

    <!-- <p>{{detailOneArticle}}</p> -->
    <hr>
    <!-- <router-link :to="{ name: 'CommentCreateView' }">[CREATE COMMENT]</router-link> -->
    <CommentList/>
    <!-- <p>{{ detailOneArticle?.comment_set[1].content}}</p> -->
  </div>
</template>

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
  created() {
    this.getArticleDetail()
  },
  
  computed: {
    detailOneArticle() {
      return this.$store.getters.detailarticle
    }
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
        this.$router.push({ name: 'CommunityView' })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}


</script>

<style>

</style>