<template>
  <div class="article-list">
    <!-- <h3 style="color:white">Article List</h3> -->
    <div class="d-flex justify-content-end" style="margin-bottom: 30px;">
      <img src="@/assets/writing.png" style="width: 40px; height: 40px; margin-right: 10px;">
      <router-link :to="{ name: 'ArticleCreateView' }" 
      style="position:relative; z-index:1; text-decoration:none; font-size:25px; color: white;"><p><b>글 작성하기</b></p></router-link>
    </div>
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

<style scoped>
.article-list{
  width: 70%;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  position: relative;
  z-index:1;
}

th{
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #555577; /* 구분선 색상을 어두운 회색으로 설정 */
  color: white;
  font-weight: bold;
  font-size: 30px;

}


tr:hover {
  background-color: #222244; /* 마우스를 올렸을 때 행 배경색을 어두운 우주색으로 설정 */
}
</style>