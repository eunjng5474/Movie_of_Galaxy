<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  components: {
   
  
  },
  data() {
    return {
  
    }
  },
  methods: {
  },

};

</script>

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

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
