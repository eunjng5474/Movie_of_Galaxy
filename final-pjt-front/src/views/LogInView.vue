<template>
  <div class="loginpage">
    <video autoplay loop muted preload="auto" @loadeddata="videoLoaded = true">
      <source src="@/assets/3.mp4" type="video/mp4">
    </video>

    <!-- 로딩 -->
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">
    </div>

    <div v-else>

    <div class="box">
      <br>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="inputBox">
          <input type="text" id="username" v-model="username">
          <label>Username</label>
        </div>
        <div class="inputBox">
          <input type="password" id="password" v-model="password">
          <label>Password</label>
        </div>
        <div>
          <button type="submit" class="btn btn-outline-light m-2">Log In</button>
          <router-link to="/signup">
            <button type="submit" class="btn btn-outline-light m-2">Sign Up</button>
          </router-link>
        </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
      videoLoaded: false
    }
  },
  created() {
    this.getMovies()
    // this.deleteLikes()
  },

  methods: {
    getMovies() {
      this.$store.dispatch('getMovies')
    },
    deleteLikes(){
      this.$store.dispatch('deleteLikes')
    },

    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }
      this.$store.dispatch('getLikeMovies', username)
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
.loginpage {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
  background-color: black;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.625rem;
}


.box h2 {
  margin: 0 0 1.875rem;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox {
  position: relative;
}

.box .inputBox input {
  width: 100%;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.062rem;
  margin-bottom: 1.875rem;
  border: none;
  border-bottom: 0.065rem solid #fff;
  outline: none;
  background: transparent;
}


.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label,
.box .inputBox input:not([value=""]) ~ label {
  top: -1.125rem;
  left: 0;
  color: white;
  font-size: 0.75rem;
}

.box input[type="submit"] {
  border: none;
  outline: none;
  color: #fff;
  background-color: #03a9f4;
  padding: 0.625rem 1.25rem;
  margin: 0 10px 0;
  cursor: pointer;
  border-radius: 0.312rem;
  font-size: 1rem;
}

.box input[type="submit"]:hover {
  background-color: #004362;
}

  /* .loginBtn {
  margin: 0 10px 0;
} */
</style>