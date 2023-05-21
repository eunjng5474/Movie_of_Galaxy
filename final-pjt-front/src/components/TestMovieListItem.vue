<template>
  <div>
    <b-carousel-slide>
      <template #img>
        <router-link :to="{
          name: 'MovieDetailView',
          params: {id: movie.id}}">
          <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="">
        </router-link>       
        </template>
    </b-carousel-slide>
  </div>
</template>

<script>
export default {
  name: 'TestMovieListItem',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>