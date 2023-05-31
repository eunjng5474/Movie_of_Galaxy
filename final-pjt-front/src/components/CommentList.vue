<template>
  <div>
    <div class="comment-section">
      <h4><b>댓글: {{commentCount}}개</b></h4>
      <CommentListItem @update-comment="getArticleDetail"
        v-for="(comment, idx) in comments" :key="idx" :comment="comment"/>
      <div class="comment-form">
      <CommentListForm @create-comment="getArticleDetail"/>
      </div>
    </div>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem'
import CommentListForm from '@/components/CommentListForm'

export default {
  name: 'CommentList',
  components: {
    CommentListItem,
    CommentListForm,
  },
  computed: {
    comments() {
      return this.$store.getters.detailarticle.comment_set
    },
    commentCount() {
      return this.$store.getters.detailarticle.comment_count
    }
  },
  methods: {
    getArticleDetail() {
      const articleId = this.$route.params.id
      this.$store.dispatch('getArticleDetail', articleId)
    },
  }
}
</script>

<style>

.comment-section {
  margin-top: 20px;
}

</style>