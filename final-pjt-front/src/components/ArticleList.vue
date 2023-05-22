<template>
  <div class="article-list">
    <h3 style="color:white">Article List</h3>

      <div v-if="articles">
        <table class="table">
          <thead>
            <tr>
              <th >제목</th>
              <th>작성자</th>
              <th>작성날짜</th>
            </tr>
          </thead>
          <ArticleListItem 
            v-for="article in articles" :key="article.id" :article="article"/>
         </table>
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
table {
  width: 100%;
  border-collapse: collapse;
}

th{
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555577; /* 구분선 색상을 어두운 회색으로 설정 */
  color: white;
  font-weight: bold;

}


tr:hover {
  background-color: #222244; /* 마우스를 올렸을 때 행 배경색을 어두운 우주색으로 설정 */
}
</style>