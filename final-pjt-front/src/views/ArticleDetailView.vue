<template>
  <div>
    <h1>Article Detail</h1>
    <h3>{{detailOneArticle?.title}}</h3>
    <p>{{detailOneArticle?.content}}</p>
    <!-- {{detailOneArticle.id}} -->
    <router-link :to="{ name: 'ArticleUpdateView', 
    params: {id: detailOneArticle.id}}">[UPDATE]</router-link>
    <button @click="deleteArticle">DELETE</button>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'ArticleDetail',

  created() {
    this.getArticleDetail()
  },
  
  computed: {
    detailOneArticle() {
      return this.$store.state.detailarticle
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