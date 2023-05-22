<template>
  <div>
    <p class="d-inline">{{ comment?.content }}    </p>
    <div v-if="getCurrentUser.username == comment.write_comment_user.username">
      <button class="d-inline" @click="switchIsEditing">UPDATE</button>
      <form v-if="isEditing">
        <input type="text" v-model="content">
        <button @click="updateComment">등록</button>
      </form>
      <button class="d-inline" @click="deleteComment">DELETE</button>
    </div>
    <!-- <p>{{ commment?.} }</p> -->

    <!-- 임시로 댓글 뭐가져오는지 확인하기 -->
    <!-- <p>{{comment}}</p> -->
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CommentListItem',
  props: {
    comment: Object,
  },
  data() {
    return {
      isEditing: false,
      content: null,
    }
  },
  created() {
    console.log(this.comment.id)
    // this.deleteComment()
  },
  methods: {
    deleteComment() {
      // console.log(this.comment.id)
      axios({
        method: 'delete',
        url: `${API_URL}/api/v2/comments/${this.comment.id}/`,
      })
      .then(() => {
        alert("댓글이 삭제되었습니다.")
        this.$emit('update-comment')
        // this.$router.push({name: 'ArticleDetailView'})
      })
      .catch((err) => {
        console.log(err)
      })
    },
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    updateComment() {
      this.isEiditing = true
      const content = this.content

      axios({
        method: 'put',
        url: `${API_URL}/api/v2/comments/${this.comment.id}/`,
        data: {content},
      })
      .then(() => {
        alert("댓글이 수정되었습니다.")
        this.$emit('update-comment')
        this.isEditing = false
        console.log('update comment')
        console.log(this.comment.id)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    getCurrentUser() {
      // console.log(this.$store.getters.currentUser.username)
      return this.$store.getters.currentUser
    }
  }
}
</script>

<style>

</style>