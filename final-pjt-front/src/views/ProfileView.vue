<template>
  <div>
    <NavBar/>
    <h1>Profile</h1>
    <p><b>아이디 : {{ getCurrentUser.username }}</b></p>
    <p>닉네임 : {{ getCurrentUser.nickname }}</p>
    <p>생년월일 : {{ getCurrentUser.birth }}</p>
  </div>
</template>

<script>
import NavBar from '@/components/Common/NavBar'

export default {
  name: 'ProfileView',
  components: {
    NavBar
  },
  computed: {
    getCurrentUser() {
      return this.$store.getters.currentUser
    }
    // getCurrentUserName() {
    //   console.log(this.$store.state.current_username)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_username
    // },
    // getCurrentUserNickname() {
    //   console.log(this.$store.state.current_usernickname)
    //   // console.log(this.$store.state.token)
    //   return this.$store.state.current_usernickname
    // }
  }
}
</script>

<style>

</style>