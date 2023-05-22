<template>
  <div class="Community">
    <NavBar/>
    <h1>Community</h1>
    <!-- 임시 -->

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

  mounted() {
    this.getArticles()
  
  },
  // created() {
  //   this.getArticles()
  // },
  methods: {
    getArticles() {
      // console.log('dispatch')
      this.$store.dispatch('getArticles')
    },

  
  }
}
</script>

<style>
.Community {
 font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0f0f1f; /* 배경색을 어두운 우주색으로 설정 */
  color: #ffffff; /* 글자색을 흰색으로 설정 */
  min-height: 100vh;
}

</style>