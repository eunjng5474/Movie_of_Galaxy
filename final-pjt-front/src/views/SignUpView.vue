<template>
  <div class="signuppage">
    <video autoplay loop muted preload="auto" @loadeddata="videoLoaded = true">
      <source src="@/assets/3.mp4" type="video/mp4">
    </video>

    <!-- 로딩 -->
    <div v-if="!videoLoaded" style="background-color:black; height:100vh">

    </div>

    <div>
      
    <div class="box"> 
      <br>
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="inputBox">
          <input type="text" id="username" v-model="username"><br>
          <label>ID</label>
        </div>
        <div class="inputBox">
          <input type="text" id="nickname" v-model="nickname"><br>
          <label for="nickname">nickname</label>
        </div>
        <div class="inputBox">
          <input type="date" id="birth" v-model="birth"><br>
          <label for="birth">birth</label>
        </div>
        <div class="inputBox">
          <input type="password" id="password1" v-model="password1"><br>
          <label for="password1"> password</label>
        </div>
        <div class="inputBox">
          <input type="password" id="password2" v-model="password2">
          <label for="password2"> password confirmation</label>
        </div>
        <button type="submit" class="btn btn-outline-light m-2">Sign Up</button>
      </form>
    </div>
    </div>
</div>
</template>

<script>
// import {mapActions} from 'vuex'


export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      nickname: null,
      birth: null,
      password1: null,
      password2: null,
      videoLoaded: false

    }
  },
  methods: {
    signUp() {
      // console.log('signup')
      const username = this.username
      const nickname = this.nickname
      const birth = this.birth
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username, password1, password2, nickname, birth
      }
      // console.log(payload)
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>

<style scoped>
.signuppage {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: sans-serif;
  background-color:black;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 달력 색갈바꾸기 */
.inputBox input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
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
</style>