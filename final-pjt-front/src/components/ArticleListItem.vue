<template>
  <div>
    <router-link :to="{ 
      name: 'ArticleDetailView',
      params: { id: article.id }}">
      <h5>{{ article?.id }}</h5>
      <p>작성자: {{ article?.write_article_user.nickname }}</p>
      <p>{{ article?.title }}</p>
      {{article}}
    </router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>