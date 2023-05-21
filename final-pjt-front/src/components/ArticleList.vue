<template>
  <div class="article-list">
    <h3>Article List</h3>
    <div v-if="articles">
    <ArticleListItem 
      v-for="article in articles" :key="article.id" :article="article"/>
    </div>
    <!-- <div v-else>
      <p>글이 없어요</p>
    </div> -->
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem,
  },
  computed: {
    articles() {
      return this.$store.getters.articles
    }
  }
}
</script>

<style>

</style>