<template>
  <div class="Community">
    <h1>Community</h1>
    <router-link :to="{ name: 'ArticleCreateView' }">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  name: 'CommunityView',
  components: {
    ArticleList,
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      // console.log('dispatch')
      this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style>

</style>