<template>
  <div style="width: 100%;">
    <div class="comment d-flex justify-content-between" style="width: 100%;">
      <div v-if="!isEditing" class="commentss">{{comment?.write_comment_user.nickname}} : {{ comment?.content }}</div>
      <div v-if="getCurrentUser.username == comment.write_comment_user.username" >
        <button v-if="!isEditing" class="btn btn btn-outline-light" @click="switchIsEditing">수정</button>
        <form  v-if="isEditing" >
            <div class="d-flex " style="width: 100%">
              <input type="text" v-model="content" style="background-color: rgba(255, 255, 255, 0.4); border-radius: 5px; color: white; height: 40px; width: 650px;">
              <button @click="updateComment" class="btn btn-outline-light align-self-end" style="margin-left: 10px;">수정완료</button>
            </div>
        </form>
        <button v-if="!isEditing" class="deletebtn btn btn-outline-light" @click="deleteComment" style="margin-left: 10px;">삭제</button>
        </div>
    </div>
    <hr>
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
    this.content = this.comment.content
  },
  mounted() {
    this.getCommentUpdate()

  },
  methods: {
    deleteComment() {
  
      axios({
        method: 'delete',
        url: `${API_URL}/api/v2/comments/${this.comment.id}/`,
      })
      .then(() => {
        alert("댓글이 삭제되었습니다.")
        this.$emit('update-comment')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    switchIsEditing() {
      this.isEditing = !this.isEditing
      
    },
    updateComment() {
      this.isEditing = true
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
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getCommentUpdate() {
      axios({
        method: 'get',
        url: `${API_URL}/api/v2/comments/${this.comment.id}/`,
      })
      .then((res) => {
        this.content = res.data.content
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.currentUser
    },
  }
}
</script>

<style scoped>
.comment {
  margin-bottom: 10px;
  font-size: 20px;
}

.visible {
  display: none;
}


</style>