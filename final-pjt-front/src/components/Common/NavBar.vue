<template>
  <div class="nav-bar">
      <!-- <h1>네브바다임마</h1> -->
      <br>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <router-link to="/movies" class="navbar-brand " style="color:white;"><h3><b>Movie Of Galaxy</b></h3></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="display: none;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/movies" class="nav-link active ms-4" aria-current="page" style="color:white;"><h5><b>Home</b></h5></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/community" class="nav-link ms-4" style="color:white;"><h5><b>Community</b></h5></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/nasa" class="nav-link ms-4" style="color:white;"><h5><b>Daily Star</b></h5></router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/signup" class="nav-link" style="color:white;">signup임시(나중없어짐)</router-link>
              </li> -->
            </ul>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white; margin-right: 50px;">
                <h5><b>My Page</b></h5>
              </a>
              <ul class="dropdown-menu dropdown-menu-end justify-content-center" style="max-width: 150px background-color: black; opacity: 0.5;">
                <!-- <li><router-link class= "droptown-item" :to="{ name: 'ProfileView', params: {username: getCurrentUser.username}}">MyProfile</router-link></li> -->
                <li class="d-flex justify-content-center" @click="getUserInfo"><router-link class= "droptown-item" 
                  :to="{ name: 'ProfileView', params: {username: getCurrentUser.username}}" style="color: black; text-decoration: none;">
                  <span class="profile-link" style="color: black"><b>My Profile</b></span></router-link></li>
                <li class="d-flex justify-content-center" style="color: black" @click="logout"><b>Logout</b></li>
                <!-- <li> <router-link to="/" class="nav-link dropdown-item">로그아웃임시</router-link></li> -->
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
  },
  methods: {
    logout() {
      this.$store.dispatch('deleteLikes')
      this.$store.dispatch('logout')
    },
    getUserInfo() {
      const username = this.getCurrentUser.username
      this.$store.dispatch('getUserInfo', username)
    }
  }

}
</script>

<style scoped>
.nav-bar{
  position: relative;
  z-index:1;
}
.nav-item.dropdown::marker {
  content: none;
}

.router-link-exact-active {
  text-decoration: none !important;
}

/* 임시 */
.nav-link:hover {
  background-color: #000;
  opacity: 0.5;
  transition: background-color 0.3s ease-in-out;
}

.dropdown-menu .droptown-item:hover {
  background-color: #000;
  opacity: 0.5;
  transition: background-color 0.3s ease-in-out;
}

.profile-link:hover {
  color: #000;
}
</style>