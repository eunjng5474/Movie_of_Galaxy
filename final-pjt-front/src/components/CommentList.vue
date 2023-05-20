<template>
  <div>
    <CommentListForm @create-comment="getArticleDetail"/>
    <h3>Comment List</h3>
    <CommentListItem @update-comment="getArticleDetail"
    v-for="(comment, idx) in comments" :key="idx" :comment="comment"/>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem'
import CommentListForm from '@/components/CommentListForm'
// import axios from 'axios'
// const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CommentList',
  components: {
    CommentListItem,
    CommentListForm,
  },
  computed: {
    comments() {
      return this.$store.getters.detailarticle.comment_set
    }
  },
  methods: {
    getArticleDetail() {
      const articleId = this.$route.params.id
      this.$store.dispatch('getArticleDetail', articleId)
    },
    // updateComments() {
    //   axios({
    //     method: 'get',
    //     url: `${API_URL}/api/v2/articles/${ this.$route.params.id }/`,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     // context.commit('GET_ARTICLE_DETAIL', res.data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<style>

</style>