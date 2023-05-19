<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/signup">SignUp</router-link> |
      <router-link to="/movies">MOvie</router-link> |
      <router-link to="/community">Community</router-link> |
      <!-- <router-link :to="{ name: 'ProfileView',
        params: {id: user.id}}"> -->
    </nav>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* 배경잠시설정 */
  /* height: 500vh;
  width: 100vw;
  background-image: url('@/assets/background.gif');
  background-size : cover;
  background-repeat : no-repeat; */
}
* {
  box-sizing: content-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
