<template>
  <tbody>
    <tr>
      <td>
        <router-link :to="{ 
          name: 'ArticleDetailView',
          params: { id: article?.id }}" style="color:white; text-decoration:none;">   
          {{ article?.title }}
        </router-link>
      </td>
      <td>
        <router-link :to="{ 
          name: 'ProfileView',
          params: { username: article?.write_article_user.username }}" style="color:white; text-decoration:none;">   
          {{ article?.write_article_user.nickname }}
        </router-link>
        
      </td>
      <td>
        
        {{article?.created_at.slice(0,10)}}
      </td>
    </tr>
  </tbody>  
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style scoped>
td{
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #555577; /* 구분선 색상을 어두운 회색으로 설정 */
  color: white;
  font-size: 20px;
}


tr:hover {
  background-color: #222244; /* 마우스를 올렸을 때 행 배경색을 어두운 우주색으로 설정 */
}

</style>