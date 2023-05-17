<template>
  <div>
    <div>
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" alt="" style="width:300px; height:350px">
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