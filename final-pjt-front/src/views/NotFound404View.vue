<template>
  <div class="notfound-container">
    <!-- <h3>찾을 수 없는 페이지입니다.</h3> -->
    <img class="notfound-img" style="width: 400px; height: 400px;" src="@/assets/404-error.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'NotFound404View'
}
</script>

<style scoped>
.notfound-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 화면 높이에 맞추기 위해 설정 */
  background-color: black;
}

.notfound-img {
  max-width: 100%;
  max-height: 100%;
}

</style>