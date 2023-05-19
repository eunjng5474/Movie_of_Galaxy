<template>
  <div class="body">
    <div class="box">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div class="inputBox">
          <input type="text" id="username" v-model="username"><br>
          <label>username</label>
        </div>
        <div class="inputBox">
          <input type="text" id="nickname" v-model="nickname"><br>
          <label for="nickname">nickname</label>
        </div>
        <div class="inputBox">
          <input type="date" id="birth" v-model="birth"><br>
          <label for="birth">birthday</label>
        </div>
        <div class="inputBox">
          <input type="password" id="password1" v-model="password1"><br>
          <label for="password1"> password</label>
        </div>
        <div class="inputBox">
          <input type="password" id="password2" v-model="password2">
          <label for="password2"> password confirmation</label>
        </div>
        <input type="submit" value="SignUp">
      </form>
    </div>
<!-- ------------------------------------------------------ -->
    <!-- <div class="box">
      <h2>Login</h2>
      <form>
        <div class="inputBox">
          <input type="email" name="email" required onkeyup="this.setAttribute('value', this.value);" value="">
          <label>Username</label>
        </div>
        <div class="inputBox">
          <input type="password" name="password" required value=""
                onkeyup="this.setAttribute('value', this.value);"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
          <label>Password</label>
        </div>
        <input type="submit" name="sign-in" value="Sign In">
      </form>
    </div> -->
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
        username, nickname, birth, password1, password2
      }
      this.$store.dispatch('signUp', payload)
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: url(https://picsum.photos/2500/1500?image=1041);
  background-size: cover;
  font-family: sans-serif;
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