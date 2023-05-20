<template>
  <div>
    <!-- <h3>댓글 작성</h3>
    <form @submit.prevent="createComment">
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea>
      <input type="submit" id="submit">
    </form> -->
  </div>
</template>

<script>
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'

// export default {
//   name: 'CommentCreateView',
//   data() {
//     return {
//       content: null,
//     }
//   },
//   methods: {
//     createComment() {
//       const content = this.content

//       if (!content) {
//         alert('댓글을 입력해주세요')
//         return
//       }
//       axios({
//         method: 'post',
//         url: `${API_URL}/api/v2/articles/${this.$route.params.id}/comments/`,
//         data: {content},
//       })
//       .then(() => {
//         this.$router.push({ name: 'ArticleDetailView'})
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     }
//   }
// }
</script>

<style>

</style>