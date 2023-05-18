<template>
  <div>
    <div>
      <router-link :to="{
        name: 'MovieDetailView',
        params: {id: movie.id}}">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" style="width:300px; height:350px">
       </router-link> 
      <h5>영화제목 {{movie.title}}</h5>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MovieListItem',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>