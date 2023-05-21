<template>
  <div>
    <NavBar/>
    <h1>게시글 수정</h1>
    <form @submit.prevent="updateArticle">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
    </form>
  </div>
</template>

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
 created() {
  this.getArticleUpdate()
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
        this.$router.push({name: 'CommunityView'})
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
  }
 }
}
</script>

<style>

</style>