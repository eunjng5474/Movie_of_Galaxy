<template>
  <div class="Community">
    <NavBar/>
    <h1>Community</h1>
    <router-link :to="{ name: 'ArticleCreateView' }">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import NavBar from '@/components/Common/NavBar'

export default {
  name: 'CommunityView',
  components: {
    ArticleList,
    NavBar
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