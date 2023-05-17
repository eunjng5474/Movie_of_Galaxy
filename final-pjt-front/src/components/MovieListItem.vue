<template>
  <div>
    <h5>영화제목 {{movie.title}}</h5>
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