<template>
  <div>
      <div class="col">
        <div class="card h-200">
          <router-link :to="{
            name: 'MovieDetailView',
            params: {id: movie.id}}">
            <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="">
          </router-link> 
          <!-- <div calss="card-body"></div> -->
          <div class="card-footer">♡</div>
        </div>
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
/* 카드 크기 맞추기 */
.card-img-top {
  height: 25rem; 
  object-fit:cover;
}


</style>