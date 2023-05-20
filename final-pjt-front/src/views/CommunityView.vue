<template>
  <div class="Community">
    <NavVar/>
    <h1>Community</h1>
    <router-link :to="{ name: 'ArticleCreateView' }">[CREATE]</router-link>
    <ArticleList/>
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import NavVar from '@/components/Common/NavVar'

export default {
  name: 'CommunityView',
  components: {
    ArticleList,
    NavVar
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