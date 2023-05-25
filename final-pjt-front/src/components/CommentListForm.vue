<template>
  <div>
    <form @submit.prevent="createComment">
      <!-- <label for="content"></label> -->
      <input type="text" size="38" id="comment" v-model="content" placeholder="댓글을 입력해주세요"
      style="background-color: rgba(255, 255, 255, 0.4); border-radius: 5px; height: 40px; margin-right: 10px; ">
      <button class="btn btn-outline-light" type="submit">제출</button> 
      <!-- <input class="btn btn-outline-secondary" type="submit" id="submit"> -->
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: null,
    }
  },
  methods: {
    createComment() {
      // alert("댓글이 등록되었습니다")
      const content = this.content
      console.log(this.$route.params.id)
      if (!content) {
        alert('댓글을 입력해주세요')
        return
      }
      axios({
        method: 'post',
        url: `${API_URL}/api/v2/articles/${this.$route.params.id}/comments/`,
        data: {content},
        headers: {
          Authorization: `Token ${this.$store.getters.token}`
        }
      })
      .then(() => {
        alert("댓글이 등록되었습니다.")
        this.content = null
        this.$emit('create-comment')
        // this.$router.push({ name: 'ArticleDetailView'})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
input::placeholder {
  color: white;
  /* font-style: italic; */
}

input {
  color: white;
}
</style>