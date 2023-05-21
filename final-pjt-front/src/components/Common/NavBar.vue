<template>
  <div>
      <!-- <h1>네브바다임마</h1> -->
      <br>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <router-link to="/movies" class="navbar-brand ">로고</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/movies" class="nav-link active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/community" class="nav-link">Community</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link">login임시(나중game)</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/signup" class="nav-link">signup임시(나중없어짐)</router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search임시(밑으로내림)</button>
            </form>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                프로필(이미지)
              </a>
              <ul class="dropdown-menu dropdown-menu-end" style="max-width: 150px">
                <li><router-link class= "droptown-item" :to="{ name: 'ProfileView', params: {username: getCurrentUser.username}}">MyProfile</router-link></li>
                
  
                <li> <router-link to="/" class="nav-link dropdown-item">로그아웃임시</router-link></li>
              </ul>
            </li>
          </div>
        </div>
    </nav>
    <br>
  </div>
</template>

<script>
export default {
  name:'NavBar',

  computed: {
    getCurrentUser() {
      return this.$store.getters.currentUser
    }
  }

}
</script>

<style>

</style>